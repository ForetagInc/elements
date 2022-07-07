import * as React from 'react';

interface IButtonProps {
	text: String
}

export const Button: React.FC<IButtonProps> = ({
	text
}) => {
	return (
		<div>
			{text}
		</div>
	);
}