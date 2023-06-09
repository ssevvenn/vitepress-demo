set -e
npm run docs:build
git subtree push --prefix docs/.vitepress/dist origin gh-pages
cd -