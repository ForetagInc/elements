import { Stitch as stitch } from './stitch';

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ITheme {
	name: string;
	sizes?: {
		[S in TSize]?: number;
	}
}

export const createTheme = (config: ITheme) => {
	return () => {
		stitch
	}
}

// Test
const x = createTheme({
	name: 'screen',
	sizes: {
		xs: 48,
		md: 56,
		lg: 64,
		xl: 72,
		'2xl': 84
	}
})

// Usage
// const classes = Stitch<IAvatarProps>((theme, variants) => ({
// 	base: `flex jc:center ai:center h:${theme.space[variants.size]} bg:gray-90 box-shadow:0px|0px|15px|5px|rgba(0,0,0,0.1):hover
// 	cursor:pointer r:4`,

// 	variants: {
// 		circular: 'rounded'
// 	}
// }));