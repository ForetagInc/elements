import * as React from 'react';

interface IRadioProps {
	label?: string;

	/**
	* Visually and functionally set the Radio input to checked.
	*/
	checked: boolean;

	/**
	* Visually and functionally disable the Radio input.
	*/
	disabled: boolean;
};

export const Radio: React.FC<IRadioProps> = (props) => {
	const [checked, setChecked] = React.useState(props.checked);

	return (
		<div className='flex'>
			<input
				id='hs-checked-radio'
				type='radio'
				name='hs-default-radio'
				className='shrink-0 mt:0.5 b:gray-20 rounded t:blue-40 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
				onChange={() => { setChecked(current => !current); }}
				checked={checked}
				disabled={props.disabled}
			/>
			<label htmlFor='hs-checked-radio' className='t:14 t:gray-20 ml:8'>{props.label}</label>
		</div>
	)
};

Radio.defaultProps = {
	checked: false,
	disabled: false
};

Radio.displayName = 'Radio';