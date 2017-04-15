# Sass Version of Spectre.css
Spectre.css is a lightweight, responsive and modern CSS framework for faster and extensible development. [Spectre.css](https://github.com/picturepan2/spectre)

This sass version converts less to sass for better integration with your sass project and allows you to use sass mixins and @extends to create, for example, additional buttons, labels etc.

### Install
Spectre.scss can be installed from:

npm

    npm install spectre.scss

bower

    bower install spectre.scss

or manually you can clone this repository

### Where is normal css files?
In order to get processed css files first you need to run

	npm install
    gulp

than gulp will process the scss files to dist/ folder

### Usage

Simply add your main sass file this

```scss
@import "spectre";
@import "spectre-icons";
@import "spectre-exp";
```


### Scope
This is a minimual less->sass conversion. 

Syntax for variables and mixins has been converted, but the syntax remains css-like and does not adopt sass' minimal syntax. This has been done to reduce the effort when the less project updates.

### Documentation
For framework documentation, see original [Spectre.css](https://github.com/picturepan2/spectre) project. 

### Credit
Full credit for this brilliant and useful framework goes to [Yan Zhu](https://twitter.com/picturepan2). 

### Contributions
Feel free to submit a pull request. Help is always appreciated. Please ensure your gulp builds work before requesting.
