use crate::util::{
	align::{XAlignment, YAlignment},
	Scheme, Theme,
};

use bounce::*;
use gloo::storage::{LocalStorage, Storage};
use serde::{Deserialize, Serialize};

#[derive(Atom, Default, Clone, PartialEq, Serialize, Deserialize)]
#[bounce(observed)]
pub struct Context {
	pub theme: Theme,
	pub scheme: Scheme,
	pub x_align: XAlignment,
	pub y_align: YAlignment,
}

impl Context {
	pub fn new(theme: Theme, scheme: Scheme) -> Self {
		let ctx = Context {
			theme,
			scheme,
			x_align: XAlignment::Right,
			y_align: YAlignment::Top,
		};

		ctx.init();

		ctx
	}

	pub fn init(&self) {
		self.scheme.init();
	}
}

// impl Default for Context {
// 	fn default() -> Self {
// 		let stored = LocalStorage::get("app").unwrap();

// 		match stored {
// 			Ok(_) => {
// 				let config: Context = serde_json::from_str(&stored.unwrap()).unwrap();

// 				Self { ..config }
// 			}
// 			Err(_) => Context::new(Theme::Screen, Scheme::Light),
// 		}
// 	}
// }

impl Observed for Context {
	fn changed(self: std::rc::Rc<Self>) {
		LocalStorage::set("app", &*self).expect("Failed to set Context");
	}
}
