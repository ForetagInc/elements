use chrono::Utc;
use std::ops::{Mul, Neg};
use yew::prelude::*;

use crate::atoms::notification::{Notification, NotificationProps};

#[derive(Properties, Clone, PartialEq)]
pub struct NotificationsProps {
	pub notifications: Vec<NotificationProps>,
}

#[function_component(Notifications)]
pub fn notifications(props: &NotificationsProps) -> Html {
	html! {
		<div class={
			classes!(
				String::from("abs top:16 right:32 untouchable"),
			)
		}>
			{
				vec!["Sam","Bob","Ray"].into_iter().enumerate().map(| (i, notification) | {

					let z_index: i32 = i as i32;
					let scale: f32 = 1_f32 - (0.1).mul((z_index - 1) as f32);

					html! {
						<Notification
							key={i}
							class={
								classes!(
									format!(
										"abs top:{} right:0 z-index:{} scale({})",
										i * 10,
										z_index.neg(),
										scale,
									)
								)
							}
							icon="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png"
							media="https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg"
							app="Discord"
							title="itsezc - Chiru B"
							subject="Example iOS esec notification with Master CSS"
							datetime={Utc::now()}
							more="10 more notifications"
						/>
					}
				}).collect::<Html>()
			}
		</div>
	}
}
