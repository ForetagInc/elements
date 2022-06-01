use std::ops::Not;
use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct ButtonProps {
	pub text: String,

	#[prop_or(false)]
	pub disabled: bool,

	#[prop_or_default]
	pub class: Option<Classes>,

	/*
		Styling
	*/
	#[prop_or(false)]
	pub borderless: bool,
	#[prop_or(false)]
	pub rounded: bool,
	#[prop_or(false)]
	pub uppercase: bool,
	#[prop_or(false)]
	pub bold: bool,
}

#[function_component(Button)]
pub fn button(props: &ButtonProps) -> Html {
	html! {
		<button
			disabled={props.disabled}
			class={
				classes!(
					&props.class,

					&props.borderless.then(|| Some("b:none")),
					&props.borderless.not().then(|| Some("b:1|solid|gray-78 ")),

					&props.rounded.then(|| Some("r:50")),
					&props.rounded.not().then(|| Some("r:4")),

					&props.uppercase.then(|| Some("t:uppercase")),

					&props.bold.then(|| Some("f:semibold")),

					String::from("outline:none"),
					String::from("~all|100ms|ease"),
					String::from("p:10|15 f:14|semibold {bg:gray-80}:hover"),
				)
			}
		>
			{&props.text}
		</button>
	}
}
