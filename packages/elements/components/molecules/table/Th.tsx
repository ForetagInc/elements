import { FC } from 'react';
import Stitch from 'stitchtail';

interface IThProps {
	title?: string;
	empty?: boolean;
}

// 🎨 Classes
const classes = Stitch<IThProps>({
	base: 'b:1|solid|gray-82 bg:gray-92 r:8 p:4|8',
	variants: {
		empty: 'content:\'\' b:none bg:transparent'
	}
});

export const Th: FC<IThProps> = ({ title, ...props }) => {
	return <th className={classes(props)}>
		{title}
	</th>
};

Th.displayName = 'Th';