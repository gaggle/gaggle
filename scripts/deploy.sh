#!/bin/bash
set -e # exit with nonzero exit code if anything fails

if [ "$TRAVIS_REPO_SLUG" == "gaggle/gaggle" ] && [ "$TRAVIS_PULL_REQUEST" == "false" ] && [ "$TRAVIS_BRANCH" == "master" ]; then
  cd _site
  git init > /dev/null 2>&1
  git config user.name "travis-ci"
  git config user.email "travis@travis-ci.org"
  git add .
  git commit -m "Deploy to GitHub Pages"
  git push --force --quiet "https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}" master:gh-pages > /dev/null 2>&1 | echo "Deploying..."
  echo "Site deployed"
fi
