---
path: /portfolio/wwa_maker
title: WWA Maker
template: portfolio-item
date: "2019-05-09"
season: college
tags:
  - WWA
  - 継続中
  - JavaScript
images:
  - path: /portfolio/wwa_maker/wwa_maker_map_view_and_parts_list.png
    alt: マップ表示とパーツ一覧を含めた WWA Maker の画面
    description: 2019年5月30日現在の WWA Maker の画面です。
links:
  - link: https://github.com/WWAWing/WWAMaker
    name: WWA Maker のGitHubリポジトリ
words:
  - wwa
---

WWAのマップデータを制作できるアプリケーションです。

WWAのマップデータを制作するツールは既に「[WWAマップ作成ツール](https://wwajp.com/making.html)」が存在していますが、下記の問題が発生していました。

- Windows でしか動作できない
- 編集できるフィールド画面が小さく、広大なフィールド画面の構築や編集に手間がかかる
- WWA Wing の新機能追加のボトルネックになっている

WWA Maker はこの「WWAマップ作成ツール」を参考に、今の時代に対応できるように開発し直したアプリケーションとなります。

このアプリケーションの構想は2008年～2009年から始まり、当時WWAマップ作成ツールがMacでは動作できなかったことがきっかけになります。しかしながら、当時の技術力でデスクトップアプリケーションを開発できる能力はなく、WWAマップ作成ツール自体も構造が複雑でどうしても制作に着手することができませんでした。

2015年になると WWA Wing の登場と Web 技術の勉強に伴い、新しい Web 技術を活用して Webアプリケーション の開発ができないか検討することになりましたが、当時は同じ作成ツールの開発を進めていた人もいたため、開発を控えていました。しかしながら、このまま放置した結果、 WWA Maker 以外で開発したいアプリケーションが存在しない結果となり、学部時代でまともにアウトプットできていませんでした。

2019年になると、WWAに関わる開発が数少なく、早急な完成が求められることから、開発を再開しました。開発にあたっては、様々なライブラリを活用していますが、これらのプログラミング言語やライブラリは、学部時代で学習したノウハウやスキルを活用しています。

- TypeScript ... WWA Wing で提供されている型定義の活用
  - [WWA Wing PE](/portfolio/wwa_wing_pe) で得られたスキルを活用
- monorepo ... 保存機能といったコードが長く分割可能な処理を独立する事によるメンテナンス向上
  - [WWA Wing の開発](/portfolio/wwa_wing) で得られたスキルを活用
- React ... WWA Maker のエディタのビュー制御や、コンポーネントのエコシステムの活用
  - [WWA Message Loader](/portfolio/wwa_collection) で得られたスキルを活用
- Redux ... 編集している WWAデータ のステート管理
- Electron (今後使用予定) ... マルチプラットフォーム対応のアプリケーション化
