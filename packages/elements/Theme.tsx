import { FC, createContext, PropsWithChildren } from 'react';

export type TVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
export type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const sizes = {
	sm: '1',
	md: '5',
	lg: '8',
	xl: '12',
	'2xl': '16',
	'3xl': '20',
	'4xl': '32'
};

interface IThemeContext {
	theme?: {
		name: 'screen' | 'xr';
		space?: {
			[S in TSize]?: number;
		}
	}
};

export const ThemeContext = createContext<IThemeContext>({
	theme: {
		name: 'screen',
		space: {
			sm: 32,
			md: 48
		}
	}
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeContext.Provider value={{}}>
			{children}
		</ThemeContext.Provider>
	)
}