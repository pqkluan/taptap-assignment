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
			plugins: ['react-native-reanimated/plugin'],
		};
	}

	return {
		presets: [['module:@react-native/babel-preset', { useTransformReactJSX: true }]],
		plugins: ['react-native-reanimated/plugin'
		],
	};
};
