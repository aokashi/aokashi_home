---
path: /portfolio/wwa_save_js
template: portfolio-item
title: WWASAVE.js の改修
date: "2018-04-19"
season: college
tags:
  - WWA
  - PHP
  - JavaScript
images:
  - path: ./wwa_save_js_new.png
    alt: WWASAVE.js の改修後の画面 (ログイン後)
    description: 改修した WWASAVE.js のログイン後の画面です。
links:
  - link: https://aokashi.hatenablog.jp/entry/2018/04/19/144959
    name: WWASAVE.js のdocker対応とフロントエンドの修正を担当しました (自分のブログの記事)
  - link: https://github.com/WWAWing/WWASAVE.js
    name: WWASAVE.js の GitHub リポジトリ
  - link: https://speakerdeck.com/aruneko/dockerdedokadoka-on-furait-number-36
    name: 'Dockerでドカドカ on FuralIT #36 (当時参考になった入門記事)'
words:
  - wwa
---

WWASAVE.js という WWA のセーブデータをサーバー上に保管できる Web サービスの改修を担当しました。

## WWASAVE.js について

WWA のゲームはブラウザで遊ぶことができますが、セーブデータはページを閉じると消えてしまいます。消えてしまわないように WWA ではパスワードセーブ機能が存在しますが、出力されたパスワードをテキストファイルに記録する必要がありました。

WWASAVE.js はそのセーブデータの保存から読み込みを簡単にするために [ヒラリラー](http://hirarira.net) が開発しました。

## 改修内容

フロントエンドの改修とサーバーの Docker 対応を行いました。詳しい内容は下記の関連リンクに掲載しています自分のブログの記事をご確認ください。

フロントエンドの改修では Bootstrap という CSS フレームワークを活用して改修しました。 **npm で提供されている CSS をどうやって正しい形で扱えるか** 模索をしていました。結果的には webpack を活用する形で解決しました。

また、データを非同期に受け取って表示する処理を初めて触れることができ、 JavaScript のビューフレームワークである React や Vue.js の必要性を理解することができました。

サーバーの Docker 対応では docker-compose を使用して簡単に Web サービスが稼働出来るように調整しました。ただ、 Docker の対応作業については後述の入門記事に頼っていたため、作業で躓いた覚えはあまりありませんでした。
