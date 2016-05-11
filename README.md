# input-chips
AngularJS input Chips for using multiple Emails, Names etc.

####Browser support


![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
 Yes | Yes | IE9 + | Yes | Yes |


## Load

To use the directive, include the angular input-chips's javascript file in your web page:

```html
<!DOCTYPE HTML>
<html>
<head>
  <link rel="stylesheet" href="input-chips/input-chips.css"/>
</head>
<body ng-app="app">
  //.....
  <script src="input-chips/input-chips.js"></script>
</body>
</html>
```

####Add module dependency
Add the inputChipsApp module dependency

```javascript
angular.module('app', [
  'inputChipsApp'
 ]);
```

Call the directive wherever you want in your html page

```html
<input-chips chips-value="mailData.to" chips-unique="false" chips-break="chipsBreakDelimiter" style="width:50%"></input-chips>
```
####[Live demo](https://embed.plnkr.co/yvxaydXMufpCMNary6ix/)


##Contributing

We will be much grateful if you help us making this project to grow up. Feel free to contribute by forking, opening issues, pull requests etc.
