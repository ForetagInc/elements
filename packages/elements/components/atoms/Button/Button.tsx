import * as React from 'react';
import Stitch from 'stitchtail';

interface IButtonProps {
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

// 🎨 Classes
const classes = Stitch<IButtonProps>({
	base: 'r:50 b:1|solid|gray-86 f:semibold ~all|100ms|ease p:10|15 f:14|semibold {bg:gray-80}:hover outline:none',

	variants: {
		uppercase: 't:uppercase',
		disabled: 'cursor:not-allowed',
		bold: 'f:bold'
	},
});

export const Button: React.FC<IButtonProps> = (props) => {
	return (
		<div className={classes(props)}>
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