module.exports = {
	'stories': [
		'../packages/**/*.stories.@(js|ts|tsx|mdx)',
		'../docs/**/*.stories.@(js|ts|tsx|mdx)'
	],
	'addons': [
		'@storybook/addon-docs',
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		'@storybook/addon-actions',
		'@storybook/addon-backgrounds',
		'@storybook/addon-controls',
		'@storybook/addon-interactions',
		'@storybook/addon-measure',
		'@storybook/addon-outline',
		'@storybook/addon-viewport',
		'@storybook/addon-toolbars',
		// Defaults
		'@storybook/addon-essentials',
	],
	'framework': '@storybook/react',
	'core': {
		'builder': '@storybook/builder-webpack5',
		disableTelemetry: true
	},
	features: {
		storyStoreV7: true,
		interactionsDebugger: true,
		postcss: false,
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
}