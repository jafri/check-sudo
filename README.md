# check-sudo [![Build Status](https://travis-ci.com/jafri/check-sudo.svg?branch=master)](https://travis-ci.com/jafri/check-sudo)

> Check process elevation on Linux, MacOs or Windows

[Docs](https://jafri.github.io/check-sudo/)

## Install
NPM
```
npm i check-sudo
```

Yarn
```
yarn add check-sudo
```

## Check Linux, Macos and Windows
```js
import { checkSudo } from 'check-sudo'

// Promises
checkSudo().then(isSudo => console.log(isSudo))

// Await/async
(async () => {
    console.log(await checkSudo())
})
```

## Check Linux or Macos
```js
import { checkLinuxOrMacSudo } from 'check-sudo'

// Promises
checkLinuxOrMacSudo().then(isSudo => console.log(isSudo))

// Await/async
(async () => {
    console.log(await checkLinuxOrMacSudo())
})
```

## Check Windows
```js
import { checkWindowsSudo } from 'check-sudo'

// Promises
checkWindowsSudo().then(isSudo => console.log(isSudo))

// Await/async
(async () => {
    console.log(await checkWindowsSudo())
})
```