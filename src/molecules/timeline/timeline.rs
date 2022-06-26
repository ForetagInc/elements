use std::rc::Rc;
use yew::prelude::*;

use crate::molecules::TimelineStep;

#[derive(Clone, PartialEq, Properties)]
pub struct TimelineProps {
	pub children: ChildrenWithProps<TimelineStep>,
}

#[function_component]
pub fn Timeline(props: &TimelineProps) -> Html {
	let last_index = props.children.len() as i8;

	let steps = props.children.iter().enumerate().map(|(i, mut step)| {
		let mut props = Rc::make_mut(&mut step.props);
		props.step = Some((i as i8) + 1);
		props.last = last_index == props.step.unwrap();
		props.children = props.children.clone();
		step
	});

	html! {
		<ol class={
			classes!(
				String::from("flex flex:column gap:10")
			)
		}>
			{
				for steps
			}
		</ol>
	}
}
