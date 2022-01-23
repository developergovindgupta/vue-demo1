echo off
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/developergovindgupta/vue-demo1.git master:gh-pages
cd ..
echo.
echo.
echo. 
echo doployment done on github.io
echo.
echo.
echo ctrl+click view https://developergovindgupta.github.io/vue-demo1/
echo.
echo.
echo on
