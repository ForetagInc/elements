import { FC } from 'react';
import { INotificationProps, Notification } from './Notification';

interface INotificationManagerProps {
	x: XPosition;
	y: YPosition;
	notifications: INotificationProps[];
}

export const NotificationManager: FC<INotificationManagerProps> = ({ notifications }) => {
	return (
		<div className='abs top:16 right:32'>
			<i
				className='abs h:20 w:20 z-index:10 t:center top:-10 right:-16 bg:gray-80 bd:blur(12px) round cursor:pointer ri-close-line'
			/>
			<div>
				{
					notifications.map((notification, index) => {

						let scale = 1 - 0.1 * (index - 1);

						return <Notification
							key={index}
							{...notification}
							className={
								`abs top:${index * 10} right:0 z-index:${-Math.abs(index)} scale(${scale})`
							}
						/>
					})
				}
			</div>
		</div>
	)
};

NotificationManager.defaultProps = {
	x: 'right',
	y: 'top'
};

NotificationManager.displayName = 'NotificationManager';