# storybook-styleguidist
A repository of all the common React components used in various Boxfusion projects along with their documentation.

## Introduction
This project is designed to run outside of your project. This will allow you to build components in a sudo sandbox environment and  improve testing, reuse and the speed of development.

## Table of contents

-   [Getting Started](#getting-started)
-   [Contributing](#contributing)

## Getting Started

Before you get started you will need to make sure that your environment has been setup so you can start developing and contributing to this project. Below are a list of tools you will need to install before you can start development.

### Node
Before you can start with development you will need to head over to the Node website and make sure that you have Node installed https://nodejs.org/en/

### Sass
Once you have installed Node head over to the Sass website on instructions on how to install Sass https://sass-lang.com/ or you can use the below command to install it from the NPM repository:

```sh
npm install -g sass
```

### Storybook

Once you have installed Sass you can go ahead and install Storybook. For documentation on Storybook and installation instructions you can head over to the webiste https://storybook.js.org/ but if you have node installed youcan run the command below to install storybook and start developing:

```sh
npm i -g @storybook/cli
```

### Development

Once you have installed all the required dependencies for your environment you can start development by running the following commands.

To install the project dependencies to run the app:

```sh
npm install
```

To run storybook and begin watching your changes as you make them run:

```sh
npm run storybook
```

To run styleguidist and begin watching your changes as you make them run:

```sh
npm run styleguidist
```

To generate the static documentation for storybook run:

```sh
npm run build-storybook
```

To generate the static documentation for styleguidist run:

```sh
npm run build-styleguidist
```

If you want to demo what the application will look like when it is running in a browser you can run:

```sh
npm run start
```