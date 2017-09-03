#!/bin/bash -e

if [ "$TRAVIS_PULL_REQUEST" == "false" ] && [ "$TRAVIS_BRANCH" == "master" ]; then
  echo "Deploying..."
  git config --global user.name "travis-ci"
  git config --global user.email "travis-ci@jonlauridsen.com"
  npm run deploy
else
  echo "Skipping deploy"
fi
