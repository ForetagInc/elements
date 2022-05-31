use yew::prelude::*;

#[derive(Properties, PartialEq)]
pub struct ButtonProps {
	pub text: String,
	pub rounded: Option<bool>,
	pub fluid: Option<bool>,
}

#[function_component(Button)]
pub fn button(props: &ButtonProps) -> Html {
	html! {
		<button
			class="b:1|solid|gray-78 p:10|15 f:14|semibold r:4
				outline:none w:full
				{bg:gray-80}:hover"
		>
			{&props.text}
		</button>
	}
}
