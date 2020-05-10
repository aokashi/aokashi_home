---
path: /portfolio/word_dic
template: portfolio-item
title: 単語辞書プログラム
date: "2014-08-30"
season: high-school
tags:
  - PHP
images:
  - path: /portfolio/word_dic/top_page.png
    alt: 単語辞書プログラムのトップ画面
    description: トップ画面です。
links:
  - link: https://github.com/aokashi/word-dic
    name: 単語辞書プログラムの GitHub リポジトリ
  - link: https://aokashi.hatenablog.jp/entry/2014/08/3014
    name: 単語辞書プログラムを公開 (自分のブログの記事)
words:
  - town
---

各単語の一覧表示や検索ができる小さいWebサービスを開発しました。

元々は単語辞書の作成を頼まれたことがきっかけでしたが、Google スプレッドシートで本名が見られることを恐れて放置してしまい、お詫びという形で開発したものです。

データは csv ファイルで記載されていて、名前や読み、発祥、説明などを加えることが可能です。
一度に複数表示できるところが特徴です。

開発にあたっては、 CGI プログラムの TOWN を参考にしました。 TOWN は POST パラメーターの mode に与えられた文字列から、どの施設を表示したいか判別することが可能なことから、本プログラムもこの方法を使用しました (現在だったら、 PHP ファイルから HTML ファイルの変更や、セッションの活用など、もっといい方法があるかもしれません。)。

PHPで1からプログラムを開発したことから、この開発でWebアプリケーションの基礎を知ることができました。
