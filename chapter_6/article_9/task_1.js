function spy(func) {
	function wrap(...args) {
		wrap.calls.push(args);
		return func.apply(this, args);
	}

	wrap.calls = [];
	return wrap;
}