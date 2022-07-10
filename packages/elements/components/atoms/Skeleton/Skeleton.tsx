import * as React from 'react';

interface ISkeletonProps {
	animated: boolean;
}

export const Skeleton: React.FC<ISkeletonProps> = (props) => {
	return (
		<div
			className={`
				${props.animated && '@pulse|1s|infinite'}
			`}
		>
			<div className='h:16 bg:gray-90 rounded w:40%' />

			<ul className='flex flex:column gap:10 mt:16'>
				<li className='w:full h:16 bg:gray-90 rounded' />
				<li className='w:full h:16 bg:gray-90 rounded' />
				<li className='w:full h:16 bg:gray-90 rounded' />
				<li className='w:full h:16 bg:gray-90 rounded' />
			</ul>
		</div>
	)
};

Skeleton.defaultProps = {
	animated: true
};

Skeleton.displayName = 'Skeleton';