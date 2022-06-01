mod atoms;
mod molecules;
mod organisms;
mod pages;
mod templates;

mod util;

pub(crate) mod context;
use context::ElementsContext;

use std::rc::Rc;
use yew::prelude::*;

use crate::pages::login::Login;

#[function_component]
fn App() -> Html {
	let context = use_memo(
		|_| ElementsContext {
			theme: util::Theme::Screen,
		},
		(),
	);

	html! {
		<ContextProvider<Rc<ElementsContext>> context={context}>
			<Login />
		</ContextProvider<Rc<ElementsContext>>>
	}
}

fn main() {
	wasm_logger::init(wasm_logger::Config::default());

	yew::Renderer::<App>::new().render();
}
