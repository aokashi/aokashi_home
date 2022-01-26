# Aokashi Home

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

Aokashi Home のリポジトリです。 Web サイトの生成に Gatsby.js を使用しています。

## 開発方法
```
npm install
npm run develop
```

## contents.aokashi.net で必要なファイル
本サイトを機能するには、 contents.aokashi.net に下記のファイルを配置する必要があります。 * のファイルは必須になります。

```
contents.aokashi.net
|- banner *
|  `- site_banner-takabo_edge2.png (EDGE2 のバナー)
`- restore
   `- (各復元サイトのディレクトリ)
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

### 稼働に必要な依存関係について

直接的には関係ないものの、ないとエラーで続行できないために必要な依存関係を下記に記載します。

- `sass`
- `deepmerge`: ビルド時に必要 (`gatsby-plugin-react-helmet` で発生)

## ライセンスについて
**Apache 2.0** ライセンスが適用されます。

ただし、下記のファイルは他人の著作物が含まれておりライセンス適用対象外のため、 **本リポジトリ外では自由に使用することができません**。

- /src/data/wwa/ 内のスクリーンショット画像
    - 使用したい場合は [ご連絡ください](https://www.aokashi.net/about)
