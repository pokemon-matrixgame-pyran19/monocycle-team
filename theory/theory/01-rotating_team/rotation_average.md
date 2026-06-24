# 全配置パターンの $g(\theta)$ と回転平均

[rotation.md](rotation.md) で $g$ を $\theta$ の関数として場合分けした。ここでは **$\gamma_1,\gamma_2,\delta_3,\delta_4$ のあらゆる大小関係**について $g(\theta)$ を一周ぶん明示し、さらに $\theta$ を $0\to2\pi$ で積分した**回転平均**を閉じた式で与える。

記号は [rotation.md](rotation.md) に合わせる。単体値と2択値は

$$
\begin{aligned}
a&=|v_1||v_3|\sin(\theta+\delta_3-\gamma_1), & c&=|v_1||v_4|\sin(\theta+\delta_4-\gamma_1),\\
b&=|v_2||v_3|\sin(\theta+\delta_3-\gamma_2), & d&=|v_2||v_4|\sin(\theta+\delta_4-\gamma_2),
\end{aligned}
\qquad
\text{2択}=\frac{1}{R_iR_j\sin\theta}.
$$

配置の縛り（[rotation.md](rotation.md)）：$v_1,v_2$ は高さ $1/R_i$ の上半面に偏角 $\gamma_1<\gamma_2\in(0,\pi)$、$v_3,v_4$ は高さ $1/R_j$ で $\theta=0$ 基準の偏角 $\delta_3<\delta_4\in(0,\pi)$。長さは同高さ制約 $|v_1|\sin\gamma_1=|v_2|\sin\gamma_2=1/R_i$、$|v_3|\sin\delta_3=|v_4|\sin\delta_4=1/R_j$ を満たす。

## 構造を決めるのは2区間の相対位置

遷移線は $\theta\equiv\gamma_1,\gamma_2,\pi-\delta_3,\pi-\delta_4\ (\bmod\pi)$ の4本だけ（[rotation.md](rotation.md)）。$\gamma_1,\gamma_2,\pi-\delta_4,\pi-\delta_3$ はすべて $(0,\pi)$ に入り、後半 $(\pi,2\pi)$ には同じ点の $+\pi$ コピーが並ぶ。したがって **$g(\theta)$ のグラフの形（どの弧がどの分岐か）は、$(0,\pi)$ 上の2つの区間**

$$
I_\gamma=(\gamma_1,\ \gamma_2),\qquad
\tilde I_\delta=(\pi-\delta_4,\ \pi-\delta_3)
$$

**の相対位置だけで決まる**（長さ $|v_i|$ は弧の区切りには効かず、値の高さ $L=|v_a||v_b|$ にだけ効く）。$\tilde I_\delta$ は $v_3,v_4$ を $y$ 軸反転した $\tilde v_3,\tilde v_4$ の偏角区間で、**正規化された対称配置 $\delta_3+\delta_4=\pi$ のときちょうど $\tilde I_\delta=(\delta_3,\delta_4)$**（$\pi-\delta_4=\delta_3,\ \pi-\delta_3=\delta_4$）。この場合に限り「$\gamma$ と $\delta$ の大小」がそのまま構造を決め、一般には $\delta\to\pi-\delta$ を通して読む。

$\gamma_1<\gamma_2$、$\delta_3<\delta_4$ は固定なので、2区間の並びは次の **3パターン＋敵味方入れ替え（$\gamma\leftrightarrow\delta$）の3つ＝6通り**で尽きる。

| | 区間の関係 | 角度条件 | 対称配置での読み |
|---|---|---|---|
| **P1 離** | $I_\gamma$ が左に分離 | $\gamma_2<\pi-\delta_4$ | $\gamma_1<\gamma_2<\delta_3<\delta_4$ |
| **P2 重** | 左で重なる | $\gamma_1<\pi-\delta_4<\gamma_2<\pi-\delta_3$ | $\gamma_1<\delta_3<\gamma_2<\delta_4$ |
| **P3 包** | $\tilde I_\delta\subset I_\gamma$ | $\gamma_1<\pi-\delta_4<\pi-\delta_3<\gamma_2$ | $\gamma_1<\delta_3<\delta_4<\gamma_2$ |

残り3つ（$I_\gamma$ が右／右重なり／$I_\gamma\subset\tilde I_\delta$）は**敵味方の入れ替え**で得られる。自分と相手を交換すると役割が入れ替わって $V_i\leftrightarrow V_j$、角度パラメータは $\gamma\leftrightarrow\delta$、相対角は $\theta\to-\theta$（交換後の基準系では相手だった側が逆向きに見える）、$g$ は自分視点の有利量なので符号反転する。よって

$$
\boxed{\ g_{\text{swap}}(\theta)=-\,g(-\theta)\quad(\gamma\leftrightarrow\delta\ \text{で入れ替え})\ }
$$

で P1〜P3 から移れる。以下は P1〜P3 を書けば全パターンを尽くす。窓（本質的に2択の区間）は $I_\gamma\cap\tilde I_\delta$ で、**幅 $\min(\gamma_2,\pi-\delta_3)-\max(\gamma_1,\pi-\delta_4)$**（P1 では非正＝窓なし）。

## 各パターンの $g(\theta)$

下表は一周 $\theta\in[0,2\pi)$ を遷移角で区切ったもの（$-\delta_3\equiv2\pi-\delta_3$）。隣り合う弧の境目ですべて連続（境界値が一致することは確認済み）。

### P1：離（$\gamma_2<\pi-\delta_4$、窓なし＝全域一択）

| $\theta$ の範囲 | $g$ |
|---|---|
| $(-\delta_3,\ \gamma_1)$ | $a$ |
| $(\gamma_1,\ \pi-\delta_4)$ | $c$ |
| $(\pi-\delta_4,\ \pi+\gamma_2)$ | $d$ |
| $(\pi+\gamma_2,\ 2\pi-\delta_3)$ | $b$ |

2区間が離れていて読み合いの窓が開かず、一周まるごと実質一択。

### P2：重（$\gamma_1<\pi-\delta_4<\gamma_2<\pi-\delta_3$）

| $\theta$ の範囲 | $g$ |
|---|---|
| $(-\delta_3,\ \gamma_1)$ | $a$ |
| $(\gamma_1,\ \pi-\delta_4)$ | $c$ |
| $(\pi-\delta_4,\ \gamma_2)$ | **2択** $\dfrac{1}{R_iR_j\sin\theta}$ |
| $(\gamma_2,\ 2\pi-\delta_4)$ | $d$ |
| $(2\pi-\delta_4,\ \pi+\gamma_2)$ | **2択** |
| $(\pi+\gamma_2,\ 2\pi-\delta_3)$ | $b$ |

窓は $(\pi-\delta_4,\ \gamma_2)$ と、その $\pi$ 反対側 $(2\pi-\delta_4,\ \pi+\gamma_2)$。幅はともに $\gamma_2-(\pi-\delta_4)=\gamma_2+\delta_4-\pi$。

### P3：包（$\gamma_1<\pi-\delta_4<\pi-\delta_3<\gamma_2$）

| $\theta$ の範囲 | $g$ |
|---|---|
| $(-\delta_3,\ \gamma_1)$ | $a$ |
| $(\gamma_1,\ \pi-\delta_4)$ | $c$ |
| $(\pi-\delta_4,\ \pi-\delta_3)$ | **2択** $\dfrac{1}{R_iR_j\sin\theta}$ |
| $(\pi-\delta_3,\ \gamma_2)$ | $b$ |
| $(\gamma_2,\ 2\pi-\delta_4)$ | $d$ |
| $(2\pi-\delta_4,\ 2\pi-\delta_3)$ | **2択** |

窓は $\tilde I_\delta=(\pi-\delta_4,\ \pi-\delta_3)$ 全体と、その反対側 $(2\pi-\delta_4,\ 2\pi-\delta_3)$。幅はともに $\delta_4-\delta_3$。

> [graph.md](graph.md) の具体例（$\gamma=60^\circ,120^\circ$、$\delta=40^\circ,140^\circ$、長さ $1$）は $\delta_3+\delta_4=\pi$ の対称配置で $\tilde I_\delta=(40^\circ,140^\circ)\supset I_\gamma=(60^\circ,120^\circ)$、すなわち**P3 の敵味方入れ替え（$I_\gamma\subset\tilde I_\delta$）**にあたる。`tools/rotating-team/` の数値計算で P1〜P3 の弧の区切りと窓位置を機械精度で確認済み。

## 回転平均

一周の積分 $\displaystyle\int_0^{2\pi}g\,d\theta$ を区分ごとに足す。単体の弧は $\int L\sin(\theta+\varphi)\,d\theta=-L\cos(\theta+\varphi)$ で、各分岐の寄与は（**3パターンとも同じ値**になる）

$$
\begin{aligned}
\int_a &= |v_1||v_3|(\cos\gamma_1-\cos\delta_3), &
\int_c &= |v_1||v_4|(\cos\gamma_1+\cos\delta_4),\\
\int_b &= -|v_2||v_3|(\cos\gamma_2+\cos\delta_3), &
\int_d &= |v_2||v_4|(\cos\delta_4-\cos\gamma_2).
\end{aligned}
$$

### 2択の窓は回転平均に寄与しない

窓は常に**2つが $\pi$ 反対側にペアで現れ**（P2・P3 の表の通り、第2窓＝第1窓 $+\pi$）、$\dfrac{1}{\sin(\theta+\pi)}=-\dfrac{1}{\sin\theta}$ なので

$$
\int_{\text{窓2}}\frac{d\theta}{R_iR_j\sin\theta}
=-\int_{\text{窓1}}\frac{d\theta}{R_iR_j\sin\theta},
$$

**2つの窓の寄与は厳密に相殺して合計ゼロ**。一周平均には一択の弧しか効かない。

> 片側の窓そのものの値（$\int1/\sin\theta=\ln|\tan(\theta/2)|$）は、参考までに
> $$\int_{\text{窓1}}\!\!\frac{d\theta}{R_iR_j\sin\theta}=\frac{1}{R_iR_j}\Big[\ln\tan\tfrac{\theta}{2}\Big]_{\pi-\delta_4}^{\,\min(\gamma_2,\pi-\delta_3)}=\begin{cases}\dfrac{1}{R_iR_j}\ln\!\big(\tan\tfrac{\gamma_2}{2}\tan\tfrac{\delta_4}{2}\big)&(\text{P2})\\[2mm]\dfrac{1}{R_iR_j}\ln\dfrac{\tan(\delta_4/2)}{\tan(\delta_3/2)}&(\text{P3})\end{cases}$$
> （上半面 $\theta\in(0,\pi)$ なので正）。これは半周 $\int_0^\pi g\,d\theta$ には残り、上下の非対称さ＝「有利側に寄ったときの読み合いの取り分」を表す。一周では下半面の窓と打ち消し合う。

### 一周平均の閉じた式（全6パターン共通）

4つの一択寄与を足し、$\cos\gamma,\cos\delta$ ごとにくくると

$$
\int_a+\int_b+\int_c+\int_d
=(|v_3|+|v_4|)(|v_1|\cos\gamma_1-|v_2|\cos\gamma_2)
+(|v_1|+|v_2|)(|v_4|\cos\delta_4-|v_3|\cos\delta_3).
$$

ここで $|v_a|\cos(\text{偏角})$ は単体ベクトルの $V_i$ 軸（$+x$）方向成分 $x$ で、同高さの $v_1,v_2$（および $v_3,v_4$）では $|v_1|\cos\gamma_1-|v_2|\cos\gamma_2=x_1-x_2=|v_1-v_2|$、$|v_4|\cos\delta_4-|v_3|\cos\delta_3=x_4-x_3=-|v_3-v_4|$。よって

$$
\boxed{\;\int_0^{2\pi}\! g\,d\theta
=(|v_3|+|v_4|)\,|v_1-v_2|\;-\;(|v_1|+|v_2|)\,|v_3-v_4|\;}
$$

$$
\langle g\rangle=\frac{1}{2\pi}\int_0^{2\pi}\! g\,d\theta
=\frac{1}{2\pi}\Big[(|v_3|+|v_4|)\,|v_1-v_2|-(|v_1|+|v_2|)\,|v_3-v_4|\Big].
$$

同じものを成分・外積で書くと（$v_1-v_2\parallel V_i$、$v_3-v_4\parallel V_j$ なので $|v_1-v_2|=R_i(v_1\times v_2)$、$|v_3-v_4|=R_j(v_3\times v_4)$）

$$
\int_0^{2\pi}\! g\,d\theta
=(|v_3|+|v_4|)\,R_i(v_1\times v_2)-(|v_1|+|v_2|)\,R_j(v_3\times v_4)
=(|v_3|+|v_4|)(x_1-x_2)+(|v_1|+|v_2|)(x_4-x_3),
$$

ここで $x_k=|v_k|\cos(\text{偏角})$ は $V_i$ 軸（$+x$）方向の成分（$x_1-x_2=|v_1|\cos\gamma_1-|v_2|\cos\gamma_2>0$、$x_4-x_3=|v_4|\cos\delta_4-|v_3|\cos\delta_3<0$）。長さ・角度のあらゆる組み合わせ（同高さ制約のもと）について数値積分と機械精度で一致することを確認済み。

### 読み取り

- **回転平均は配置パターンに依らず1本の式**。2択の窓がどこに何個開こうと、平均には**一択の弧だけ**が効く（窓は上下で相殺）。[graph.md](graph.md) の「二択部分は上に偏る寄与をほとんど持たない」という観察の、積分での裏付け。
- 平均が正（＝一周ならして自分有利）になるのは
$$
(|v_3|+|v_4|)\,|v_1-v_2|>(|v_1|+|v_2|)\,|v_3-v_4|.
$$
**自分の相方差 $|v_1-v_2|$ が大きく（＝$V_i$ 方向に広く張る）、相手の相方差 $|v_3-v_4|$ が小さいほど**平均有利。各係数は**相手・自分の長さの和**で重み付く。長さ $|v|$（＝単体相性の振れ幅。$A=v_i\times v_j=|v_i||v_j|\sin\angle$ より長いほど噛み合い・不利の振れが大きい。00 で揃えたパワー $p$ とは別軸）が大きいほど「自分の広がりを増幅する重し」として効く、という非対称な効き方になっている。
- 相手を一周させた“地ならし”では、$V$ の向きの差（噛み合い運）は均されて消え、**$V$ の広がり（相方の引き離し）と単体の長さ**という配置の素性だけが残る。これは次段（構築同士のナッシュ均衡）で「平均的に強い構築」を測る素直な指標になる。

## 回転平均を増やすには：配置の比較静学

ここからは「自分が $v_1,v_2$ を自由に選べるとき、回転平均 $\langle g\rangle$ を増やすにはどの自由度をどう動かすのが効くか」を、上の閉じた式を出発点に詰める。相手 $v_3,v_4$ は固定とする。

### 自分のチームは平均に「2つの数」でしか効かない

$v_1,v_2$ は各2成分で4自由度、全体回転（[rotation.md](rotation.md) のゲージ）で1つ落ちるので、自分のチームの**正味の自由度は3**（例えば長さ2つ $|v_1|,|v_2|$ と開き角 $\phi=\angle(v_1,v_2)$）。ところが回転平均の式

$$
2\pi\langle g\rangle=(|v_3|+|v_4|)\,|v_1-v_2|-(|v_1|+|v_2|)\,|v_3-v_4|
$$

に自分のチームが入る経路は、**回転不変な2つのスカラー**

$$
S_i=|v_1|+|v_2|\ (\text{長さの和}),\qquad D_i=|v_1-v_2|\ (\text{広がり＝相方の引き離し})
$$

だけ。3自由度のうち平均に効くのは2つで、**$(S_i,D_i)$ を変えない残り1自由度の変形は $\langle g\rangle$ に全く寄与しない**（→「効かない部分」、後述）。相手側も同様に $S_j=|v_3|+|v_4|$、$D_j=|v_3-v_4|$ の2数に縮約され、

$$
2\pi\langle g\rangle=S_j\,D_i-D_j\,S_i.
$$

### 広がり効率 $\eta$ ＝ 勝敗を決める唯一の比

$S=|v_a|+|v_b|$ でくくると、**広がり効率**

$$
\boxed{\ \eta=\frac{|v_a-v_b|}{|v_a|+|v_b|}=\frac{D}{S}\in[0,1]\ }
$$

が現れて、回転平均は

$$
\boxed{\ \langle g\rangle=\frac{S_iS_j}{2\pi}\,(\eta_i-\eta_j)\ }
$$

と書ける（`tools/rotating-team/` の数値積分と機械精度で一致を確認済み）。読み取りは明快：

- **平均の符号は $\eta_i-\eta_j$ だけで決まる。** $\eta$ は「相方をどれだけ引き離せているか」の正規化済み指標で、$\eta\to0$ が2匹同方向（相方が冗長）、$\eta\to1$ が反平行（最大に広い）。**広がり効率が相手より高い側が、一周ならして勝つ。**
- 等長 $|v_1|=|v_2|$ なら $\eta_i=\sin(\phi/2)$。広がり効率は実質「開き角の半分の $\sin$」。
- 効率差が同じでも、**勝ち幅は長さの積 $S_iS_j$ で増幅される**。自分が効率で勝っている（$\eta_i>\eta_j$）なら長さを伸ばすほど取り分が増え、負けている側が長いと損が増える――長さは「優劣を増幅する重し」。

### 3つのノブの優先順位

$(S_i,D_i)$ 平面での勾配は定ベクトル $(-D_j,\,S_j)/2\pi$、つまり「$D_i$ を増やし $S_i$ を減らす」向きが一様に増加方向。これを実パラメータ $(|v_1|,|v_2|,\phi)$ に落とすと、効きの順位がはっきりする。

**① 開き角 $\phi$（最優先・常に得）.** $\phi$ を開くと $D_i$ だけが増え $S_i$ は不変なので、

$$
\frac{\partial(2\pi\langle g\rangle)}{\partial\phi}=S_j\,\frac{|v_1||v_2|\sin\phi}{D_i}\ \ge 0\quad(\phi\in(0,\pi))
$$

で**常に非負**。相手がどうであれ、2匹を相性空間で開く（相方を引き離す）のは必ずプラス。最大は反平行 $\phi\to\pi$。これが「$g$ を増やすために自分の $v_1,v_2$ をどう選ぶか」への一次の答え＝**まず広げる**。

**② 長さ $|v_1|,|v_2|$（符号は向き次第）.** チーム軸の単位ベクトルを $\hat u=(v_1-v_2)/|v_1-v_2|$（$v_2$ から $v_1$ へ向く向き $=V_i$ 方向）とすると、片方を伸ばす効きは

$$
\frac{\partial(2\pi\langle g\rangle)}{\partial|v_1|}=S_j(\hat u\!\cdot\!\hat v_1)-D_j,\qquad
\frac{\partial(2\pi\langle g\rangle)}{\partial|v_2|}=S_j(-\hat u\!\cdot\!\hat v_2)-D_j.
$$

$\hat u\!\cdot\!\hat v_1=\cos\angle(v_1,V_i)$、$-\hat u\!\cdot\!\hat v_2=\cos\angle(v_2,-V_i)$ は**そのモンが自分の側のチーム軸へどれだけ前を向いているか**（正規化対称ゲージ $V_i\parallel+x$ ではそれぞれ $\cos\gamma_1,\ -\cos\gamma_2$）。よって

$$
\boxed{\ \text{モン }k\text{ を伸ばすのが得}\iff (\text{軸への前向き度})>\eta_j\ }
$$

- 軸に**前向き**なモン（$\hat u\!\cdot\!\hat v_k$ 大）は、伸ばすと $D_i$ を $S_i$ より速く増やすので**伸ばすほど得**。
- 軸に**横向き**なモン（$\cos\approx0$ 以下）は、伸ばしても $S_i$（罰）ばかり増えて $D_i$ にほとんど寄与しない＝**むしろ縮める**べき。閾値はちょうど相手の広がり効率 $\eta_j$。

**③ 効かない1自由度（動かしても無駄）.** $(S_i,D_i)$ を同時に保つ1パラメータ族は平均を1ミリも動かさない。具体的には**「開き角を閉じる↔長さを非対称にする」のトレードオフ**：固定 $S_i$ で $D_i^2=S_i^2-2|v_1||v_2|(1+\cos\phi)$ なので、長さを非対称にして積 $|v_1||v_2|$ を下げた分だけ $\phi$ を閉じれば $D_i$ は不変＝$\langle g\rangle$ も不変。①②をやり尽くした後にこの方向だけいじっても回転平均は1ミリも動かない。

### 相手のタイプで戦略が変わる

閾値も増幅率もすべて相手の2数 $S_j,\eta_j$ に支配される。

- **集中型の相手（$\eta_j\approx0$：相手の2匹がほぼ同方向）.** 長さの閾値 $\eta_j$ がほぼ0なので、**自分のほぼ全モンを伸ばすのが得**。$D_j\approx0$ で長さの罰がほとんど効かず、$\langle g\rangle\approx S_j\,\eta_i\,S_i/2\pi>0$、ほぼ自動的に有利。相手の相方が冗長＝こちらは何をしても勝ちやすい。
- **拡散型の相手（$\eta_j\approx1$：相手が反平行近く）.** 閾値が高く、**ほぼ真正面（$\hat u\!\cdot\!\hat v_k$ が1近く）のモンしか伸ばす価値がない**。長さの罰 $D_j$ が最大で、下手に長いモンを混ぜると損。短く鋭く広げた（$\eta_i$ を相手超えに上げた）チームでないと平均で負ける。
- いずれにせよ自分側の指針は不変＝**$\eta_i$ を上げる（広げる）**。違うのは「長さで押す余地」だけで、それは相手が集中型のときだけ大きい。

### 「次点で何を変えるか」と効かない方向（縮退）の注意

①の開き角は最優先だが、$\phi\to\pi$（$\eta_i\to1$）には罠がある。$R_i=|V_i|=D_i/(|v_1||v_2|\sin\phi)$ なので $\phi\to\pi$ で $R_i\to\infty$、2択の値 $1/(R_iR_j\sin\theta)\to0$。**回転平均には窓が効かない**ので平均だけ見れば構わないが、実際の対戦では**有利側（上半面 $\theta\in(0,\pi)$）での2択の取り分を失う**（[graph.md](graph.md) の「窓の縁が最大の有利」が潰れる）。つまり、

- **平均を上げたい**なら：開き角 $\phi$ を上げる（①）→ 前向きなモンを伸ばす（②）。
- **広げ切ってこれ以上 $\eta_i$ を上げられない／上げたくない**なら次点は：長さの**配り方**を②の閾値に沿って整える（前向きを伸ばし横向きを削る）。これは $\eta_i$ を据え置いたまま $S_iS_j$ の増幅を効かせる動き。
- 一方で**回転平均にそもそも効かない**のは：(i) チーム全体の向き＝噛み合い運（回転で均されて消える、既出）、(ii) 2択の窓の位置・幅（上下で相殺、既出）、(iii) 開き角と長さ非対称の③のトレードオフ方向。これらは「平均的な強さ」の指標としては触っても無駄なので、もし動かすなら平均ではなく**2択の取り分（$R_i$ を小さく保ち窓の縁を高くする）や、特定の相手への噛み合い**といった別目的のために使う。

> なお単体ベクトルの長さ $|v|$（相性の振れ幅であって、00 で揃えたパワー $p$ とは別物）に上限が無ければ、$\eta_i>\eta_j$ を保ったまま長さの和 $S_i$ を上げるだけで $\langle g\rangle$ は非有界に増える。意味のある最適化は**長さ予算 $S_i$ 固定**のもとで、そこでは目的は「$\eta_i$ の最大化＝広がり効率を上げる」一点に帰着する（開き角を開く・長さを前向きに非対称化する、の二択）。
