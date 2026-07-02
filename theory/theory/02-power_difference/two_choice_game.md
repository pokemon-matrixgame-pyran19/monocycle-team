# 2×2ゲームの値のパワー差込み一般化

[00/two_choice_game.md](../00-single_compatibility_model/two_choice_game.md) の2択公式と [01/game_value.md](../01-rotating_team/game_value.md) の実質一択込みの場合分けは、任意の実数成分の 2×2 ゼロ和ゲームに対する命題なので、パワー差があってもそのまま適用できる。02 で新しいのは、成分を「パワー＋外積」に分解したときに、**どのパワー差が値と戦略構造のどこへ効くか**という構造である。

## 記法

構築行列は [00/team_vector.md](../00-single_compatibility_model/team_vector.md) と同じ置き方（行＝自分 $\{1,2\}$、列＝相手 $\{3,4\}$）にとる：

$$
A=\begin{pmatrix} a & c \\ b & d \end{pmatrix},\qquad
a=A_{13},\ b=A_{23},\ c=A_{14},\ d=A_{24},\qquad
A_{kl}=p_k-p_l+v_k\times v_l.
$$

[00/two_choice_game.md](../00-single_compatibility_model/two_choice_game.md) の一般式とは $b,c$ の位置が入れ替わっているが、2択の値 $\frac{ad-bc}{a+d-b-c}$ と2択条件は $b\leftrightarrow c$ で不変なのでそのまま使え、実質一択の分岐は位置を対応させ直した [01/game_value.md](../01-rotating_team/game_value.md) の表を使う（[team_vector.md](../00-single_compatibility_model/team_vector.md) の注意書きのとおり）。

パワーはチーム平均 $\bar p_i=\frac{p_1+p_2}{2},\ \bar p_j=\frac{p_3+p_4}{2}$ を使って**平均と差**に分解する：

$$
P=\bar p_i-\bar p_j\ \text{（チーム間の平均パワー差）},\qquad
\Delta p_i=p_1-p_2,\quad \Delta p_j=p_3-p_4\ \text{（チーム内パワー差）}.
$$

あわせて相性ベクトルのチーム平均 $\bar v_i=\frac{v_1+v_2}{2},\ \bar v_j=\frac{v_3+v_4}{2}$ と、符号付きの

$$
W=(v_1-v_2)\times(v_3-v_4),\qquad
m_i=\bar v_j\times(v_1-v_2),\qquad
m_j=\bar v_i\times(v_3-v_4)
$$

を使う（意味は後述：$W$ は窓幅＝混合の分母、$m$ は窓の中心）。成分は

$$
a=P+\tfrac{\Delta p_i-\Delta p_j}{2}+v_1\times v_3,\qquad
c=P+\tfrac{\Delta p_i+\Delta p_j}{2}+v_1\times v_4,
$$

$$
b=P-\tfrac{\Delta p_i+\Delta p_j}{2}+v_2\times v_3,\qquad
d=P-\tfrac{\Delta p_i-\Delta p_j}{2}+v_2\times v_4.
$$

## 主結果

$$
g=\begin{cases}
P+\dfrac{(v_1\times v_2)(v_3\times v_4)-m_im_j+(\Delta p_i-m_i)(\Delta p_j-m_j)}{W}
 & |\Delta p_i-m_i|<\tfrac{|W|}{2}\ \text{かつ}\ |\Delta p_j-m_j|<\tfrac{|W|}{2} \\[3mm]
\max(a,b) & \Delta p_j-m_j>\tfrac{|W|}{2}\ \text{（相手が 3 に固定）} \\
\max(c,d) & \Delta p_j-m_j<-\tfrac{|W|}{2}\ \text{（相手が 4 に固定）} \\
\min(a,c) & \Delta p_i-m_i>\tfrac{|W|}{2}\ \text{（自分が 1 に固定）} \\
\min(b,d) & \Delta p_i-m_i<-\tfrac{|W|}{2}\ \text{（自分が 2 に固定）}
\end{cases}
$$

1行目が本質的に2択（混合戦略）、残りが実質一択。一択の行が複数該当するとき（両方の窓の外）は値は一致し、鞍点の成分になる。境界（等号）は弱優越で、隣り合う表式が一致する（移行は連続）。以下、各部品を導出する。

## P は値に直行する（分離補題）

$P$ は全成分に一様に足されている。ゼロ和ゲームの全成分に定数を足しても最適戦略は変わらず、値だけ定数分ずれるから

$$
g(P,\Delta p_i,\Delta p_j)=P+g(0,\Delta p_i,\Delta p_j).
$$

**2択か一択かの構造・混合比は $P$ に依存しない**。チーム間の平均パワー差は勝ち幅を底上げするだけで、戦略構造に効くパワーはチーム内の差 $\Delta p_i,\Delta p_j$ の2つだけである。

## 分母（混合の感度）はパワーによらない

$$
a+d-b-c=(v_1-v_2)\times(v_3-v_4)=W.
$$

パワー項は $a+d$ と $b+c$ で同じ和 $p_1+p_2-p_3-p_4$ を与えて厳密に相殺し、混合戦略の分母は等パワーのときと同一の純幾何量になる（等パワーの言葉では $W=(v_1\times v_2)(v_3\times v_4)\,V_i\times V_j$）。この分母のパワー相殺自体は先行研究（[refs/20250910.md](../../refs/20250910.md)）でも、2択公式を構築の利得に適用する計算の途中で観察されている。

## 本質的2択の条件 — チーム内パワー差の「窓」

場合分けを決める4つの差は、[01/game_value.md](../01-rotating_team/game_value.md) の等パワー版のパワー差込み一般化になる：

$$
a-b=\Delta p_i+(v_1-v_2)\times v_3,\qquad
c-d=\Delta p_i+(v_1-v_2)\times v_4,
$$

$$
a-c=-\Delta p_j+v_1\times(v_3-v_4),\qquad
b-d=-\Delta p_j+v_2\times(v_3-v_4).
$$

本質的2択の条件 $(a-b)(c-d)<0$ かつ $(a-c)(b-d)<0$ は、それぞれ $\Delta p_i,\Delta p_j$ が開区間に入る条件になる：

- $\Delta p_i$ の**窓**：端点 $v_3\times(v_1-v_2)$ と $v_4\times(v_1-v_2)$、中心 $m_i=\bar v_j\times(v_1-v_2)$
- $\Delta p_j$ の**窓**：端点 $v_1\times(v_3-v_4)$ と $v_2\times(v_3-v_4)$、中心 $m_j=\bar v_i\times(v_3-v_4)$
- 幅は**どちらも共通で $|W|$**（端点の差がそれぞれ $\pm W$ になる）

まとめると主結果1行目の条件 $|\Delta p_i-m_i|<\frac{|W|}{2}$ かつ $|\Delta p_j-m_j|<\frac{|W|}{2}$ を得る。2択が保たれるのは $(\Delta p_i,\Delta p_j)$ 平面で1つの正方形（窓×窓）の内側であり、$P$ はどこにも現れない。$W=0$（差ベクトルが平行）では窓の幅が 0 になって2択領域自体が消えるので、混合値の分母 0 は起こらない。

等パワー（$\Delta p=0$）では条件は「$0$ が各窓に入るか」となり、端点が異符号という形で [01/game_value.md](../01-rotating_team/game_value.md) の外積符号条件（相手の2匹が $V_i$ をまたぎ、自分の2匹が $V_j$ をまたぐ）に一致する。

この窓が「どれだけパワー差があれば相性を無視できるか」（問い3）の骨格になる。閾値としての読み方は single_choice_threshold.md（未着手）で扱う。

## 2択領域の値の導出

分離補題より $P=0$ でよい。$u=\frac{\Delta p_i-\Delta p_j}{2},\ w=\frac{\Delta p_i+\Delta p_j}{2}$ とおくと $a=v_1\times v_3+u,\ d=v_2\times v_4-u,\ b=v_2\times v_3-w,\ c=v_1\times v_4+w$ なので

$$
ad-bc=(w^2-u^2)
+u\big[(v_2\times v_4)-(v_1\times v_3)\big]
-w\big[(v_2\times v_3)-(v_1\times v_4)\big]
+\big[(v_1\times v_3)(v_2\times v_4)-(v_1\times v_4)(v_2\times v_3)\big].
$$

第1項は $w^2-u^2=\Delta p_i\Delta p_j$。第2・3項を $\Delta p$ に戻して整理すると

$$
\tfrac{\Delta p_i}{2}\big[(v_1+v_2)\times(v_4-v_3)\big]
+\tfrac{\Delta p_j}{2}\big[(v_1-v_2)\times(v_3+v_4)\big]
=-\Delta p_i\,m_j-\Delta p_j\,m_i.
$$

最後の角括弧は外積の恒等式 $(v_1\times v_3)(v_2\times v_4)-(v_1\times v_4)(v_2\times v_3)=(v_1\times v_2)(v_3\times v_4)$（成分計算で確認できる。[00/team_vector.md](../00-single_compatibility_model/team_vector.md) の $B_{ij}=1/(V_i\times V_j)$ を出すのと同じもの。先行研究では3ベクトルの巡回恒等式＝プリュッカー関係式を経由して導いている）。まとめて

$$
ad-bc=(v_1\times v_2)(v_3\times v_4)+\Delta p_i\Delta p_j-\Delta p_i m_j-\Delta p_j m_i
=(v_1\times v_2)(v_3\times v_4)-m_im_j+(\Delta p_i-m_i)(\Delta p_j-m_j)
$$

を $W$ で割って主結果1行目を得る。値は窓の内側で $(\Delta p_i,\Delta p_j)$ の双一次で、パワー差の効き方は**窓の中心からのずれの積**に集約される。

先行研究（[refs/20250910.md](../../refs/20250910.md)）はこの分子を**パワー2次の項（$\Delta p_i\Delta p_j$ に当たる項）を落とす近似**で扱い、残る1次の寄与を構築レベルの補正ベクトル（記事中の $U$）として整理している。上の表式は2次まで込みの厳密形であり、1次で切れば先行研究の近似に戻る。$U$ との対応は correction_vector.md（未着手）で扱う。

**パワー差の効きは最大 1/2**：窓の内側では $\left|\dfrac{\partial g}{\partial \Delta p_i}\right|=\dfrac{|\Delta p_j-m_j|}{|W|}<\dfrac{1}{2}$（$\Delta p_j$ も同様）。チーム内パワー差 1 点で動く値は高々 $\frac12$ 点であり、係数 1 で素通しされる $P$ と対照的。パワーと相性の交換レート（発展の問い）の出発点になる。

## 混合比

2択領域で自分が $1$ を出す確率 $q$、相手が $3$ を出す確率 $r$ は、無差別条件（$qa+(1-q)b=qc+(1-q)d$ など）から

$$
q=\frac{\Delta p_j-v_2\times(v_3-v_4)}{W},\qquad
r=\frac{v_4\times(v_1-v_2)-\Delta p_i}{W}.
$$

- **自分の混合比は相手のチーム内パワー差だけで動く**：$q$ は $\Delta p_j$ のみに、$r$ は $\Delta p_i$ のみに依存し、$P$ はどちらにも効かない。自分のパワー配分をいじっても（2択が保たれる限り）自分の出し方は変わらず、変わるのは相手の出し方。
- $q$ は $\Delta p_j$ の1次関数で、窓の一端でちょうど $0$、他端でちょうど $1$ に達する（$r$ と $\Delta p_i$ も同様）。**窓の端＝混合比の飽和点**であり、2択 → 実質一択の移行は連続。

## 実質一択（窓の外）

窓をどちら側に破ったかで固定される単体が決まる。$\Delta p_j$ が窓の上端を超えると（相手の $3$ が十分強い）$a-c<0,\ b-d<0$ で相手は $3$ に固定し、自分の最適応答で $g=\max(a,b)$。以下同様に主結果の表のとおり。これは [01/game_value.md](../01-rotating_team/game_value.md) の鞍点表（「自分の行で最小かつ相手の列で最大」の成分が値）をパワー差込みの成分に適用したものと同値で、一択の $g$ は**実際に出る2匹のパワー差込み単体相性 $p_a-p_b+v_a\times v_b$ そのもの**になる。

## 等パワー極限（00・01 の再現）

$P=\Delta p_i=\Delta p_j=0$ とすると：

- 2択条件は「$0$ が各窓に入る」＝端点の異符号条件となり、[01/game_value.md](../01-rotating_team/game_value.md) の等パワーの2択条件に一致する。
- 2択の値は $(\Delta p-m)$ 項が $m_im_j$ を打ち消して
  $$g\ \to\ \frac{(v_1\times v_2)(v_3\times v_4)}{(v_1-v_2)\times(v_3-v_4)}=\frac{1}{V_i\times V_j}$$
  となり、[00/team_vector.md](../00-single_compatibility_model/team_vector.md) の $B_{ij}$ を再現する。
- 実質一択の場合分けは、もともと一般の 2×2 に対する [00/two_choice_game.md](../00-single_compatibility_model/two_choice_game.md)・[01/game_value.md](../01-rotating_team/game_value.md) の表そのもの。

## 数値検算

相性ベクトルを $v_1=(2,-1),\ v_2=(1,1),\ v_3=(1,2),\ v_4=(-1,1)$ にとる（$v_1\times v_2=3>0,\ v_3\times v_4=3>0$ の規約どおり）。外積は $v_1\times v_3=5,\ v_2\times v_3=1,\ v_1\times v_4=1,\ v_2\times v_4=2$。

幾何量：$W=(1,-2)\times(2,1)=5$、$\bar v_i=(1.5,0),\ \bar v_j=(0,1.5)$、$m_i=(0,1.5)\times(1,-2)=-1.5$、$m_j=(1.5,0)\times(2,1)=1.5$。窓は $\Delta p_i\in(-4,1)$、$\Delta p_j\in(-1,4)$（幅はどちらも $5=|W|$）。

**2択の例**：パワー $(p_1,p_2,p_3,p_4)=(1,\ 2,\ 1.5,\ -0.5)$、すなわち $P=1,\ \Delta p_i=-1,\ \Delta p_j=2$（両方とも窓の内側）。行列は

$$
\begin{pmatrix} a & c \\ b & d \end{pmatrix}
=\begin{pmatrix} 4.5 & 2.5 \\ 1.5 & 4.5 \end{pmatrix},
$$

直接計算で $(a-b)(c-d)=3\cdot(-2)<0$、$(a-c)(b-d)=2\cdot(-3)<0$（2択）、$g=\frac{ad-bc}{W}=\frac{20.25-3.75}{5}=3.3$。閉形式でも

$$
g=1+\frac{3\cdot3-(-1.5)(1.5)+(-1+1.5)(2-1.5)}{5}=1+\frac{9+2.25+0.25}{5}=3.3
$$

で一致。混合比は $q=\frac{2-(-1)}{5}=0.6$、$r=\frac{1-(-1)}{5}=0.4$（直接計算の $\frac{d-b}{W}=\frac{3}{5},\ \frac{d-c}{W}=\frac{2}{5}$ と一致）。

**一択の例**：同じ相性で $\Delta p_j=5>4$（相手の $3$ が窓を超えて強い。$p=(1,\ 2,\ 3,\ -2)$、$P=1$ のまま）。行列は $\begin{pmatrix}3&4\\0&6\end{pmatrix}$ で、相手は $3$ に固定し $g=\max(a,b)=3=a=p_1-p_3+v_1\times v_3$。鞍点表の $b<a<c$（$0<3<4$）とも一致。

**等パワー極限**：同じ相性で $p$ を揃えると行列は $\begin{pmatrix}5&1\\1&2\end{pmatrix}$、$g_0=\frac{10-1}{5}=\frac{9}{5}=1.8$。これは $V_i=\frac{(1,-2)}{3},\ V_j=\frac{(2,1)}{3}$、$V_i\times V_j=\frac{5}{9}$ の $1/(V_i\times V_j)$ と一致。さらにこの配置は相手＝自分と同配置を $90^\circ$ 回したものなので、既存ツールで独立に検算できる：

```bash
node tools/rotating-team/cli.js --g1 -26.565051177 --g2 45 --d3 -26.565051177 --d4 45 \
  --r1 2.2360679775 --r2 1.4142135624 --r3 2.2360679775 --r4 1.4142135624 --theta 90
# → θ=90°  g=1.800  (本質的に2択)
```
