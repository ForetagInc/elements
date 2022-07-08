import * as React from 'react';

export interface IAvatarProps {
	name: string;
	image: string;

	placeholder: string;
	circular: boolean;
};

export const Avatar: React.FC<IAvatarProps> = (props) => {
	return (
		<div
			className={`
				flex jc:center ai:center w:56 h:56 bg:gray-90 box-shadow:0px|0px|15px|5px|rgba(0,0,0,0.1):hover
				cursor:pointer
				${props.circular ? 'rounded' : 'r:4'}
			`}
		>
			{
				props.image ?
					<img
						className='h:full r:4'
						src={props.image}
						alt={`${props.name} Avatar`}
					/> :
					props.placeholder ?
						<p className='f:bold f:gray-40'>{props.placeholder}</p> :
						<i className='ri-user-fill f:gray-74 f:20' />
			}
		</div>
	)
}