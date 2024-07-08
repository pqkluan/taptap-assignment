module.exports = function (api) {
	api.cache(true);

	if (
		process.env.NX_TASK_TARGET_TARGET === 'build'
	) {
		return {
			presets: [
				[
					'@nx/react/babel',
					{
						runtime: 'automatic',
					},
				],
			],
		};
	}

	return {
		presets: [['module:@react-native/babel-preset', { useTransformReactJSX: true }]],
	};
};
