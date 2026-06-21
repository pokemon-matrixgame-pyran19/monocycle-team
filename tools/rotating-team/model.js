// 回転チーム・モデル：相手構築を θ だけ回したときのゲームの値 g(θ) を計算するコア。
// ブラウザ（<script src="model.js">）と Node（require('./model.js')）の両方で動く。
// 描画（SVG/DOM）は持たず、純粋な計算だけをここに置く。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.RotatingTeam = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  const d2r = Math.PI / 180;
  const cross = (ax, ay, bx, by) => ax * by - ay * bx;

  // θ だけ回した4ベクトル（自分の v1,v2 は固定、相手の v3,v4 を θ 回転）。
  // p = {g1,g2,d3,d4,r1,r2,r3,r4}（角度は度、r は長さ）。
  function vecs(th, p) {
    return {
      v1: [p.r1 * Math.cos(p.g1 * d2r),        p.r1 * Math.sin(p.g1 * d2r)],
      v2: [p.r2 * Math.cos(p.g2 * d2r),        p.r2 * Math.sin(p.g2 * d2r)],
      v3: [p.r3 * Math.cos((p.d3 + th) * d2r), p.r3 * Math.sin((p.d3 + th) * d2r)],
      v4: [p.r4 * Math.cos((p.d4 + th) * d2r), p.r4 * Math.sin((p.d4 + th) * d2r)]
    };
  }

  // 構築ベクトルの大きさ |V| = |v_a - v_b| / |v_a × v_b|
  function Rof(va, vb) {
    const cr = cross(va[0], va[1], vb[0], vb[1]);
    return Math.hypot(va[0] - vb[0], va[1] - vb[1]) / Math.abs(cr);
  }

  // θ でのゲームの値。two=true なら本質的に2択、false なら実質一択（鞍点＝マクシミン）。
  function gval(th, p) {
    const V = vecs(th, p);
    const a = cross(V.v1[0], V.v1[1], V.v3[0], V.v3[1]);
    const b = cross(V.v2[0], V.v2[1], V.v3[0], V.v3[1]);
    const c = cross(V.v1[0], V.v1[1], V.v4[0], V.v4[1]);
    const d = cross(V.v2[0], V.v2[1], V.v4[0], V.v4[1]);
    const maximin = Math.max(Math.min(a, c), Math.min(b, d));
    const minimax = Math.min(Math.max(a, b), Math.max(c, d));
    let g, two;
    if (minimax - maximin > 1e-7) { g = (a * d - b * c) / (a + d - b - c); two = true; }
    else { g = maximin; two = false; }
    return { g, two, a, b, c, d };
  }

  // |V_i|, |V_j|（V_j は剛体回転なので θ=0 で評価すれば一定）
  function radii(p) {
    const V0 = vecs(0, p);
    return { Ri: Rof(V0.v1, V0.v2), Rj: Rof(V0.v3, V0.v4) };
  }

  // θ=0..360 を step 刻みでサンプル → [{th, g, two}, ...]
  function sample(p, step) {
    step = step || 0.5;
    const pts = [];
    for (let th = 0; th <= 360 + 1e-9; th += step) {
      const r = gval(th, p);
      pts.push({ th, g: r.g, two: r.two });
    }
    return pts;
  }

  // 2択の帯（窓）を実際のレジームから数値検出。境界はサンプル間の中点。
  function bands(pts) {
    const out = []; let bs = null;
    for (let i = 0; i < pts.length; i++) {
      const prev = i > 0 ? pts[i - 1] : null;
      if (pts[i].two && bs === null) bs = prev ? (prev.th + pts[i].th) / 2 : pts[i].th;
      if (!pts[i].two && bs !== null) { out.push([bs, (prev.th + pts[i].th) / 2]); bs = null; }
    }
    if (bs !== null) out.push([bs, pts[pts.length - 1].th]);
    return out;
  }

  // まとめて読み取り用：Ri,Rj,窓,最大/最小/最大絶対値（および全サンプル）。
  function summary(p, step) {
    const pts = sample(p, step);
    const { Ri, Rj } = radii(p);
    let max = pts[0], min = pts[0], maxAbs = pts[0];
    for (const pt of pts) {
      if (pt.g > max.g) max = pt;
      if (pt.g < min.g) min = pt;
      if (Math.abs(pt.g) > Math.abs(maxAbs.g)) maxAbs = pt;
    }
    return { Ri, Rj, bands: bands(pts), max, min, maxAbs, pts };
  }

  // 記事のサンプル配置（γ=60,120 / δ=40,140 / 長さ1）
  const DEFAULTS = { g1: 60, g2: 120, d3: 40, d4: 140, r1: 1, r2: 1, r3: 1, r4: 1 };

  return { cross, vecs, Rof, gval, radii, sample, bands, summary, DEFAULTS };
});
