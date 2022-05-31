mod atoms;
mod molecules;
mod organisms;
mod pages;
mod templates;

pub(crate) mod context;

use yew::prelude::*;

use crate::pages::login::Login;

#[function_component]
fn App() -> Html {
	html! {
		<Login />
	}
}

fn main() {
	wasm_logger::init(wasm_logger::Config::default());

	yew::Renderer::<App>::new().render();
}
