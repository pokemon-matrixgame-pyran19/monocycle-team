# 場合分けごとのグラフ形状（$S,\eta,\alpha$ での読み）

[rotation_average.md](rotation_average.md) で $g(\theta)$ を **P1（離）・P2（重）・P3（包）** に場合分けして書き下した。ただしそこでの値（$a=v_1\times v_3=|v_1||v_3|\sin(\theta+\delta_3-\gamma_1)$、2択 $=1/(R_iR_j\sin\theta)$）は $|v_1|,|v_2|,\gamma,\delta$ のままで、回転平均で主役だった $S,\eta$ で「値がどう動くか」が読み取れない。

そこでこの章ではまず**各領域の値を $S,\eta$ と第3のノブで書き直し**、その式から3パターンのグラフ形状と「配置をいじると形がどう変わるか」を読み取る。

## グラフを動かす3つのノブ＝チームの $(S,\eta,\alpha)$

各チームは正味3自由度（[rotation_average.md](rotation_average.md)）。回転平均と同じ要領で、生の $v_1,v_2$ ではなく**長さの2数とその差**でとると、ちょうど次の3つのスカラーに分かれる。

$$
\boxed{\
S=|v_a|+|v_b|\ (\text{和}),\quad
\eta=\frac{|v_a-v_b|}{S}\ (\text{広がり}),\quad
\alpha=\frac{|v_a|-|v_b|}{S}\ (\text{長さの非対称})\
}
$$

$\eta$ は**ベクトル差**、$\alpha$ は**長さ差**を同じ $S$ で割った量で、$\big||v_a|-|v_b|\big|\le|v_a-v_b|$（逆三角不等式）から

$$
|\alpha|\le\eta\qquad(\text{等号は }v_a\parallel v_b)
$$

を満たす。$\alpha=0$ が等長 $|v_1|=|v_2|$、すなわち [graph.md](graph.md) の対称配置（区間の中心 $\mu=\tfrac\pi2$）。$\alpha$ は前章で「傾き」と呼んだ第3ノブ（$\mu$ のズレ＝長さの非対称）を、$\eta$ と同じ「$S$ で割った差」の形にしたもの。長さは

$$
|v_1|=\tfrac{S_i}{2}(1+\alpha_i),\quad |v_2|=\tfrac{S_i}{2}(1-\alpha_i),\qquad
|v_3|=\tfrac{S_j}{2}(1+\alpha_j),\quad |v_4|=\tfrac{S_j}{2}(1-\alpha_j)
$$

（同高さ縛りで長い方が偏角の小さい側、すなわち $v_1,v_3$ に付く）。区間 $I_\gamma=(\gamma_1,\gamma_2)$ の幅 $\Delta_\gamma$ と中心 $\mu_\gamma$ は $(\eta_i,\alpha_i)$ で決まり、

$$
\tan\frac{\Delta_\gamma}{2}=\sqrt{\frac{\eta_i^2-\alpha_i^2}{1-\eta_i^2}},\qquad
\cos\mu_\gamma=\frac{\alpha_i}{\eta_i}\sqrt{\frac{1-\eta_i^2}{1-\alpha_i^2}}
$$

（$\delta$ 側も $\eta_j,\alpha_j$ で同形。$\alpha=0$ で $\Delta=2\arcsin\eta$、$\mu=\tfrac\pi2$）。**幅は主に $\eta$、中心のズレは $\alpha$** が握る。

## 各領域の値を $S,\eta,\alpha$ で書く

上を $a,b,c,d$ と2択値に入れると、すべて**共通の縦スケール $\frac{S_iS_j}{4}$ がくくり出せて**、残りが $\eta,\alpha$ の無次元な形になる（`tools/rotating-team/` で機械精度の一致を確認済み）。

$$
\boxed{
\begin{aligned}
a&=\frac{S_iS_j}{4}\,(1+\alpha_i)(1+\alpha_j)\,\sin(\theta+\delta_3-\gamma_1),\\
b&=\frac{S_iS_j}{4}\,(1-\alpha_i)(1+\alpha_j)\,\sin(\theta+\delta_3-\gamma_2),\\
c&=\frac{S_iS_j}{4}\,(1+\alpha_i)(1-\alpha_j)\,\sin(\theta+\delta_4-\gamma_1),\\
d&=\frac{S_iS_j}{4}\,(1-\alpha_i)(1-\alpha_j)\,\sin(\theta+\delta_4-\gamma_2).
\end{aligned}}
$$

2択値は $1/R_i$ が1チームぶんで閉じて

$$
\frac{1}{R_i}=\frac{S_i}{2}\,\frac{\sqrt{(\eta_i^2-\alpha_i^2)(1-\eta_i^2)}}{\eta_i}
\quad\Longrightarrow\quad
\boxed{\ \text{2択}=\frac{1}{R_iR_j\sin\theta}
=\frac{S_iS_j}{4}\,\frac{1}{\sin\theta}\,
\frac{\sqrt{(\eta_i^2-\alpha_i^2)(1-\eta_i^2)}}{\eta_i}\,
\frac{\sqrt{(\eta_j^2-\alpha_j^2)(1-\eta_j^2)}}{\eta_j}\ }
$$

この5本から、3つのノブの役割が**式の上で**はっきり読める。

- **$\dfrac{S_iS_j}{4}$ は全領域に共通の縦スケール.** $a,b,c,d$ も2択も丸ごとこれに比例。$S$ は値の大きさだけを決め、$\eta,\alpha$（＝形・区切り）には一切入らない。$S$ を上げる＝グラフを縦に相似拡大。
- **一択の弧の高さ比は $\alpha$ だけ.** $a,c$（$|v_1|$ を使う枝）は $(1+\alpha_i)$、$b,d$（$|v_2|$ の枝）は $(1-\alpha_i)$。同様に $a,b$ が $(1+\alpha_j)$、$c,d$ が $(1-\alpha_j)$。$\alpha_i>0$（$v_1$ が長い）で $v_1$ 側の山が高く $v_2$ 側が低く、上下・左右の非対称が出る。**$\eta$ は一択の高さには入らない**（広げても一択の頭打ち高さは変わらない）。
- **2択の床（$\theta=\tfrac\pi2$ での値 $1/R_iR_j$）は $\eta,\alpha$ で決まる.** 各チームの因子 $\dfrac{\sqrt{(\eta^2-\alpha^2)(1-\eta^2)}}{\eta}$ は、$\eta\to1$（広げ切り）で $0$、$\eta\to|\alpha|$（窓が閉じる極限）でも $0$ になる山型。**広げるほど（$\eta\uparrow$）2択の谷は浅く**なり、**非対称にするほど（$|\alpha|\uparrow$）も浅く**なる。
- **位相（弧と窓の左右位置）は $\gamma,\delta$＝$(\eta,\alpha)$ 経由.** 幅 $\Delta$ は主に $\eta$、中心 $\mu$ のズレは $\alpha$（上式）。$S$ は位相に入らない。

つまり **$S$＝縦スケール、$\eta$＝窓の幅と2択の床、$\alpha$＝一択の高さ配分と左右の傾き**、と式の係数がそのまま対応する。

> 検算（同高さ縛りを満たす配置で `tools/rotating-team/`）：$(\gamma,\delta,r)$ から計算した $|V_i|,|v_a||v_b|,1/R_iR_j$ が、上の $S,\eta,\alpha$ 表式と機械精度で一致。例：$\gamma=(50,90),r_{1,2}=(1.305,1)$ で $\eta_i=0.364,\alpha_i=0.133$、$1/R_i=1.000$（式・直接計算とも）。

## 各パターンのグラフ形状

[graph.md](graph.md) の一般特徴（連続だが8本の遷移角で折れ目、2択域は $\sin\theta$ の逆数のU字、一択域は上の $\frac{S_iS_j}{4}(1\pm\alpha)(1\pm\alpha)$ で頭打ち、上半面 $\theta\in(0,\pi)$ が有利・下半面が不利で点対称）を踏まえて、3パターンの違いを述べる。どのパターンかは区間 $I_\gamma$ と $\tilde I_\delta=(\pi-\delta_4,\pi-\delta_3)$ の重なり方、すなわち**$\eta$（幅）と $\alpha$（中心）だけで決まり $S$ は効かない**。

### P1：離（窓なし・全域一択）

2区間が離れて重ならず、**読み合いの窓が一周どこにも開かない**。$g(\theta)$ は $a\to c\to d\to b$ の4本の正弦弧をつないだ**有界でなめらかな波**で、各弧の振幅は $\frac{S_iS_j}{4}(1\pm\alpha_i)(1\pm\alpha_j)$。$\sin\theta$ の逆数の尖りはどこにも出ず、$|g|$ は跳ねない。最も穏やかなグラフ。

- $\eta_i,\eta_j$ が**小さい**（幅が狭い）か、$|\alpha|$ が大きく**中心がズレて区間が左右に離れている**ときに起きる。$\eta$ を上げて幅を広げるか、$\alpha$ を $0$ に寄せて中心を揃えると、区間が触れてP2へ。

### P2：重（部分的に重なる・窓が両側に1つずつ）

2区間が**端で食い違って重なる**。重なりが窓で、上半面に1つ・$\pi$ 反対側に1つ。窓の中は $\dfrac{S_iS_j}{4}\dfrac{K}{\sin\theta}$（$K$ は上の $\eta,\alpha$ 因子の積）の**U字の谷**で、谷底で最小、両縁で一択弧 $c,d$ と滑らかにつながって持ち上がる。**「片側の山を登り切る手前で2択の谷へ落ち、また反対の山へ」**がP2の顔。重なりが端寄りなのでグラフは窓を境に**左右非対称**。窓幅は $\gamma_2+\delta_4-\pi$。

- 二つの幅（$\eta_i,\eta_j$）が**同程度で中心（$\alpha$）がややズレている**ときの典型。$\alpha$ を揃えるとP3、離すとP1へ。

### P3：包（片方が片方を含む・窓は狭い方の幅いっぱい）

細い区間が太い区間に**すっぽり入る**。窓は細い方の区間まるごと（幅は $\eta$ の小さいチームが握る）で、上半面の窓の**両側に**太い方の余り幅ぶんの一択弧（$c,b$）が張り出す。$\alpha_i=\alpha_j=0$ の**対称配置はつねにこのP3**（中心が一致すれば細い方は必ず内側）で、[graph.md](graph.md) の具体例もこれ。窓が $\theta=\tfrac\pi2$ に据わり、グラフが最も**左右対称**に近い。

- 二つの幅の**差が大きく中心が近い**ときに起きる。差が縮むとP2、$\alpha$ で中心が離れるとP2→P1。

> 数値確認（`tools/rotating-team/`、同高さ縛り）：$I_\gamma=(20^\circ,60^\circ),\tilde I_\delta=(70^\circ,110^\circ)$ で**P1＝窓なし**、$I_\gamma=(50^\circ,90^\circ)$ で重なり $(70^\circ,90^\circ)$ の**P2**、$I_\gamma=(60^\circ,120^\circ)$ で $\tilde I_\delta$ 全体を飲み込む**P3**。$\alpha$（中心 $\mu$）を動かすだけでP1→P2→P3 を行き来できる。

## $S,\eta,\alpha$ を大きくすると形はどう変わるか

「もとの $v_1,v_2$ をいじると」ではなく、上の5本の式の係数を読むだけで言える。

**$S$（長さの和）を大きく＝グラフの相似拡大、形は不変.**
全領域が $\frac{S_iS_j}{4}$ に比例するので、一択の山も2択の谷も**そろって $S_iS_j$ 倍に拡大**（両チーム2倍で $g$ は4倍。数値でも $\max g:0.643\to2.571$、$\min g:-0.866\to-3.464$）。遷移角・窓・パターンは $\eta,\alpha$ だけの関数で**不変**――$S$ は純粋な振幅ノブ。$|g|>1$（頭打ちが $|v_a||v_b|$ まで上がる）もここ。片方の $S$ だけ伸ばすと縦スケール全体が上がる（が形は不変）。

**$\eta$（広がり効率）を大きく＝窓を開けて広げる、ただし谷は浅く.**
$\eta$ を上げると幅 $\Delta$（$\tan\tfrac\Delta2=\sqrt{\tfrac{\eta^2-\alpha^2}{1-\eta^2}}$）が広がり、**P1→P2→P3 の向きに窓が開いて広がる**。一方で2択の床の因子 $\sqrt{(\eta^2-\alpha^2)(1-\eta^2)}/\eta$ は $\eta\to1$ で $0$ へ＝**谷が浅く**（一択の高さ $(1\pm\alpha)$ には $\eta$ が入らないので、相対的に2択の取り分だけが痩せる）。**「広げるほど窓は広いが、そこで取れる有利は薄い」**（[graph.md](graph.md) の「直交が一番安定」、[rotation_average.md](rotation_average.md) の「$\phi\to\pi$ で2択値 $\to0$」と同じ）。符号つきの効きは平均の式 $\langle g\rangle=\frac{S_iS_j}{2\pi}(\eta_i-\eta_j)$ どおり――**$\eta_i>\eta_j$ なら一周ならして有利、勝ち幅は $S_iS_j$ で増幅**。

**$\alpha$（長さの非対称＝傾き）を大きく＝高さ配分が偏り、左右に傾く.**
$|\alpha_i|$ を上げると $v_1$ 側の弧 $(1+\alpha_i)$ が高く $v_2$ 側 $(1-\alpha_i)$ が低くなり、中心 $\mu$ もズレて**グラフが左右非対称に傾く**。同時に2択の床の因子に $\sqrt{\eta^2-\alpha^2}$ が効くので**谷はさらに浅く**、$|\alpha|\to\eta$ で幅 $\Delta\to0$＝**窓が閉じてP1へ**（寄せすぎは区間を細らせる）。そして決定的に、$\alpha$ は一択の弧どうしで高さを付け替える（$(1+\alpha)$ と $(1-\alpha)$ の和は $2$ で不変）だけなので、**一周積分＝回転平均には効かない**（[rotation_average.md](rotation_average.md) の「効かない1自由度」）。$\alpha$ は**見た目の偏り**を作るが**平均の強さ**は作らない。

まとめると、グラフは **$S$ で縦に相似拡大、$\eta$ で窓が開いて谷が浅くなり、$\alpha$ で一択の高さが偏って左右に傾く**。平均的な強さに効くのは $S$ と $\eta$（符号は $\eta_i-\eta_j$、増幅 $S_iS_j$）だけで、$\alpha$ は形の偏りには効くが平均には効かない。
