---
name: rotating-team-calc
description: >-
  単相性モデル／二体構築の相性／「相手構築を θ だけ回したときのゲームの値 g(θ)」を、検証済みツール
  tools/rotating-team/（model.js・cli.js・experient.html）で計算・検算するためのスキル。
  g(θ) の値・2択の窓・|V_i|,|V_j|・最大/最小/最大絶対値を知りたいとき、本文や原稿の数式・グラフ読み取りの数字を
  確かめたいとき、数値図のデータを出したいときに使う。
  「g(θ) を計算して」「この θ での値は？」「2択の窓はどこ？」「まとめ／グラフ読み取りの数字が本文と合ってるか確認して」
  「長さや広がりを変えたら g はどうなる？」など、この回転チーム・モデルの数値を扱う場面では、明示的に言われなくても使う。
  Python などでモデルを書き直すのは禁止。記事の文章そのものを書く作業は pyran-article-writing スキルの担当。
---

# rotating-team 計算・検算スキル

「ポケモン単体の相性ベクトル → 二体構築 → 相手を θ 回したときのゲームの値 `g(θ)`」を数値で確かめるための専用ツールが
`tools/rotating-team/` にある。**このテーマの数値はここで計算する。Python などで毎回モデルを書き直さない**
（書き直すと計算が二重化して食い違いの元になる。実際それを避けるために作ったツール）。

## まずやること

1. `tools/rotating-team/docs/README.md` を読む（パラメータ記号・CLI フラグ・API の一覧）。
2. 計算は CLI か `model.js` の `require` で行う。コアは1つ（`model.js`）で、CLI・ブラウザ版・このスキルが全部それを共有する。

## CLI（読み取り・検算の主役）

```bash
node tools/rotating-team/cli.js                       # 既定=記事のサンプル配置（γ=60,120 / δ=40,140 / 長さ1）
node tools/rotating-team/cli.js --theta 60,90,120     # 指定 θ での g と領域
node tools/rotating-team/cli.js --g1 5 --g2 175       # パラメータ上書き（角度は度、r1..r4 で長さ）
node tools/rotating-team/cli.js --table 1 > curve.csv # θ,g,領域 を CSV 出力（数値図のデータ）
node tools/rotating-team/cli.js --help
```

出力で読めるもの: `|V_i| |V_j|` ／ 2択の窓（本質的に2択になる θ 区間）／ `max g・min g・max|g|` とその θ。

## Node から直接

```js
const RT = require('./tools/rotating-team/model.js');
RT.gval(90, { ...RT.DEFAULTS });   // → { g, two, a, b, c, d }
RT.summary({ ...RT.DEFAULTS });    // → { Ri, Rj, bands, max, min, maxAbs, pts }
```

## 使うべき場面 / 使わない場面

- **使う**: 原稿（例 `theory/manuscript/.../*.md`）の数式・表・グラフ読み取りの数字を検算する、特定 θ や別パラメータでの `g` を出す、数値図用データを吐く。
- **計算を足すときは `model.js` だけ直す**（CLI・HTML が自動で追従する）。
- **使わない**: 記事の文章・構成・文体そのものを書く作業 → `pyran-article-writing` スキル。このツールが対象外の別モデルの数値計算。
