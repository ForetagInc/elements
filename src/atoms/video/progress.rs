use yew::prelude::*;

#[derive(Properties, Eq, PartialEq)]
pub struct VideoProgressProps {
	#[prop_or(50)]
	pub progress: i8,
}

#[function_component]
pub fn VideoProgress(props: &VideoProgressProps) -> Html {
	let progress = use_state(|| props.progress);

	html! {
		<div>
		</div>
	}
}
