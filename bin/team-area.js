let util = require('util');
let Shape = require('../lib/shapesarea.js');

try{
  let type = process.arg[2];
  let Module = require ('@alu0100886764/ull-shape-' + type.tolowercase());
  let arg = process.argv[3];
  let obj = JSON.parse(arg.toString());
  let t = new Shape (obj, type);
  let s = t.getArea();


  t = new Shape(arg, type);
  s = t.getArea();
  console.log(s);

}
catch (e) {
  console.log(e.message);
}