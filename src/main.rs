mod atoms;
mod molecules;
mod organisms;
mod pages;
mod templates;

mod util;

pub(crate) mod context;
use context::ElementsContext;

use yew::prelude::*;

use crate::pages::login::Login;

#[function_component]
fn App() -> Html {
	let elements = ElementsContext::new(util::Theme::Screen, util::Scheme::Light);

	let context = use_memo(|_| elements, ());

	html! {
		<ContextProvider<ElementsContext> context={(*context).clone()}>
			<Login />
		</ContextProvider<ElementsContext>>
	}
}

fn main() {
	wasm_logger::init(wasm_logger::Config::default());

	yew::Renderer::<App>::new().render();
}
