Param([string] $message)
$date=Get-Date -Format MM/dd
$year=Get-Date -Format yyyy
bash -c "sed -i -e \"6i - $date - $message\" content/informations/$year/index.md"
echo "- $date - $message"
echo "Writing finished in content/informations/$year/index.md"
# http://tech.guitarrapc.com/entry/2013/02/09/030226 ... 日付のフォーマットについて
# http://www.atmarkit.co.jp/ait/articles/0709/20/news125_2.html ... Powershellの文字列の結合について