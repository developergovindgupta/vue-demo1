npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com/developergovindgupta/vue-demo1.git master:gh-pages
cd -