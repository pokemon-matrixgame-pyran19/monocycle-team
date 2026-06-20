# 二体構築 → 構築ベクトル V

自分の構築を $\{1,2\}$、相手を $\{3,4\}$ とし、各自1匹を出して戦うゲームを考える。利得行列は（行＝自分の選択、列＝相手の選択）

$$
A=\begin{pmatrix} a & c \\ b & d \end{pmatrix},\qquad
\begin{aligned}
a&=A_{13}=v_1\times v_3, & c&=A_{14}=v_1\times v_4,\\
b&=A_{23}=v_2\times v_3, & d&=A_{24}=v_2\times v_4.
\end{aligned}
$$

（等パワーなので $p$ は消えている。）

## 構築ベクトル

構築を表すベクトルを

$$
V_i=\frac{v_1-v_2}{v_1\times v_2},\qquad V_j=\frac{v_3-v_4}{v_3\times v_4}
$$

で定義すると、**本質的に2択の領域**では

$$
B_{ij}=\frac{1}{V_i\times V_j}.
$$

構築同士の相性が、単体相性ベクトル $v$ から作る1本のベクトル $V$ だけで書ける。

## 行列の置き方の注意（b ↔ c）

[two_choice_game.md](two_choice_game.md) の行列は $\begin{pmatrix}a&b\\c&d\end{pmatrix}$、本ページの構築行列は $\begin{pmatrix}a&c\\b&d\end{pmatrix}$ で、**$b$ と $c$ の位置が入れ替わっている**。2択の値 $\frac{ad-bc}{a+d-b-c}$ と2択条件は $b\leftrightarrow c$ で不変なのでそのまま使えるが、実質一択の4分岐は行列の「位置」で対応させ直す必要がある（→ [01-rotating_team/game_value.md](../01-rotating_team/game_value.md)）。

出典：二体構築から一体選ぶゲームの相性関係 <https://mathlog.info/articles/JKJaLYZonc2XSVrdaNXL>
