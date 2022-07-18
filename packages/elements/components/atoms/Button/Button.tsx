import { FC } from 'react';
import Stitch from '../../../stitch';

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


	/**
	 * Visually disables the button and shows a loading spinner.
	 */
	isLoading: boolean,
}

// 🎨 Classes
const classes = Stitch<IButtonProps>({
	base: 'r:4 b:1|solid|gray-86 ~all|100ms|ease p:10|15 f:14 {bg:gray-80}:hover outline:none',

	variants: {
		uppercase: 't:uppercase',
		disabled: 'cursor:not-allowed',
		isLoading: 'cursor:not-allowed',
		bold: 'f:bold',
		borderless: 'b:none',
		rounded: 'rounded',
	},
});

export const Button: FC<IButtonProps> = (props) => {
	return (
		<button className={classes(props)} disabled={props.disabled || props.isLoading}>
			{props.label}
		</button>
	);
};

Button.defaultProps = {
	label: 'Button',
	disabled: false,
	uppercase: false,
	borderless: false,
	rounded: false,
	bold: false,
	isLoading: false
};

Button.displayName = 'Button';