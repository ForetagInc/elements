import { FC, useState } from 'react';

interface ICheckboxProps {
	label: string;

	hideLabel?: boolean;

	/**
	* Toggle the checkbox's value and visually.
	*/
	checked: boolean;

	disabled?: boolean;
}

export const Checkbox: FC<ICheckboxProps> = ({ label, hideLabel, checked, ...props }) => {
	const [checkedState, setChecked] = useState(checked);

	return (
		<label>
			<input
				type='checkbox'
				checked={checkedState}
				onChange={() => { setChecked(current => !current) }}
				{...props}
			/>
			<p className={`${hideLabel && 'hide'}`}>{label}</p>
		</label>
	);
};

Checkbox.defaultProps = {
	checked: false,
	hideLabel: false,
};

Checkbox.displayName = 'Checkbox';