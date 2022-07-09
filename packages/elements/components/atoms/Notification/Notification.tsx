import * as React from 'react';

export interface INotificationProps {
	app: string;
	title: string;
	subject?: string;
	icon: string;
	media: string;
	more: string;
}

export const Notification: React.FC<INotificationProps> = (props) => {
	return (
		<div className='bg:gray-20@dark r:10 bg:gray-90 bd:blur(6px) w:360 p:10|20 f:14 box-shadow:0px|0px|15px|5px|rgba(0,0,0,0.1)'>
			<div className='flex jc:space-between ai:center mt:4 mb:8 f:12 f:gray-50'>
				<div className='flex ai:center gap:10'>
					<img
						alt={`${props.app} Icon`}
						src={props.icon}
						className='h:18'
					/>
					<p className='uppercase f:semibold'>{props.app}</p>
				</div>
				<p>{'3m ago'}</p>
			</div>
			<div className='flex jc:space-between'>
				<div>
					<b className='f:semibold'>{props.title}</b>
					<p className='t:ellipsis w:90% white-space:nowrap overflow:hidden'>{props.subject}</p>
					{props.more && <p className='mt:8 f:12 f:gray-50'>{props.more}</p>}
				</div>
				{props.media &&
					<img
						className='w:36 h:36 r:6'
						src={props.media}
						alt={`Image from ${props.title}`}
					/>
				}
			</div>
		</div>
	)
};

Notification.defaultProps = {
	app: 'App',
	icon: 'https://raw.githubusercontent.com/ForetagInc/branding/master/Foretag/Sirocco/logos/Default.svg',
	media: 'https://image-placeholder.com/images/actual-size/57x57.png',
	title: 'Title',
	subject: 'Subject line goes here',
	more: '3 more notifications'
};