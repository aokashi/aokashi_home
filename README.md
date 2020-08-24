# Aokashi Home

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

Aokashi Home のリポジトリです。 Web サイトの生成に Gatsby.js を使用しています。

## 開発方法
```
npm install
npm run develop
```

## ディレクトリ構成について

    .
    ├── content
    ├── data
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

- `content`: 旧サイトの記事ファイルです。旧サイトの内容の移植のために残していますが、移植なしに削除する場合もあります。
- `data`: 旧サイトのデータファイルです。現サイトに含まれていないデータが含まれています。
- `src`: ソースファイルです。詳しくは中の README.md をご確認ください。
- `static`: ビルド時に配置されるファイルです。 `src` ディレクトリ内の画像ファイルでは最適化が行われますが、本ディレクトリ内では行われません。
- `gatsby-browser.js`: Aokashi Home 全ページで実行される JavaScript ソースファイルです。
- `gatsby-config.js`: Gatsby.js の設定ファイルです。
- `gatsby-node.js`: Aokashi Home ビルド時に実行されている JavaScript ソースファイルです。
- `gatsby-ssr.js`: SSR(サーバーサイドレンダリング) 技術に関する設定が含まれている JavaScript ソースファイルです。

## ライセンスについて
**Apache 2.0** ライセンスが適用されます。

ただし、下記のファイルは他人の著作物が含まれておりライセンス適用対象外のため、 **本リポジトリ外では自由に使用することができません**。

- /static/materials/site_banner-takabo_edge2.png (EDGE2 のバナー)
    - [EDGE2](http://takabosoft.com/edge2) のライセンス購入方法よりご利用ください
    - 当サイトでは Mixed Contents を防止するためリポジトリ内にファイルを配置しています
- /src/data/wwa/ 内のスクリーンショット画像
    - 使用したい場合は [ご連絡ください](https://www.aokashi.net/about)
