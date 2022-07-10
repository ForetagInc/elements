import { FC, PropsWithChildren, useState } from 'react';

interface ICollapseProps {
	/**
	 * Visually open the Collapse
	 */
	open: boolean;
}

export const Collapse: FC<PropsWithChildren<ICollapseProps>> = (props) => {
	const [collapsed, setCollapse] = useState(props.open);

	return (
		<div>
			<button
				onClick={e => {
					e.preventDefault();
					setCollapse(current => !current);
				}}
				className='b:1|solid|gray-70 p:6 r:4'
			>
				Collapse
			</button>
			<div
				className={`block overflow:hidden mt:10px bg:gray-72
						${collapsed ? 'max-h:99em ~max-height|200ms|ease-in-out'
						: 'max-h:0 ~max-height|100ms|cubic-bezier(.4,0,.2,1)'}`}
			>
				{props.children}
			</div>
		</div>
	)
};

Collapse.defaultProps = {
	open: false
};
