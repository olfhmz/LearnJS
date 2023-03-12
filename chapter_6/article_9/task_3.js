function debounce(f, ms) {
	let timer = false;

	return function() {
		if (timer) return;

		f.apply(this, arguments);
		timer = true;
		setTimeout(() => timer = false, ms);
	};
}