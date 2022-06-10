use crate::util::{
	align::{XAlignment, YAlignment},
	Scheme, Theme,
};

#[derive(Clone, Default, PartialEq)]
pub struct ElementsContext {
	pub theme: Theme,
	pub scheme: Scheme,
	pub x_align: XAlignment,
	pub y_align: YAlignment,
}

impl ElementsContext {
	pub fn new(theme: Theme, scheme: Scheme) -> Self {
		let ctx = ElementsContext {
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
