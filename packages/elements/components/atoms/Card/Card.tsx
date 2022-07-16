import { FC, PropsWithChildren } from 'react';

interface ICardProps {
	title?: string;
	titleLogo?: string;

	className?: string;
};

export const Card: FC<PropsWithChildren<ICardProps>> = (props) => {
	return <div className={`b:1|solid|gray-86 r:8 ${props.className}`}>
		{
			/** Title */
			props.title && <div className='flex bb:1|solid|gray-86 p:8'>
				{
					props.titleLogo &&
					<img
						src={props.titleLogo}
						alt={props.title + ' logo'}
						className='w:24 mr:10'
					/>
				}
				{props.title}
			</div>
		}
		<div className='p:8'>
			{props.children}
		</div>
	</div>
};

Card.displayName = 'Card';