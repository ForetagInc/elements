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
