module.exports = function getZerosCount(number, base) {
  var primeN = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
    47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
    103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
    211, 223, 227, 229, 233, 239, 241, 251, 257, 263,
    269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
    331, 337, 347, 349, 353, 359, 367, 373, 379, 383,
    389, 397, 401, 409, 419, 421, 431, 433, 439, 443,
    449, 457, 461, 463, 467, 479, 487, 491, 499, 503,
    509, 521, 523, 541, 547, 557, 563, 569, 571, 577,
    587, 593, 599, 601, 607, 613, 617, 619, 631, 641,
    643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
    709, 719, 727, 733, 739, 743, 751, 757, 761, 769,
    773, 787, 797, 809, 811, 821, 823, 827, 829, 839,
    853, 857, 859, 863, 877, 881, 883, 887, 907, 911,
    919, 929, 937, 941, 947, 953, 967, 971, 977, 983,
    991, 997];
  var pNumber = []
  var x = 1;
  var zeros = 0;
  var y;
  var b = base;
  var n = number;
  //console.log(number, "Number");
  console.log(base, "base");
  var bs = [];

  for (var i = -1; i < primeN.length; ++i) {
    if (b == 1) { break }

    if (b % primeN[i] == 0 && b > 1) {
      console.log("pushing primeN[i]", primeN[i])
      bs.push(primeN[i]);
      console.log(bs, "bs")
      b = b / primeN[i];
      i = -1;

      console.log(b, "rem");

    }
  }
  bs = bs.sort(function (a, b) { return b - a });
  console.log(bs, "bs");
  y = bs[0];
  var count = 1;
  for (var i = 0; i < bs.length; i++) {
    if (bs[i] == bs[i + 1]) {
      count++
    }
    else {
      break
    }
  }

  //y = 32;

  // console.log(y, "y");
  if (base >= 2) {
    while (Math.pow(y, x) <= number) {
      zeros = zeros + parseInt(number / Math.pow(y, x));
      x++;
    }
    console.log(zeros)

    if (count > 1) {
      zeros = Math.floor(zeros / count)
    }
    console.log(zeros)
    return zeros;
    // your implementation
  }
}
