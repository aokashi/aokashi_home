# Aokashi Home ソースコードファイル
Aokashi Home ソースファイルです。

- components ... コンポーネント
- data ... データ
- images ... 画像
- layouts ... レイアウト
- pages ... ページ
- styles ... スタイルシート
- templates ... テンプレート

## ページ構造について
**ページ → テンプレート → レイアウト** の順番にページのコンポーネントを読み込みます。

ページは markdown 形式かコンポーネント形式 (`*.js`) で構成されています。

markdown 形式の場合は、一番最初にある frontmatter の template の値から、 templates ディレクトリのテンプレートを利用します。

```
title: タイトル
template: default ← これ
---
```

テンプレートは内容周りの構成や、ページクエリの設定などが含まれています。

レイアウトはページ全体の構成が含まれています。
