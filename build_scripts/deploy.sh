#!/bin/bash -e

cd public
git init
git add .
git commit -m "Deploy to GitHub Pages" --allow-empty
git push --force --quiet "https://${GH_TOKEN}@github.com/gaggle/gaggle" master:gh-pages > /dev/null 2>&1 | echo "Deploying..."
echo "Site deployed"