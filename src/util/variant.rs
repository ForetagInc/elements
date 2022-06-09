use super::{Scheme, Theme};
use yew::Classes;

#[derive(Clone, Default, PartialEq)]
pub struct Variant {
	name: String,
	theme: Theme,
	scheme: Scheme,
	class: Classes,
}
