#!/bin/bash

hugo
rsync -av public/ sakura:/var/www/www/
exit 0
