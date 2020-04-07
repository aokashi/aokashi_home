---
path: /portfolio/minecraft_server
template: portfolio-item
title: 自宅で Minecraft サーバー
date: "2018-05-04"
season: college
tags:
  - サーバー
images:
  - path: /portfolio/minecraft_server/server_world_first.png
    alt: Minecraft サーバーで最初に生成されたワールドでプレイしている図
    description: 最初のワールドの駅付近です。
  - path: /portfolio/minecraft_server/server_world_first_dynmap.png
    alt: Minecraft サーバーで最初に生成されたワールドをDynmapで表示している図
    description: 最初のワールドを dynmap で表示したマップです。
words:
  - ubuntu
---

[2013年に組み立てた自作PC](/portfolio/build_pc) が使う機会を失ってしまい放置状態だったことと、6年前の Minecraft のマルチプレイをもう一度行いたいことから、手元に余っていたPCを利用して Minecraft サーバーを構築しました。

最初は電気代や長時間稼働による故障を懸念していたことから、深夜～夕方に電源を自動で落としたりしていました(この自動化は単純に `cron` と `poweroff` の組み合わせで実現しています)。

現在も一部メンバー限定で稼働している他、手元のマシンリソースを活用して、ファイルサーバーの構築もしています。

## サーバーの構成とネットワークの問題

OSは Ubuntu を使用し、今後別の Web サービスを運用することを視野にいれるために Docker を導入して運用していました。 Docker については [WWASAVE.js の改修](/portfolio/wwa_save_js) を通じて理解したため、運用を通じて大きな問題は起こりませんでしたが、ポート開放しても内側のネットワークからでは WAN 側のアドレスにアクセス出来ないといったネットワーク関係の問題が発生しました。

運用を通じて、大学で学習したネットワークの知識が部分的に活かされました。問題点に対して分解し、原因を見つけることが出来るようになりました (なお、前述の WAN 側のアドレスにアクセス出来ない問題については、家のネットワーク構成上解決が難しいので未解決のまま放置したりしています...) 。
