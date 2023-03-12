Function.prototype.defer = function(ms) {
	setTimeout(this, ms);
}

function f(a, b) {
  console.log("Hi");
}

f.defer(1000);