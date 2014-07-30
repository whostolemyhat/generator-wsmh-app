'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var WsmhAppGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },


  askFor: function () {
    //var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvellous web app template by @whostolemyhat'));

    var prompts = [
    {
      name: 'appName',
      message: 'What\'s your app\'s name?'
    },
    {
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }
    ];

    //this.prompt(prompts, function (props) {
     // this.appName = props.appName;
      //this.someOption = props.someOption;

      //done();
    //}.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/js');
    this.mkdir('app/sass');

    this.copy('app/_index.html', 'app/index.html');
    this.copy('app/_robots.txt', 'app/robots.txt');
    this.copy('app/_humans.txt', 'app/humans.txt');

    this.copy('app/js/_main.js', 'app/js/main.js');
    this.copy('app/js/_plugins.js', 'app/js/plugins.js');
    this.copy('app/js/vendor/_jquery-2.1.1.min.js', 'app/js/vendor/jquery-2.1.1.min.js');
    this.copy('app/js/vendor/_modernizr-2.6.2.min.js', 'app/js/vendor/modernizr-2.6.2.min.js');

    this.copy('app/sass/_variables.scss', 'app/sass/_variables.scss');
    this.copy('app/sass/main.scss', 'app/sass/main.scss');
    this.copy('app/sass/base/_base.scss', 'app/sass/base/_base.scss');
    this.copy('app/sass/base/_helpers.scss', 'app/sass/base/_helpers.scss');
    this.copy('app/sass/base/_mixins.scss', 'app/sass/base/_mixins.scss');
    this.copy('app/sass/base/_normalise.scss', 'app/sass/base/_normalise.scss');
    this.copy('app/sass/base/print.scss', 'app/sass/base/print.scss');
    this.copy('app/sass/modules/_typography.scss', 'app/sass/modules/_typography.scss');
    this.copy('app/sass/modules/ie.scss', 'app/sass/modules/ie.scss');

    this.copy('_.gitignore', '.gitignore');
    this.copy('_.jshintrc', '.jshintrc');
    this.copy('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_Readme.md', 'Readme.md');

  }

  // projectfiles: function () {
  //   this.copy('editorconfig', '.editorconfig');
  //   this.copy('jshintrc', '.jshintrc');
  // }
});

module.exports = WsmhAppGenerator;
