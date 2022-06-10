use chrono::{DateTime, Utc};
use yew::prelude::*;

use crate::context::ElementsContext;

#[derive(Properties, Clone, PartialEq)]
pub struct NotificationProps {
	#[prop_or_default]
	pub icon: String,
	#[prop_or_default]
	pub app: String,
	#[prop_or_default]
	pub title: String,
	pub subject: Option<String>,
	#[prop_or_default]
	pub media: String,
	pub datetime: DateTime<Utc>,
	#[prop_or_default]
	pub more: String,
}

#[function_component(Notification)]
pub fn notification(props: &NotificationProps) -> Html {
	let context = use_context::<ElementsContext>().expect("No elements context found");

	html! {
		<div class={
			classes!(
				// Dark mode
				"bg:gray-20@dark",
				String::from("abs top:10 right:14"),
				String::from("r:10 bg:gray-90 bd:blur(6px) min-w:360 p:10|20 f:14 untouchable"),
				"box-shadow:0px|0px|15px|5px|rgba(0,0,0,0.1)"
			)
		}>
			<div class="flex jc:space-between ai:center my:4 f:12 f:gray-50 mb:8">
				<div class="flex ai:center gap:10">
					<img
						alt={format!("{} Icon", &props.app)}
						src={props.icon.clone()}
						class="h:18"
					/>
					<p class="uppercase f:semibold">{&props.app}</p>
				</div>
				<p>{"3m ago"}</p>
			</div>
			<div class="flex jc:space-between">
				<div>
					<b class="f:semibold">{&props.title}</b>
					<p>{props.subject.clone().unwrap_or_else(|| "".to_string())}</p>
					{
						if !props.more.is_empty() {
							html! {
								<p class="mt:8 f:12 f:gray-50">{&props.more}</p>
							}
						} else {
							html! {}
						}
					}
				</div>
				{
					if !props.media.is_empty() {
						html! {
							<img
								class="w:36 h:36 r:6"
								src={props.media.clone()}
								alt={format!("Image from {}", &props.title)}
							/>
						}
					} else {
						html! {}
					}
				}
			</div>
		</div>
	}
}
