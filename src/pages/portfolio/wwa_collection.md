---
path: /portfolio/wwa_collection
template: portfolio-item
title: Nintendo Switch ソフト WWA COLLECTION の開発協力
date: "2018-12-20"
season: college
tags:
  - WWA
  - ゲームソフト
images:
  - path: /portfolio/wwa_collection/return_food.jpg
    alt: 収録作品「食べ物を取り戻せ!!」の画面
    description: 自分が制作した収録作品「食べ物を取り戻せ!!」のプレイ画面です。
links:
  - link: https://ec.nintendo.com/JP/ja/titles/70010000015161
    name: WWA COLLECTION のマイニンテンドーストアのページ
  - link: http://aokashi.hatenablog.jp/entry/2018/12/20/000000
    name: WWA COLLECTIONを作ったお話 (自分のブログの記事)
  - link: https://aokashi.hatenablog.jp/entry/2019/03/02/000000
    name: WWA Message Loader を作ってました (自分のブログの記事)
  - link: https://github.com/aokashi/WWAMessageLoader
    name: WWA Message Loader のリポジトリ
  - link: https://ec.nintendo.com/JP/ja/titles/70010000018564
    name: WWA COLLECTION 2 のマイニンテンドーストアのページ
words:
  - wwa
  - plicy
---

既存のWWA作品もしくは新規に制作したWWA作品を収録して Nintendo Switch のソフトとして発売するプロジェクトです。

収録作品の制作にあたっては、様々な方法でメンバーを集めてもらい、そのメンバーが自由に制作する方法となりました。

自分はこのプロジェクトのうち、下記の内容を担当しました。収録作品については下記関連リンクのブログの記事をご参照ください。

- 収録作品「食べ物を取り戻せ!!」の制作担当
- 収録作品「Final Stock Game」の画像周りの修正担当
- 各収録作品のデバッグ
- 収録作品の制作メンバーへの説明
- プロジェクトの進行方向の決定
- [紹介ページ](https://www.wwafansq.com/works/wwa_collection) の制作担当
- WWA Message Loader の開発

しかし、ソフトウェア内部については PLiCy が取り掛かっていた関係で手を出すことはありませんでした。

## WWA Message Loader

![WWA Message Loader でメッセージ内容を表示している画面](/portfolio/wwa_collection/wwa_message_loader.png)

これに合わせて、WWAのマップデータのすべてのメッセージを確認したいと PLiCy の開発者から連絡を頂き、 WWA Message Loader というWWAのマップデータをすべて確認できるWebアプリケーションを開発しました。

このアプリケーションの開発からWWAのマップデータの構造や Vue.js のコンポーネントの設計方法についてを理解することができました。この知識は後の [WWA Maker](/portfolio/wwa_maker) の開発に反映されることになります。

## WWA COLLECTION 2 の開発協力
また、翌年の2019年には WWA COLLECTION の次のゲームソフト「WWA COLLECTION 2」にも開発協力を行いました。

作業内容は前述の WWA COLLECTION のものと大して変わりませんでした。

- 収録作品「謎めいた機械を追い求めて」の制作担当
- 収録作品「Final Stock Game 2」の画像周りの修正担当
- 各収録作品のデバッグ
- [紹介ページ](https://www.wwafansq.com/works/wwa_collection_2) の制作担当

収録作品である「謎めいた機械を追い求めて」は9年近く制作してきたWWA作品の集大成という位置付けのため、前編と後編にゲームを分けたゲーム作品になりました。
