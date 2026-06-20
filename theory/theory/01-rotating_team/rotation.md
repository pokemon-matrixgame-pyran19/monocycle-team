# 相手構築の回転と角度依存

構築2つの相対的な関係を一望するため、自分の $V_i$ を固定して相手構築をぐるっと回す。

## 回転の設定

全体の回転対称性から $V_i$ を $x$ 軸正方向に固定できる（大きさ $R_i=|V_i|$）。相手構築を剛体回転させると $V_j$ も同じだけ回るので、$V_j$ の向きを角度 $\theta$ として

$$
V_j=R_j(\cos\theta,\sin\theta)\qquad(R_j=|V_j|\ \text{は一定})
$$

と書ける。動く変数は $\theta$ のみ。

### 配置の縛り

$v_1\times v_2>0$ かつ $V_i\parallel +x$ から、$v_1-v_2$ は $+x$ 方向に平行。よって

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

## 一択領域での値

実質一択の $g$ は4つの単体相性のいずれか。単位ベクトルなら $v_i\times v_k=\sin(\angle v_k-\angle v_i)$ なので

$$
\begin{aligned}
a&=\sin(\theta+\delta_3-\gamma_1), & c&=\sin(\theta+\delta_4-\gamma_1),\\
b&=\sin(\theta+\delta_3-\gamma_2), & d&=\sin(\theta+\delta_4-\gamma_2).
\end{aligned}
$$

いずれも有界（$|\cdot|\le1$）で、これが「頭打ち」の正体。

## 遷移角と2択の窓

切り替わり（折れ目）は [game_value.md](game_value.md) の符号がゼロになる所。$\bmod\ \pi$ で

$$
\theta\equiv\gamma_1\ (V_j\parallel v_1),\quad
\theta\equiv\gamma_2\ (V_j\parallel v_2),\quad
\theta\equiv\pi-\delta_3\ (v_3\,\text{が}\,V_i\,\text{軸を横切る}),\quad
\theta\equiv\pi-\delta_4\ (v_4\,\text{が横切る})
$$

の4本（円周上では8本）。本質的に2択になるのは

$$
\boxed{\ \theta\bmod\pi\in(\gamma_1,\gamma_2)\cap(\pi-\delta_4,\ \pi-\delta_3)\ }
$$

のときだけ。$\theta=\tfrac{\pi}{2}$（と $\tfrac{3\pi}{2}$）まわりの「窓」で、**窓の幅は両構築の広がり $\gamma_2-\gamma_1$ と $\delta_4-\delta_3$ の小さい方**で決まる。窓の外（特に $\theta\approx0,\pi$、$V_j\parallel\pm V_i$ 付近）は実質一択で、$\sin\theta$ の逆数の発散はこの一択化でガードされる。
