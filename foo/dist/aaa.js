"use strict";
exports.__esModule = true;
var moment = require("moment");
var queryString = require("query-string");
console.log(moment());
console.log(queryString.pick('test', ['hi']));
