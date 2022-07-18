import { FC, PropsWithChildren } from 'react';
import Stitch from 'stitchtail';

import { Tr, Th, Td } from './';

// 🎨 Classes
const classes = Stitch<{}>({
	base: 'r:4 border-collapse:collapse f:14'
});

export const Table: FC<PropsWithChildren> = ({ children, ...props }) => {
	return (
		<table className={classes(props)}>
			<tbody>
				<Tr>
					<Th empty />
					<Th title='Type' />
					<Th title='Key' />
					<Th title='Description' />
					<Th title='Assignee' />
					<Th title='Priority' />
					<Th title='Status' />
					<Th title='Epic Link' />
					<Th title='Updated date' />
					<Th title='Due date' />
				</Tr>
				<Tr>
					<Td empty />
					<Td>Test</Td>
					<Td>Test</Td>
					<Td>Test</Td>
					<Td>Test</Td>
					<Td>Test</Td>
					<Td>Test</Td>
					<Td>Test</Td>
					<Td>Test</Td>
					<Td>Test</Td>
				</Tr>
			</tbody>
			{children}
		</table>
	)
};

Table.displayName = 'Table';