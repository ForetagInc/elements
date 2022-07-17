import { FC, createContext, PropsWithChildren } from 'react';

export type Variant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

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
	name: 'screen' | 'xr';
};

export const ThemeContext = createContext<IThemeContext>({
	name: 'xr'
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<ThemeContext.Provider value={{
			name: 'screen'
		}}>
			{children}
		</ThemeContext.Provider>
	)
}