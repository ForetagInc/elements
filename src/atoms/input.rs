use wasm_bindgen::JsCast;
use web_sys::{EventTarget, HtmlInputElement};
use yew::prelude::*;

#[derive(PartialEq, Properties, Clone)]
pub struct InputProps {
	pub class: Option<Classes>,
	pub label_class: Option<Classes>,

	#[prop_or_default]
	pub placeholder: Option<AttrValue>,
	#[prop_or_default]
	pub label: String,
	pub r#type: AttrValue,
}

#[function_component]
pub fn Input(props: &InputProps) -> Html {
	// Focused
	let is_focused_handle = use_state(|| true);
	let is_focused = *is_focused_handle;

	// Input
	let input_value_handle = use_state(String::default);
	let input_value = (*input_value_handle).clone();

	/** Event: on_focus */
	let on_focus = {
		let is_focused_handle = is_focused_handle.clone();

		Callback::from(move |_e| {
			is_focused_handle.set(true);
		})
	};

	let on_unfocus = {
		let is_focused_handle = is_focused_handle;

		Callback::from(move |_e| {
			is_focused_handle.set(false);
		})
	};

	/** Event: on_change */
	let on_change = {
		Callback::from(move |e: Event| {
			let target: Option<EventTarget> = e.target();
			let input = target.and_then(|t| t.dyn_into::<HtmlInputElement>().ok());

			if let Some(input) = input {
				input_value_handle.set(input.value());
			}
		})
	};

	{
		use_effect_with_deps(
			move |_| {
				log::info!("Toggled: {:?}", is_focused);
				|| ()
			},
			is_focused,
		)
	}

	html! {
		<div class="rel block">
			<input
				id={props.label.clone()}
				onfocus={on_focus}
				onfocusout={on_unfocus}
				onchange={on_change}
				value={input_value}
				type={props.r#type.clone()}
				class={classes!(
					"b:1|solid|gray-80", "r:8", "p:8", "outline:none", "w:full", "mt:8", "mb:16",
					&props.class
				)}
				placeholder={props.placeholder.clone()}
			/>
			<label
				for={props.label.clone()}
				class={
					classes!(
						"abs", "top:-2", "left:10", "bg:white", "px:4", "d:none",
						is_focused.then(|| Some("d:block")),
						&props.label_class
					)
				}
			>
				{&props.label}
			</label>
		</div>
	}
}
