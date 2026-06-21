#!/usr/bin/env node
'use strict';
// 回転チーム g(θ) を CLI から操作・読み取りするためのツール。描画 HTML と同じ model.js を使う。
const RT = require('./model.js');

const HELP = `回転チーム g(θ) CLI  —  描画 HTML と同じ計算（model.js）を共有

使い方:
  node cli.js [--g1 60 --g2 120 --d3 40 --d4 140 --r1 1 --r2 1 --r3 1 --r4 1] [オプション]

オプション:
  --theta a,b,c   指定 θ（度）での g と領域を表示（カンマ区切り可、--at でも可）
  --table [step]  θ,g,領域 を CSV で一覧出力
  --step s        サンプル刻み（既定 0.5）
  --help          このヘルプ

省略時は記事のサンプル配置（γ=60,120 / δ=40,140 / 長さ1）。
出力: |V_i| |V_j| / 2択の窓 / max g・min g・max|g| とその θ。`;

function parseArgs(argv) {
  const p = Object.assign({}, RT.DEFAULTS);
  const opt = { step: 0.5, theta: null, table: false, help: false };
  for (let i = 2; i < argv.length; i++) {
    const m = argv[i].match(/^--([a-z0-9]+)(?:=(.*))?$/i);
    if (!m) continue;
    const key = m[1];
    let val = m[2];
    if (val === undefined && i + 1 < argv.length && !/^--/.test(argv[i + 1])) val = argv[++i];
    if (key in p) p[key] = parseFloat(val);
    else if (key === 'step') opt.step = parseFloat(val);
    else if (key === 'theta' || key === 'at') opt.theta = val;
    else if (key === 'table' || key === 'csv') { opt.table = true; if (val !== undefined) opt.step = parseFloat(val); }
    else if (key === 'help' || key === 'h') opt.help = true;
  }
  return { p, opt };
}

const { p, opt } = parseArgs(process.argv);
if (opt.help) { console.log(HELP); process.exit(0); }

const f = n => n.toFixed(3);
const s = RT.summary(p, opt.step);

console.log(`params: γ1=${p.g1} γ2=${p.g2} δ3=${p.d3} δ4=${p.d4}  r=(${p.r1},${p.r2},${p.r3},${p.r4})`);
console.log(`|V_i|=${f(s.Ri)}  |V_j|=${f(s.Rj)}`);
console.log(`2択の窓: ${s.bands.length
  ? s.bands.map(b => `(${b[0].toFixed(1)}°, ${b[1].toFixed(1)}°)`).join(' と ')
  : 'なし（全域で実質一択）'}`);
console.log(`max g  = ${f(s.max.g)} @ ${s.max.th.toFixed(1)}°`);
console.log(`min g  = ${f(s.min.g)} @ ${s.min.th.toFixed(1)}°`);
console.log(`max|g| = ${f(Math.abs(s.maxAbs.g))} @ ${s.maxAbs.th.toFixed(1)}°`);

if (opt.theta) {
  console.log('---');
  for (const t of opt.theta.split(',')) {
    const th = parseFloat(t);
    const r = RT.gval(th, p);
    console.log(`θ=${th}°  g=${f(r.g)}  (${r.two ? '本質的に2択' : '実質一択'})`);
  }
}

if (opt.table) {
  console.log('theta,g,regime');
  for (const pt of s.pts) console.log(`${pt.th.toFixed(1)},${pt.g.toFixed(6)},${pt.two ? 'two' : 'one'}`);
}
