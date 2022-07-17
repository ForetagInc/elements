import * as React from 'react';

export interface IButtonProps {
	label: string,

	/**
	* Visually and functionally disable the Button.
	*/
	disabled: boolean,

	/**
	* Uppercase the text inside the Button.
	*/
	uppercase: boolean,

	/**
	* Bolden the text inside the Button.
	*/
	bold: boolean,

	/**
	* Remove the border of the Button
	*/
	borderless: boolean,

	/**
	* Visually make the button like a pill
	*/
	rounded: boolean,
}

export const Button: React.FC<IButtonProps> = (props) => {
	return (
		<div
			className={`
				r:50 b:1|solid|gray-86 f:semibold ~all|100ms|ease p:10|15 f:14|semibold {bg:gray-80}:hover
				outline:none
				${props.disabled ? 'cursor:not-allowed' : 'cursor:pointer'}
				${props.uppercase && 't:uppercase'}
			`}
		>
			{props.label}
		</div>
	);
};

Button.defaultProps = {
	label: 'Button',
	disabled: false,
	uppercase: false,
	borderless: false,
	rounded: false,
	bold: false,
};

Button.displayName = 'Button';