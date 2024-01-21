# Augmented Reality Project

## Overview
THis project is a chance to learn about some different technologies with the goal of creating a web-based Augmented reality experience primarily targetting Meta Quest 3 headsets.

## Ingredients
| Technology | Justification |
|------------|---------------|
| Docker | Keep track of all the dependencies needed |
| Three.js   | Simplifies 3D graphics programming and works well with WebXR |
| WebXR      | Provides the necessary APIs for creating AR experiences in the browser (provided by the browser and used via three.js) |
| Typescript | I wanted to learn more about Typescript, and this seemed like a good chance to do so. |
| Webpack | To bundle javascript asssets. This was a chance to try and understand this technology better |
| Dokku | I have a Digital Ocean with Dokku on it, and needed somewhere to put the code. |
| CoPilot | To write most of the code for me :-) |

## Method
### Setup
1. [Initial setup](https://github.com/niciliketo/ar/commit/e3faedf9c254dc9121e86b545a58c8cd8bba3ad4#diff-dd2c0eb6ea5cfc6c4bd4eac30934e2d5746747af48fef6da689e85b752f39557)
1.1 Create a Dockerfile which builds from node and installs yarn. Because its just for dev, `tail -f` a file so the container stays running
1.2 Create a minimal `package.json` file so the container builds.
2. [Add webpack and typescript to the project](https://github.com/niciliketo/ar/commit/d3ac5531bd65ab65d66862c35992b90cb2a74da3#diff-51e4f558fae534656963876761c95b83b6ef5da5103c4adef6768219ed76c2de) 
2.1 Basically follow the webpack/typescript guide, but use `yarn add` to add the dependencies
2.2 Check everything is working by running `yarn run webpack` and `yarn run webpack-dev-server`
3. [Add Dokku](https://github.com/niciliketo/ar/compare/d3ac5531bd65ab65d66862c35992b90cb2a74da3...c7bb073defb284d2a143202707b22407d28ad6cd)
3.1 Add a app.json
3.2 Setup a new app on dokku
```
dokku apps:create ar
```
3.3 Setup a git remote for dokku
3.4 Add buildpacks for 
3.4.1 nodejs - so the app gets built during deploy
3.4.2 nginx static - because we dont run a server inside the dokku app, its just static files
3.5 on the dokku host, run a command to set the root of the app to be our /dist folder
```
dokku config:set ar NGINX_ROOT=dist
```
3.6 On the dokku host enable the letsencrpyt plugin for this app (the Quest browser requests VR/AR experiences to be over https)
```
dokku letsencrypt:enable ar
```
3.6 Push to dokku using git
4. [Add three.js](https://github.com/niciliketo/ar/commit/7dbd4aaf058acd4b0d090a4237f6c58aae87a6d1)
4.1 Add three.js using yarn
4.2 add three.js types (for typescript) using yarn
4.3 add a very basic demo to show three and ts are working
5. [Render in VR](https://github.com/niciliketo/ar/commit/b6cf9c39182e7948737f9c411ee1b308bbc1eb15)
5.1 Add in the addon VRButton.js
5.2 Change how stuff is rendered to work with VR
6 [Ignore Dist](https://github.com/niciliketo/ar/commit/1916e1d914d8c293939de1f42ae420bb5b606f8f)
6.1 Remove files in dist and add to gitignore. This is because those files can be built at deploy time and are not really worth committing to git
7. [Day One tidy up](https://github.com/niciliketo/ar/commit/96bd5f4299533649509efda466a92aaeaefb793e)
7.1 Add some helpful vscode extensions (copilot)
7.2 Add a README
7.3 Use copilot to split index.ts into multiple files

### Typescript

## TODO
dokku builds the app twice on deploy which seems excessive


## references
[The GitHub Repo](https://github.com/niciliketo/ar)
[webpack/typescript guide](https://webpack.js.org/guides/typescript/)
[Dokku guide](https://dokku.com/docs/deployment/application-deployment/)
[Three JS Docs](https://threejs.org/docs/#manual/en/introduction/Installation)
