#!/usr/bin/env sh

set -e

npm run build:content
npm run build:export

mv out public

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:zangbianxuegu/blog.git master:gh-pages

cd -