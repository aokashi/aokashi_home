---
path: /portfolio/wwa_collection
template: portfolio-item
title: Nintendo Switch ソフト WWA COLLECTION の開発協力
date: "2018-12-20"
season: college
tags:
  - WWA
  - ゲームソフト
  - JavaScript
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

収録作品の制作にあたっては、様々な方法で制作メンバーを集めて、その制作メンバーが制作したい作品を自由に制作する方法となりました。制作した作品は別のメンバーにテストプレイしてもらい、ゲームの品質維持に協力しました。

自分はこのプロジェクトのうち、下記の内容を担当しました。収録作品については下記関連リンクのブログの記事をご参照ください。

- 収録作品「食べ物を取り戻せ!!」の制作担当
- 収録作品「Final Stock Game」の画像周りの修正担当
- 各収録作品のデバッグやメッセージ確認
- 収録作品の制作メンバーへの説明
- プロジェクトの進行方向の決定
- [紹介ページ](https://www.wwafansq.com/works/wwa_collection) の制作担当
- WWA Message Loader の開発

しかし、ソフトウェア内部については PLiCy が取り掛かっていた関係で直接手を出すことはありませんでした。ただし厳密に言えば、収録作品を動かす [WWA Wing には開発に関与している](/portfolio/wwa_wing) ため、間接的に手は出したのかもしれません。

メンバーが持つ考えを大事にしながら、ゲームのフィードバックを進めるいい機会でした。

なお、自分が制作した作品については、日本語の表現間違いの指摘が多く、改めて日本語の苦手さが表れることとなりました。つらい。

## WWA Message Loader

![WWA Message Loader でメッセージ内容を表示している画面](/portfolio/wwa_collection/wwa_message_loader.png)

これに合わせて、WWAのマップデータのすべてのメッセージを確認したいと PLiCy の開発者から連絡を頂き、 WWA Message Loader というWWAのマップデータをすべて確認できるWebアプリケーションを開発しました。

このアプリケーションの開発からWWAのマップデータの構造や Vue.js のコンポーネントの設計方法についてを理解することができました。この知識は後の [WWA Maker](/portfolio/wwa_maker) の開発に反映されることになります。

## WWA COLLECTION 2 の開発協力

また、翌年の2019年には WWA COLLECTION の次のゲームソフト「WWA COLLECTION 2」にも開発協力を行いました。

作業内容は前述の WWA COLLECTION のものと大して変わりませんでした。

- 収録作品「謎めいた機械を追い求めて」の制作担当
- 収録作品「Final Stock Game 2」の画像周りの修正担当
- 各収録作品のデバッグやメッセージ確認
- [紹介ページ](https://www.wwafansq.com/works/wwa_collection_2) の制作担当
  - 前作の WWA COLLECTION の紹介ページと比べて、よりコレクション作品であることを強く打ち出すために、トップの画面には収録作品の画面が表示されるように設計しました。

収録作品である「謎めいた機械を追い求めて」は WWA 作品の制作を始めてから9年経った集大成という位置付けのため、前編と後編にゲームを分けたゲーム作品になりました。

### タスク管理について

WWA のゲーム制作はゲームプログラミングと違ってメッセージ全体を見渡すことができず、問題点や修正すべき点がメモに記述出来ないことから、 [Trello](trello.com/) を使用してタスクを管理しました。

タスク管理サービスは他にもありますが、各タスクに対してコメントが出来る点では Trello が扱いやすいと感じています。その後、研究活動や WWA Maker の開発といった大事なプロジェクトにも、課題を見つけやすくするために Trello を使用し始めました。
