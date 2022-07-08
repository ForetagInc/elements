import '@master/css';
import '@master/normal.css';
import 'remixicon/fonts/remixicon.css';

// 👉 Viewports

const viewports = {
	macBookPro13: {
		name: 'Macbook Pro 13"',
		styles: {
			width: '1600px',
			height: '2560px'
		}
	},
	macBookPro16: {
		name: 'Macbook Pro 16"',
		styles: {
			width: '1920px',
			height: '3072px'
		}
	},
	iPadAir4: {
		name: 'iPad (4th Gen)',
		styles: {
			width: '1536px',
			height: '2048px'
		}
	},
	iPhone13Pro: {
		name: 'iPhone 13 (Pro)',
		styles: {
			width: '1170px',
			height: '2532px'
		}
	},
	iPhone13ProMax: {
		name: 'iPhone 13 Pro Max',
		styles: {
			width: '1284px',
			height: '2778px'
		}
	},
	appleWatch: {
		name: 'Apple Watch',
		styles: {
			width: '396px',
			height: '484px'
		}
	}
};

// 👉 Actions

const actions = { argTypesRegex: "^on[A-Z].*" };

// 👉 Controls

const controls = {
	expanded: true,
	matchers: {
		color: /(background|color)$/i,
		date: /Date$/,
	},
};

export const parameters = {
	layout: 'centered',
	actions,
	controls,
	viewport: {
		viewports: {
			...viewports
		}
	}
};