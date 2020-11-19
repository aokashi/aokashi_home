---
template: portfolio-item
title: Wide Wiki
date: "2017-11-12"
season: college
tags:
  - Node.js
  - JavaScript
images:
  - path: ./edit_page.png
    alt: Wide Wiki の編集画面
    description: 編集画面です。
links:
  - link: https://github.com/aokashi/wide-wiki
    name: Wide Wiki のGitHubリポジトリ
  - link: http://aokashi.hatenablog.jp/entry/2017/11/12/220925
    name: Node.js(Express) で動くWikiを作ってました。 (自分のブログの記事)
---

[WWA Maker](/portfolio/wwa_maker/) の制作が中止になり制作したいものが頭の中にない中、 **なんとかして大学時代に成果を残したい、技術力を伸ばして周りに追いつきたい** ことから、1週間で制作したWikiシステムです。

ページの表示と編集、一覧表示が可能で、編集には markdown が利用できます。フレームワークには Express を使用していて、ディレクトリ構造はシンプルに留めました。

[自分の資料集](https://contents.aokashi.net/docs/) をリニューアルするというもう1つの目的もありましたが、現在は Web サイトのコンテンツの整理の関係で Wiki に頼る必要が無くなったことから開発は止まっています。

## 得られたもの

元々パッケージの扱いに難があった npm に慣れることができました(例: `npm install XXX` でPCにインストールされるのかと誤解していた)。当時は制作したいものでも無いのに無理に制作して損をしたのではないかと感じましたが、今思うと決して無駄なものではないと思っています。

開発に取り掛かる前は、近年の開発方法がどうなっているのか知らないし、ライブラリやフレームワークをどう使用したら良いのかさっぱり分かりませんでした。しかし、開発を通じて npm を活用したエコシステムの便利さを知ることができました。

このようにツールの扱い方が分からない場合には **「初心に戻って基礎から学ぼう！」** と思いました。

こうして得られた知識は [WWASAVE.js の改修](/portfolio/wwa_save_js/) で活用され、その改修で得られた知識を [WWA Message Loader の開発](/portfolio/wwa_collection/) で活用され・・・と地道に進み、現在は WWA Maker の開発へとたどり着けるようになりました。
