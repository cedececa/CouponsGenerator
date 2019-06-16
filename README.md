# NurseAide

An hybrid app allowing people to generate coupons with switchable algorithms with their smartphones.

## Project Summary

* Tech. Stack: Ionic 3, Angular 4.
* Platforms: Android, iOS, Windows (Universal Windows Platform apps). Currently only packaged for Android.
* Form Factor: Smartphones.

## Contact

This repository is managed by [Cheng Deng](mailto:ppnncc@live.com) who authors User Experience design and crafts interactive prototypes.

For functional enquiries you can ask [Cheng Deng](mailto:ppnncc@live.com).

For project management issues, please consult [Cheng Deng](mailto:ppnncc@live.com).

## Getting Started

### Prerequisites

You need to install [Node.js and npm](https://nodejs.org/en/) if they are not already installed on your computer.

> Verify that you are running at least node v8.x.x and npm 5.x.x by running node -v and npm -v in a terminal / console window. Older versions may produce errors.

Check if Ionic CLI and Cordova modules are installed:

```bash
$ ionic -v
$ cordova -v
```

If no version retrieved, install Ionic and/or Cordova:

```bash
$ npm install ionic@3.9.2 -g
$ npm install  @angular/cli  -g
```


### Install dependencies

> The following commands must be executed from application root folder.

Install project dependencies described in the `package.json`:

```bash
$ npm install
```

> This will install node modules dependencies locally.

> Note: If you are behind a firewall you have to configure firewall setting for npm and git.

### Quick build and run

Run `npm run serve` to build the project and lauch a lite web server. Then navigate to `http://localhost:8100`
if your browser doesn't open automatically.

## Browse, build and run

### Building for Android/iOS/Browser

Integrate Ionic with [Cordova](https://cordova.apache.org/) to bring native capabilities.

> You can see a full list of Ionic CLI commands [here](https://ionicframework.com/docs/cli/commands.html).

1. Add platforms

```bash
$ ionic cordova platform add [<platform>]
```

>  `platform` The platform to add (android, ios, browser)

2. Install plugins

```bash
$ ionic cordova prepare
```


## [TBC] Contribution guidelines
* Writing tests.
* Code review.
* [Code of Conduct](CODE_OF_CONDUCT.md)
* [Contributing](CONTRIBUTING.md)
* [Coding Style Guide Reference](CODING_GUIDELINES.md)
* Other guidelines.
