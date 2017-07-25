#!/bin/bash
date=`date '+%-m/%d'`
year=`date '+%Y'`
sed -i -e "6i - $date - $1" content/informations/$year/index.md
echo "- $date - $1"
echo "をcontent/informations/$year/index.mdに書き込みました。"
exit 0
