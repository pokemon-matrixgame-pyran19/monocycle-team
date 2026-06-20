# 実質一択まで込みの構築同士のゲームの値

[00 の2択公式](../00-single_compatibility_model/two_choice_game.md)を、構築利得行列 $\begin{pmatrix}a&c\\b&d\end{pmatrix}$（[team_vector.md](../00-single_compatibility_model/team_vector.md)）に代入し、行列の位置を対応させ直すと、構築同士のゲームの値は

$$
g=\begin{cases}
\dfrac{1}{V_i\times V_j} & (a-b)(c-d)<0\ \text{かつ}\ (a-c)(b-d)<0 \\[2mm]
a=v_1\times v_3 & b< a< c \\
b=v_2\times v_3 & a< b< d \\
c=v_1\times v_4 & d< c< a \\
d=v_2\times v_4 & c< d< b
\end{cases}
$$

**鞍点（ミニマックス点）による覚え方**：$g$ は「自分の行で最小かつ相手の列で最大」になっている成分。そのような成分がなければ混合戦略の値 $\dfrac{1}{V_i\times V_j}$ を取る。実質一択のときの $g$ は、実際に出される2匹の単体相性 $v_a\times v_b$ そのもの。

## 場合分けを外積で書く

切り替えを決めているのは次の4つの差の符号。等パワーでは

$$
a-b=(v_1-v_2)\times v_3,\quad c-d=(v_1-v_2)\times v_4,\quad
a-c=v_1\times(v_3-v_4),\quad b-d=v_2\times(v_3-v_4).
$$

$v_1-v_2=(v_1\times v_2)V_i$、$v_3-v_4=(v_3\times v_4)V_j$ を使い、$v_1\times v_2>0,\ v_3\times v_4>0$ にとると

$$
\mathrm{sgn}(a-b)=\mathrm{sgn}(V_i\times v_3),\quad
\mathrm{sgn}(c-d)=\mathrm{sgn}(V_i\times v_4),\quad
\mathrm{sgn}(a-c)=\mathrm{sgn}(v_1\times V_j),\quad
\mathrm{sgn}(b-d)=\mathrm{sgn}(v_2\times V_j).
$$

よって本質的に2択になる条件は

$$
\underbrace{(a-b)(c-d)<0}_{v_3,v_4\ \text{が}\ V_i\ \text{の左右両側}}\qquad \text{かつ} \qquad
\underbrace{(a-c)(b-d)<0}_{v_1,v_2\ \text{が}\ V_j\ \text{の左右両側}}
$$

すなわち**相手の2匹が自分の $V_i$ をまたいで開いており、かつ自分の2匹が相手の $V_j$ をまたいでいるとき**だけ読み合いの2択になる。どちらかが片側に寄った瞬間に「片方に優越ポケモンがいる」＝実質一択へ切り替わる。

## 重要な但し書き

「構築は $V$ 1本で決まる」のは**2択領域の中だけ**。**実質一択に切り替わる境目は $V_i,V_j$ だけでは決まらず、$v_1,\dots,v_4$ 個別の位置にもよる**（上の条件は単体ベクトルを含む）。同じ $V$ を持つ構築でも、相手によっては2択で $1/(V_i\times V_j)$、別の相手では一択で別の値になりうる。
