!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({"/Users/scott/Desktop/officebot-alerts/src/alerts.directive.js":[function(require,module,exports){module.exports=function(officebotAlerts){"use strict";"ngInject";var tmpl="<div class='officebot-alerts-container bottom'> 		<div ng-repeat='alert in _alertVM.alerts' class='col-xs-12 col-sm-4 col-sm-offset-8 single-alert' ng-class='{\"done\" : alert.isDone}'> 			<div class='alert alert-dismissible' ng-class='alert.alertClass' role='alert'> 				<button type='button' class='close' ng-click='_alertVM.dismiss(alert)' aria-label='Close'><span aria-hidden='true'>&times;</span></button> 				<strong ng-show='alert.title'>{{alert.title}} </strong>{{alert.message || '???'}} 			</div> 		</div> 	</div>";return{restrict:"AE",template:tmpl,controller:function($rootScope,$interval){function dismiss(alert){alert.isDone=!0}function onNewAlert(event,newAlert){vm.alerts.push(newAlert)}var vm=this||{};return vm.alerts=[],vm.dismiss=dismiss,$rootScope.$on("alerts.new",onNewAlert),vm},controllerAs:"_alertVM"}}},{}],"/Users/scott/Desktop/officebot-alerts/src/alerts.service.js":[function(require,module,exports){module.exports=function($timeout,$rootScope,$window){"use strict";function info(title,message,timeout){return alert(title,message,"alert-info",timeout)}function warning(title,message,timeout){return alert(title,message,"alert-warning",timeout)}function danger(title,message,timeout){return alert(title,message,"alert-danger",timeout||0)}function alert(title,message,alertClass,timeout){var alertTimeout=timeout||defaultTimeout,newAlert={title:title,message:message,alertClass:alertClass,timeout:alertTimeout,isDone:!1,timestamp:(new Date).toString()},len=alerts.push(newAlert);return $rootScope.$emit("alerts.new",newAlert),0>=timeout?len:($timeout(function(){newAlert.isDone=!0},alertTimeout),len)}var alerts=[],defaultTimeout=3e3;this.info=info,this.warning=warning,this.danger=danger,this.alert=alert}},{}],"/Users/scott/Desktop/officebot-alerts/src/index.js":[function(require,module,exports){var angular=require("angular"),moduleName="officebotAlertsModule";angular.module(moduleName,[]).service("officebotAlerts",require("./alerts.service.js")).directive("officebotAlertsPane",require("./alerts.directive.js")),module.exports=moduleName},{"./alerts.directive.js":"/Users/scott/Desktop/officebot-alerts/src/alerts.directive.js","./alerts.service.js":"/Users/scott/Desktop/officebot-alerts/src/alerts.service.js",angular:"angular"}]},{},["/Users/scott/Desktop/officebot-alerts/src/index.js"]);