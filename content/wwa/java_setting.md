+++
title = "JavaアプレットのWWAを動作するには"
type = "playing"
weight = 6
+++

当サイトでは、WWA Wingを採用した作品と、WWA Wingを採用しない作品の2つに分かれています。後者の作品は、WWA Wingが開発される前に利用されていたJavaアプレットのWWAが採用されていますが、遊ぶ前に以下の手順に従う必要があります。

### ブラウザーの確認

まず、ご利用の際は **Javaアプレットが利用できるブラウザー** が必要になります。下記以外のブラウザを利用してもJavaアプレットは起動しません。

 - Internet Explorer

また、Javaの実行環境も忘れずにご用意願います。

### 例外サイトの設定

Java実行環境を整えてもJavaアプレットはセキュリティ設定によってブロックされます。そのため、Javaアプレットが正常に実行できるように設定を変更する必要があります。

<aside class="note is-notice">
  <p>ここでは、Windows 10 Proで作業をすることを前提に説明をしますが、Windows 10 Homeでも設定が可能です。</p>
  <p>コンピューターの設定を変更するため、学校や図書館などの公共施設内のPCでは設定できない場合があります。</p>
</aside>

<div class="box is-2-cols">
  <section class="box-items">
    １．Javaのコントロールパネルを開きます。コントロールパネルの開き方は色々ありますが、ここではスタートメニューからそのまま Java と入力し、 Javaの構成が表示されたところを選択します。<br>
    <img src="wwa_setting-1.png" alt="wwa_setting-1.png">
  </section>
  <section class="box-items">
    ２．コントロールパネル内の「セキュリティ」タブを開きます。<br>
    <img src="wwa_setting-2.png" alt="wwa_setting-2.png">
  </section>
  <section class="box-items">
    ３．「セキュリティ」を開いた後、「例外サイト・リスト」内の「サイト・リストの編集(S)...」を押します。<br>
    <img src="wwa_setting-3.png" alt="wwa_setting-3.png">
  </section>
  <section class="box-items">
    ４．「例外サイト・リスト」ダイアログにある「追加(A)...」ボタンを押して、URI(URL)の欄に <code>https://www.aokashi.net/</code> と入力します。入力したら、Enterキーを押します。<br>
    <img src="wwa_setting-4.png" alt="wwa_setting-4.png">
  </section>
  <section class="box-items">
    ５．ちゃんとリストに <code>https://www.aokashi.net/</code> が表示されていることを確認して、「OK」ボタンを押します。ここで、セキュリティ警告が表示された場合は最初の文字がhttp<strong>s</strong>になっているか確認してください。<br>
    <img src="wwa_setting-5.png" alt="wwa_setting-5.png">
  </section>
  <section class="box-items">
    ６．「OK」を押してコントロール パネルを閉じます。
  </section>
</div>