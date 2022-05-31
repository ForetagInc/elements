use std::ops::Not;
use wasm_bindgen::JsCast;
use web_sys::{EventTarget, HtmlInputElement};
use yew::prelude::*;

/// Props for [`Input`]
#[derive(PartialEq, Properties)]
pub struct InputProps {
	#[prop_or_default]
	pub class: Option<Classes>,
	#[prop_or_default]
	pub label_class: Option<Classes>,
	#[prop_or_default]
	pub placeholder: Option<AttrValue>,
	#[prop_or_default]
	pub label: String,
	#[prop_or_default]
	pub r#type: Option<AttrValue>,
}

#[function_component]
pub fn Input(props: &InputProps) -> Html {
	// Focused
	let is_focused_handle = use_state(|| false);
	let is_focused = *is_focused_handle;

	// Input
	let input_value_handle = use_state(String::default);
	let input_value = (*input_value_handle).clone();

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

	let on_change = {
		Callback::from(move |e: Event| {
			let target: Option<EventTarget> = e.target();
			let input = target.and_then(|t| t.dyn_into::<HtmlInputElement>().ok());

			if let Some(input) = input {
				input_value_handle.set(input.value());
			}
		})
	};

	let placeholder = if is_focused.not() {
		AttrValue::from(props.label.clone())
	} else {
		props
			.placeholder
			.clone()
			.unwrap_or_else(|| AttrValue::from(""))
	};

	html! {
		<div class="rel block">
			<input
				id={props.label.clone()}
				onfocus={on_focus}
				onfocusout={on_unfocus}
				onchange={on_change}
				value={input_value.clone()}
				type={props.r#type.clone()}
				class={classes!(
					"b:1|solid|gray-80", "r:8", "p:8", "outline:none", "w:full", "mt:8", "mb:16",
					&props.class
				)}
				placeholder={placeholder}
			/>
			<label
				for={props.label.clone()}
				class={
					classes!(
						"abs", "top:-2", "left:10", "bg:white", "px:4",
						is_focused.not().then(|| Some("d:none")),
						(!input_value.is_empty()).then(|| Some("d:block")),
						&props.label_class
					)
				}
			>
				{&props.label}
			</label>
		</div>
	}
}
