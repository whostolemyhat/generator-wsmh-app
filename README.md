#[@whostolemyhat](https://twitter.com/whostolemyhat)'s Web App Template

Web app generator for Yeoman. Constructs a standard boilerplate for webapps including Grunt and Sass configurations.

##Getting started

- Install: `npm install -g generator-wsmh-app`
- Run: `yo wsmh-app`

##What does it do?
Scaffolds a boilerplate web app template. To run the gruntfile, you will need the following installed:
3. [Grunt](http://gruntjs.com/getting-started) (npm install -g grunt-cli)
3. Ruby [Windows installer](http://rubyinstaller.org/downloads/)
4. [Sass](http://sass-lang.com/) (gem install sass)

##Usage

Currently there are two grunt tasks:

1. `grunt` - runs a static server on port 9000 and auto-refreshes when a change is made to a CSS, JS, HTML or image file.
Also compiles SASS files - config set in the Gruntfile. Stop the server with Ctrl+C.

1. `grunt build` - concatenates and builds all js files in app/js (but not in the vendor folder), and minifies all CSS (but doesn't concat all).