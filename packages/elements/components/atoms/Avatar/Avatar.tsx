import { FC, useContext } from 'react';
import { TSize, ThemeContext } from '../../../Theme';
import Stitch from 'stitchtail';

export interface IAvatarProps {
	/**
	 * Name of the Avatar person
	 */
	name: string;

	/**
	 * Show name inconjunction to the avatar
	 */
	showName: boolean;

	/**
	 * Avatar image to display
	 */
	image?: string;

	/**
	 * Placeholder text in place of an image
	 */
	placeholder?: string;

	/**
	 * Visually make the avatar container circular
	 */
	circular: boolean;

	/**
	 * Size of the avatar container
	 */
	size: TSize;
};

const classes = Stitch<IAvatarProps>({
	base: `flex jc:center ai:center h:56 bg:gray-90 box-shadow:0px|0px|15px|5px|rgba(0,0,0,0.1):hover
	cursor:pointer r:4`,

	variants: {
		circular: 'rounded'
	}
});

export const Avatar: FC<IAvatarProps> = (props) => {
	const { theme } = useContext(ThemeContext);

	console.log('Theme', theme);

	return (
		<div className='flex ai:center gap:10'>
			<div
				className={classes(props)}
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
			{
				props.showName &&
				<p>{props.name}</p>
			}
		</div>
	)
};

Avatar.defaultProps = {
	size: 'md',
	circular: false,
	showName: false
};

Avatar.displayName = 'Avatar';