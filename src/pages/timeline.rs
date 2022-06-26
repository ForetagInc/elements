use yew::prelude::*;

use crate::atoms::Code;
use crate::molecules::{Timeline, TimelineStep};

#[function_component(TimelinePage)]
pub fn timeline() -> Html {
	html! {
		<div class="m:50">
			<Timeline>
				<TimelineStep>
					<h3 class="f:semibold f:14">{"Install Elements"}</h3>
					<p class="mt:8 mb:16">
						{"Install"}<code>{"elements"}</code> {"via crates"}
					</p>
					<Code />
				</TimelineStep>
				<TimelineStep>
					<div>{"vrishin"}</div>
				</TimelineStep>
				<TimelineStep>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
					<div>{"sid"}</div>
				</TimelineStep>
				<TimelineStep>
					<div>{"shriyans"}</div>
				</TimelineStep>
				<TimelineStep>
					<div>{"ken"}</div>
				</TimelineStep>
			</Timeline>
		</div>
	}
}
