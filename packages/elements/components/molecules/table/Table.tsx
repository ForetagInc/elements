import { FC, PropsWithChildren } from 'react';

export const Table: FC<PropsWithChildren> = ({ children }) => {
	return (
		<table>
			<th>Test</th>
			{children}
		</table>
	)
};

Table.displayName = 'Table';