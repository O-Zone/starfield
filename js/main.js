//var Point3D = require('./Point3D');
import { Point3D } from './Point3D';
//import Point3D from 'Point3D';

$(document).ready(function () {
    console.log('js/main.js: Page ready');
    let p1 = new Point3D(100,23,47);
    console.log(p1);
});