@@ -1,15 +1,27 @@
 module.exports = function getZerosCount(number, base) {
+var primeN = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,  41, 43,
+
+  47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
+
+  103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
+
+  157, 163, 167, 173, 179, 181, 191, 193, 197, 199]
 var x = 1;
 var zeros =0;
-
-var y = parseInt(base/3);
-console.log(base);
-console.log(base/3);
-for (i=2; i<base; i++) {
-  if (base%i == 0) {
-    y = i;
+var y;
+var numb = [];
+for (var i = 0; i<primeN.length; i++) {
+  if (base%primeN[i] == 0) {
+    numb.push(primeN[i]);
   }
 }
+numb = numb.sort(function(a,b) {return b-a})
+console.log(numb, "Numb")
+y = numb[0];
+
+console.log(number);
+console.log(base, "base");
+console.log(y, "y");
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
