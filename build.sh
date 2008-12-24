#!/usr/bin/env bash
! [ -d out ] && mkdir out
php src/goosh.js > ./out/goosh.raw.js
yuicompressor ./out/goosh.raw.js > ./out/goosh.js
gzip < ./out/goosh.js > ./out/goosh.js.gz
