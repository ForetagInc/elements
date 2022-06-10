use crate::context::ElementsContext;

use yew::prelude::*;

#[derive(Clone, Properties, PartialEq)]
pub struct CardProps {
	pub children: Children,

	#[prop_or(false)]
	pub loading: bool,
}

#[function_component(Card)]
pub fn card(props: &CardProps) -> Html {
	let context = use_context::<ElementsContext>().expect("No elements context found");

	html! {
		<div
			class={
				classes!(
					"r:10",
					"box-shadow:8|8|3|gray-57",
					props.loading.then(|| Some("gradient_rainbow"))
				)
			}
		>
			<div class={
				classes!(
					"b:1|solid|gray-86",
					"r:10",
					"px:16",
					"py:8",
					"m:2",
					"min-w:360",
					"bg:white"
				)
			}>
				{props.children.clone()}
			</div>
		</div>
	}
}
