import * as React from 'react';

export const Radio: React.FC = () => {

	return (
		<div className='flex'>
			<input
				id='hs-checked-radio'
				type='radio'
				name='hs-default-radio'
				className='shrink-0 mt:0.5 b:gray-20 rounded t:blue-40 cursor:none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800'
				checked
			/>
			<label htmlFor='hs-checked-radio' className='t:14 t:gray-20 ml:8 dark:text-gray-400'>Checked radio</label>
		</div>
	)
};

Radio.displayName = 'Radio';