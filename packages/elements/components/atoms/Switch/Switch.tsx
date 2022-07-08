import * as React from 'react';

export interface ISwitchProps {
	/**
	* Visually and functionally disable the Switch.
	*/
	disabled: boolean;

	/**
	* Toggle the checkbox's value and visually.
	*/
	toggled: boolean;
	label?: string;
}

export const Switch: React.FC<ISwitchProps> = (props) => {
	const [toggled, setToggle] = React.useState(props.toggled);

	return (
		<label className='inline-flex gap:10 ai:center'>
			<input
				className='hide bg:blue-50:checked+svg opacity:.7[disabled]+svg
					filter:none[disabled]+svg>rect 
					width:34:active:not([disabled])+svg>rect 
					cursor:no-drop[disabled]+svg
					translateX(18):checked+svg>rect
					translateX(4):checked:active:not([disabled])+svg>rect'

				type='checkbox'
				checked={toggled}
				onChange={e => {
					e.preventDefault();
					setToggle(current => !current);
				}}
				disabled={props.disabled}
			/>
			<svg className='w:42 h:24 bg:fade-90 bg:gray-20@dark rounded ~background-color|.3s cursor:pointer'>
				<rect
					x='2'
					y='3'
					rx='14'
					width='18'
					height='18'
					className='~transform|.1s|ease-out,width|.1s|ease-out'
					fill='#fff'
				/>
			</svg>
			<p>{props.label}</p>
		</label>
	)
};

Switch.defaultProps = {
	disabled: false,
	toggled: false
}