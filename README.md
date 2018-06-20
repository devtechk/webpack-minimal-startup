# webpack-minimal-startup
A minimal and easy startup with webpack. It loads and serves css and custom js into a unique bundle.

I suppose to add features time by time.

__Anyway I will appreciate if you can contribute to this repo :D__

## Project tree

* dist
* src
  * css
    * style.css
  * js
    * app.js
* index.html
* package.json
* package-lock.json
* webpack.config.js
* README.md

## install

Let's install all the dependencies we need. 

```npm

npm install

```
## Bundle'em!

These are the script to bundle, watch or activate a webpack-server

```package.json

  "scripts": {
    "build-dev": "webpack", 
    "watch": "webpack --watch"
    "webserver": "webpack-dev-server"
  }
  
```
###### Only bundle

bundle /src/js/app.js into /dist/bundle.js


```npm

npm run build-dev

```
###### Bundle and watch

watch the project's changes

```npm

npm run watch

```
###### Start a server

Start a server in  http://localhost:8080/

```npm

npm run webserver

```
