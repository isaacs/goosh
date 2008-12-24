#!/usr/bin/env bash
! [ -d out ] && mkdir out
[ -f "`which php 2>/dev/null`" ] && php src/goosh.js > ./out/goosh.raw.js
[ -f "`which yuicompressor 2>/dev/null`" ] && yuicompressor ./out/goosh.raw.js > ./out/goosh.js
[ -f "`which gzip 2>/dev/null`" ] && gzip < ./out/goosh.js > ./out/goosh.js.gz
