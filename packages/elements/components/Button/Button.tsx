import * as React from 'react';

export interface IButtonProps {
	label: String
}

export const Button: React.FC<IButtonProps> = ({
	label
}) => {
	return (
		<div className={`
			r:50 b:1|solid|gray-86 t:uppercase f:semibold ~all|100ms|ease p:10|15 f:14|semibold {bg:gray-80}:hover
			cursor:pointer outline:none
		`}>
			{label}
		</div>
	);
}