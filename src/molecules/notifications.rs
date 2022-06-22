use yew::prelude::*;

use crate::atoms::notification::{Notification, NotificationProps};

#[derive(Properties, Clone, PartialEq)]
pub struct NotificationsProps {
	notifications: Vec<NotificationProps>,
}

#[function_component(Notifications)]
pub fn notifications(props: &NotificationsProps) -> Html {
	html! {
		<div>
			{
				&props.notifications.into_iter().map(| notification | {
					html! {
						<Notification
							{..notification}
						/>
					}
				})
			}
		</div>
	}
}
