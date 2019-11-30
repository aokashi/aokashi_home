---
path: /portfolio/portable_launcher
template: portfolio-item
title: Portable Launcher
date: "2017-06-17"
season: college
tags:
  - C_Sharp
images:
  - path: /portfolio/portable_launcher/launcher_menu.png
    alt: Portable Launcher のランチャーメニュー
    description: ランチャーメニューです。
links:
  - link: https://github.com/aokashi/PortableLauncher
    name: Portable Launcher の GitHub リポジトリ
---

中学と高校のパソコンと自宅のパソコンで手慣れたアプリケーションを簡単に動かすために開発された、USBメモリ上で起動できるランチャーのアプリケーションです。

元々こういったランチャーのアプリケーションは、インターネット上でいくつかありましたが、下記の事情で新規に開発することになりました。

- タスクトレイのアイコンからコンテキストメニューが表示される、シンプルなランチャーがそもそも少ない
    - 当時は [PStart](http://www.pegtop.net/start/) をよく使用していたが、日本語に直すパッチソフトが使用当時に消失してしまい、インターフェイスの日本語化ができない
- あったとしても、タスクトレイからメニューが表示されなかったり、そもそもメニューのデザインが派手でオーバースペックだったりしていた

2013年頃に開発を始めましたが、コンテキストメニューがちゃんとした位置に表示されず、途中で諦めましたが、2016年より開発を再開しました。開発当初はVisual Basicを利用していましたが、C#に変更した上で開発を続けました。

ただし、現在はノートパソコンで手慣れた環境が手元にあるため、USBメモリでアプリケーションを起動することは滅多に無いです。

とはいえ、自宅のパソコンではインストーラーを持たないアプリケーションが含まれています。今後は項目追加の省力化を狙うため、フォルダを指定するとそのフォルダにあるアプリケーションを自動で登録する機能の実装を考えています。
