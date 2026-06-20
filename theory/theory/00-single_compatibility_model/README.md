# 00 - 単相性モデル（基礎）

対戦ゲームの相性を2次元ベクトルの外積でモデル化する基礎（単相性モデル）と、その上に乗る2つの道具立て――2択ゲームの値（実質一択込み）と、2匹構築を1本のベクトル $V$ に潰す手続き――をまとめた基礎トピック。後続トピック（[01-rotating_team](../01-rotating_team/)）の前提。

## 中身

- [model.md](model.md) — 単相性モデル。$A_{ij}=p_i-p_j+v_i\times v_j$、等パワーへの絞り込み。
- [two_choice_game.md](two_choice_game.md) — 2×2ゲームの値。実質一択（鞍点）まで込みの場合分け。
- [team_vector.md](team_vector.md) — 二体構築 → 構築ベクトル $V$。本質的2択で $B_{ij}=1/(V_i\times V_j)$。

## 先行研究

- 二体構築から一体選ぶゲームの相性関係：<https://mathlog.info/articles/JKJaLYZonc2XSVrdaNXL>
- 二択ゲームのナッシュ均衡：<https://note.com/pyran19/n/n9e2dc2e577d2>
