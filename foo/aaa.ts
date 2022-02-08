import * as moment from 'moment';
import * as queryString from 'query-string';

console.log(moment());
console.log(queryString.pick('test', ['hi'])); // .pick() is not defined in query-string@6.3.0
