module.exports = function getZerosCount(number, base) {
var x = 1;
var zeros =0;

var y = parseInt(base/3);
console.log(base);
console.log(base/3);
for (i=2; i<base; i++) {
  if (base%i == 0) {
    y = i;
  }
}
if(base>=10) {
while (Math.pow(y, x) <=number){
  zeros = zeros + parseInt(number/Math.pow(y, x));
  x++;
}
  return zeros;
  console.log(zeros)// your implementation
}
}
/* I'm not a great matimatician, so the equations for
this task were found here:
https://bodheeprep.com/number-exponents-factorial/
*/
