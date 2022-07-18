import { FC, PropsWithChildren } from 'react';
import Stitch from 'stitchtail';

// 🎨 Classes
const classes = Stitch<{}>({
	// base: 'b:1|solid|gray-20'
});

export const Tr: FC<PropsWithChildren> = ({ children, ...props }) => {
	return <tr className={classes(props)}>
		{children}
	</tr>
}