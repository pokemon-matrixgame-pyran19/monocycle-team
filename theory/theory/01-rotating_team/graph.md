# グラフの特徴と具体例

## 特徴

- **連続だが折れ目（微分不可能）がある**。8本の遷移角で $g$ の傾きがカクッと変わる。
- **2択窓の中心 $\theta=\tfrac{\pi}{2}$ で $g$ が極小**。$\csc$ は窓の縁に向かって増え、最大の有利は窓の縁（2択と一択の境目）で達成される（「直交が一番安定」）。
- **一択化で頭打ち**。$\csc$ を伸ばせば跳ね上がる所が、単体相性 $\sin$ の値で抑えられる。
- 対称配置では窓が常に $(0,\pi)$ の内側に収まり、$\csc$ の発散は起きず $|g|\le1$。
- 片方の構築の広がりが極端に大きいと窓が $0,\pi$ に迫り、そこで初めて $\csc$ 的な大きい値が顔を出す。

## 具体例（対称配置）

両構築を「相方ベクトルに直交する向きを中心に対称」に置くと $\gamma_{1,2}=90^\circ\mp\psi$、$\delta_{3,4}=90^\circ\mp\omega$（$\psi,\omega$ は半開き角）。

$\psi=30^\circ,\ \omega=50^\circ$（単体は単位ベクトル）のとき $R_iR_j=\dfrac{1}{\cos30^\circ\cos50^\circ}\approx1.796$、2択の窓は $(60^\circ,120^\circ)$ と $(240^\circ,300^\circ)$。

| $\theta$ の範囲 | 領域 | ゲームの値 $g$ |
|---|---|---|
| $(320^\circ,\ 60^\circ)$ | 実質一択 | $a=\sin(\theta-20^\circ)$ |
| $(60^\circ,\ 120^\circ)$ | 本質的に2択 | $\dfrac{1}{1.796\,\sin\theta}$ |
| $(120^\circ,\ 220^\circ)$ | 実質一択 | $d=\sin(\theta+20^\circ)$ |
| $(220^\circ,\ 240^\circ)$ | 実質一択 | $c=\sin(\theta+80^\circ)$ |
| $(240^\circ,\ 300^\circ)$ | 本質的に2択 | $\dfrac{1}{1.796\,\sin\theta}$ |
| $(300^\circ,\ 320^\circ)$ | 実質一択 | $b=\sin(\theta-80^\circ)$ |

対称配置では、窓の縁の値は $\cos(\max(\psi,\omega))$、窓の底（$\theta=90^\circ$）の値は $\cos\psi\cos\omega$ になる（上例で縁 $\approx\cos50^\circ\approx0.64$、底 $\approx\cos30^\circ\cos50^\circ\approx0.56$）。
