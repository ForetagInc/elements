use crate::util::{Scheme, Theme};

#[derive(Clone, Default, PartialEq)]
pub struct ElementsContext {
	pub theme: Theme,
	pub scheme: Scheme,
}
