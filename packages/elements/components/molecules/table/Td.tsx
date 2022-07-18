import { FC, PropsWithChildren } from 'react';
import Stitch from 'stitchtail';

interface ITdProps {
	empty?: boolean;
}

// 🎨 Classes
const classes = Stitch<ITdProps>({
	base: 'b:1|solid|gray-82 p:6|8',
	variants: {
		empty: 'bg:gray-92 min-w:12'
	}
});

export const Td: FC<PropsWithChildren<ITdProps>> = ({ children, ...props }) => {
	return (
		<td className={classes(props)}>
			{children}
		</td>
	)
};

Td.defaultProps = {
	empty: false
};

Td.displayName = 'Td';