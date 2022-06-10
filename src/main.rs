mod atoms;
mod molecules;
mod organisms;
mod pages;
mod templates;

mod util;

pub(crate) mod context;

// Example
use bounce::BounceRoot;
use yew::prelude::*;

use crate::pages::login::Login;

#[function_component(App)]
fn app() -> Html {
	html! {
		<BounceRoot>
			<Login />
		</BounceRoot>
	}
}

fn main() {
	wasm_logger::init(wasm_logger::Config::default());

	yew::Renderer::<App>::new().render();
}
