export default function combineSelectors(selectors) {
	return state =>
		Object.entries(selectors).reduce((acc, [name, selector]) => {
			acc[name] = selector(state);
			return acc;
		}, {});
}
