use yew::prelude::*;

use crate::atoms::{button::Button, input::Input};

#[function_component(Login)]
pub fn login() -> Html {
	html! {
		<div class="d:flex h:100vh m:8 ai:center jc:center">
			<div class="b:1|solid|gray-80 m:14 r:10 px:16 py:8 min-w:360">
				<div class="t:center mb:16">
					<h1 class="mb:8 f:24">{"Sign In"}</h1>
					<p class="">{"Use your Whole Account"}</p>
				</div>

				<div class="my:10">
					<Input
						label="ID"
						placeholder="XYZ123456789"
					/>
				</div>

				<div class="d:flex jc:space-between gap:10 my:10">
					<Button
						text="Create account"
						borderless={true}
						class={classes!("t:left")}
					/>

					<Button
						text="Login"
						bold={true}
						uppercase={true}
						rounded={true}
						disabled={true}
					/>
				</div>
			</div>
		</div>
	}
}
