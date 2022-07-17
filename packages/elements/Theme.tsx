import { FC, createContext, PropsWithChildren } from 'react';

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