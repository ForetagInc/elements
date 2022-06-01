use super::{Scheme, Theme};
use yew::Classes;

#[derive(Clone, PartialEq)]
pub struct Variant {
	name: String,
	theme: Theme,
	scheme: Scheme,
	class: Classes,
}
