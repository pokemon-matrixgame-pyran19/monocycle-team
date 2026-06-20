# 相手構築の回転と角度依存

構築2つの相対的な関係を一望するため、自分の $V_i$ を固定して相手構築をぐるっと回す。

## 回転の設定

全体の回転対称性から $V_i$ を $x$ 軸正方向に固定できる（大きさ $R_i=|V_i|$）。相手構築を剛体回転させると $V_j$ も同じだけ回るので、$V_j$ の向きを角度 $\theta$ として

$$
V_j=R_j(\cos\theta,\sin\theta)\qquad(R_j=|V_j|\ \text{は一定})
$$

と書ける。動く変数は $\theta$ のみ。

### 配置の縛り

ラベルの取り換えで $v_1\times v_2>0$（[team_vector.md](../00-single_compatibility_model/team_vector.md) の規約）にとってあるので、$V_i$ は $v_1-v_2$ と同じ向き。これを $V_i\parallel +x$ に固定すると $v_1-v_2$ は $+x$ 方向、つまり $v_1,v_2$ は $y$ 成分が等しく（同じ高さ $h$）、$v_1$ が右（$x_1>x_2$）。外積を成分で書くと $v_1\times v_2=h(x_1-x_2)$ で、これが正かつ $x_1>x_2$ だから $h>0$――**$v_1,v_2$ は上半面**に乗る。さらに $V_i=\dfrac{(x_1-x_2,\,0)}{h(x_1-x_2)}=(1/h,0)$ なので $h=1/R_i$。よって

- $v_1,v_2$ は同じ高さ $h=1/R_i$ の上半面に乗り、$v_1$ が右側（偏角が小さい）。偏角を $\gamma_1<\gamma_2\ (\in(0,\pi))$ とする。
- 相手も同様に、$\theta=0$ の静止系での偏角を $\delta_3<\delta_4\ (\in(0,\pi))$ とすると、回転後は $v_3$ が $\delta_3+\theta$、$v_4$ が $\delta_4+\theta$ を向く。

## 2択領域での値

本質的に2択の領域では（[game_value.md](game_value.md) の混合戦略の値）

$$
g=\frac{1}{V_i\times V_j}=\frac{1}{R_iR_j\sin\theta}.
$$

$\sin\theta$ の逆数の形で、

- $\theta\in(0,\pi)$ で $g>0$（自分有利）、$\theta\in(\pi,2\pi)$ で $g<0$。
- $|g|$ は $\theta=\tfrac{\pi}{2},\tfrac{3\pi}{2}$（$V_i\perp V_j$）で最小 $\dfrac{1}{R_iR_j}$。
- $\theta\to0,\pi$ で発散するが、手前で必ず一択に切り替わるため発散は現れない。

## 一択領域での値とその分岐

実質一択の $g$ は4つの単体相性 $v_i\times v_k=|v_i||v_k|\sin(\angle v_k-\angle v_i)$ のいずれか。長さを $|v_i|=1$ に正規化すると

$$
\begin{aligned}
a&=\sin(\theta+\delta_3-\gamma_1), & c&=\sin(\theta+\delta_4-\gamma_1),\\
b&=\sin(\theta+\delta_3-\gamma_2), & d&=\sin(\theta+\delta_4-\gamma_2).
\end{aligned}
$$

いずれも有界（$|a|\le|v_1||v_3|$ 等、正規化すれば $|\cdot|\le1$）で、これが「頭打ち」の正体。

**どの一択になるか**は、[game_value.md](game_value.md) の差の符号を $\theta$ まで降ろせば完全に決まる。$V_i\parallel+x$、$v_3,v_4$ の偏角が $\delta_3+\theta,\delta_4+\theta$、$V_j$ の偏角が $\theta$ なので（$V_i\times v_3=R_i\sin(\theta+\delta_3)$、$v_1\times V_j=R_j\sin(\theta-\gamma_1)$ 等）

$$
\mathrm{sgn}(a-b)=\mathrm{sgn}\sin(\theta+\delta_3),\quad
\mathrm{sgn}(c-d)=\mathrm{sgn}\sin(\theta+\delta_4),\quad
\mathrm{sgn}(a-c)=\mathrm{sgn}\sin(\theta-\gamma_1),\quad
\mathrm{sgn}(b-d)=\mathrm{sgn}\sin(\theta-\gamma_2).
$$

これを鞍点条件 $b<a<c$ などに入れると、$g$ は $\theta$ だけで次のように場合分けされる。各一択分岐が**その一択で実際に出る2匹だけ**の符号で決まることに注意：

$$
g=\begin{cases}
\dfrac{1}{R_iR_j\sin\theta} & \sin(\theta+\delta_3)\sin(\theta+\delta_4)<0\ \text{かつ}\ \sin(\theta-\gamma_1)\sin(\theta-\gamma_2)<0\\[2mm]
a=\sin(\theta+\delta_3-\gamma_1) & \sin(\theta+\delta_3)>0\ \text{かつ}\ \sin(\theta-\gamma_1)<0\\
b=\sin(\theta+\delta_3-\gamma_2) & \sin(\theta+\delta_3)<0\ \text{かつ}\ \sin(\theta-\gamma_2)<0\\
c=\sin(\theta+\delta_4-\gamma_1) & \sin(\theta+\delta_4)>0\ \text{かつ}\ \sin(\theta-\gamma_1)>0\\
d=\sin(\theta+\delta_4-\gamma_2) & \sin(\theta+\delta_4)<0\ \text{かつ}\ \sin(\theta-\gamma_2)>0
\end{cases}
$$

幾何的には、$a=v_1\times v_3$ が値になるのは「相手の $v_3$ が $V_i$ 軸の上側（$\sin(\theta+\delta_3)>0$）かつ $V_j$ が $v_1$ の時計回り側（$\sin(\theta-\gamma_1)<0$）」のとき。$b,c,d$ も添字を $1\!\leftrightarrow\!2$、$3\!\leftrightarrow\!4$ で読み替えるだけ。条件に現れる $\sin$ がちょうど $1$ 本ずつ「$v_3,v_4$ のどちらが $V_i$ 軸の上下どちらか」と「$V_j$ が $v_1,v_2$ のどちら回りか」を担う。

## 遷移角・2択の窓・一択の弧

切り替わり（折れ目）は上の4つの $\sin$ がゼロになる所。$\bmod\ \pi$ で

$$
\theta\equiv\gamma_1\ (V_j\parallel v_1),\quad
\theta\equiv\gamma_2\ (V_j\parallel v_2),\quad
\theta\equiv\pi-\delta_3\ (v_3\,\text{が}\,V_i\,\text{軸を横切る}),\quad
\theta\equiv\pi-\delta_4\ (v_4\,\text{が横切る})
$$

の4本（円周上では8本）。これが $\theta$ 円を弧に分け、各弧が前節の場合分けのちょうど1つに対応する。本質的に2択になるのは

$$
\boxed{\ \theta\bmod\pi\in(\gamma_1,\gamma_2)\cap(\pi-\delta_4,\ \pi-\delta_3)\ }
$$

のときだけ。2つの広がり区間の重なりが「窓」で、**窓の幅は $\min(\gamma_2,\pi-\delta_3)-\max(\gamma_1,\pi-\delta_4)$**（正なら2択、非正なら全域が一択）。これは広がり $\gamma_2-\gamma_1,\ \delta_4-\delta_3$ の小さい方を上界とし、両区間が同心（対称配置）のとき等号で、窓は $\theta=\tfrac\pi2,\tfrac{3\pi}2$ を中心にする。残りの弧が一択で、前節の条件を解くと

$$
\begin{aligned}
a:\ &\theta\in(\gamma_1-\pi,\ \gamma_1)\cap(-\delta_3,\ \pi-\delta_3), &
c:\ &\theta\in(\gamma_1,\ \gamma_1+\pi)\cap(-\delta_4,\ \pi-\delta_4),\\
b:\ &\theta\in(\gamma_2-\pi,\ \gamma_2)\cap(\pi-\delta_3,\ 2\pi-\delta_3), &
d:\ &\theta\in(\gamma_2,\ \gamma_2+\pi)\cap(\pi-\delta_4,\ 2\pi-\delta_4).
\end{aligned}
$$

ここで効くのは角度 $\gamma_1,\gamma_2,\delta_3,\delta_4$ だけで、**単体ベクトルの長さ $|v_i|$ には依らない**（4つの符号 $\mathrm{sgn}\sin(\theta+\delta_3)$ 等が長さを含まないため、場合分けは角度で閉じる）。$\gamma_1,\gamma_2$（と $\delta_3,\delta_4$）は独立な角度パラメータで、弧の並びは2つの広がり区間 $(\gamma_1,\gamma_2)$ と $(\pi-\delta_4,\pi-\delta_3)$ の重なり方で決まる（重ならなければ全域が一択）。

> **長さが効くのは値の方だけ。** 同高さの縛りは $|v_1|\sin\gamma_1=|v_2|\sin\gamma_2$（と $|v_3|\sin\delta_3=|v_4|\sin\delta_4$）で、これは**長さ比を角度に縛るだけで角度同士は縛らない**。前節の値 $a,b,c,d$ を純粋な $\sin$ にするには $|v_i|=1$ への正規化が要り、そのときだけ同高さの縛りが $\gamma_1+\gamma_2=\pi$（同様に $\delta_3+\delta_4=\pi$）を強制して、配置が $\theta=\tfrac\pi2,\tfrac{3\pi}2$ 対称になる。これが [graph.md](graph.md) の対称配置（半開き角 $\psi=\tfrac{\gamma_2-\gamma_1}{2},\omega=\tfrac{\delta_4-\delta_3}{2}$、具体例 $\psi=30^\circ,\omega=50^\circ$）で、一般の長さでは角度は対称に縛られない。

窓の外（特に $\theta\approx0,\pi$、$V_j\parallel\pm V_i$ 付近）は実質一択で、$\sin\theta$ の逆数の発散はこの一択化でガードされる。
