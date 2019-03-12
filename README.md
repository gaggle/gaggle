# gaggle [![Build Status](https://travis-ci.org/gaggle/gaggle.svg?branch=master)](https://travis-ci.org/gaggle/gaggle) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/bf677b3778a14823b77ae7f68c485616)](https://www.codacy.com/app/gaggle/gaggle?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gaggle/gaggle&amp;utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/bf677b3778a14823b77ae7f68c485616)](https://www.codacy.com/app/gaggle/gaggle?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gaggle/gaggle&amp;utm_campaign=Badge_Coverage)

## Development
Install dependencies:
```bash
$ npm ci
```

Local server:
``` bash
$ npm run dev
```

Run tests:
``` bash
$ npm test
```

Fix linting errors:
``` bash
$ npm run lint
```

## Deploying
This site is under continous deployment, no manual steps are involved.

Pull-request are automatically deployed to `http://jonlauridsen.com/beta/`
(redeployed on every commit from any pull-request, so multiple pull-requests will clobber each other)

Commits to master are automatically deployed to `http://jonlauridsen.com`.

See [Nuxt.js docs](https://nuxtjs.org) for details on the underlying site-framework.
