#[derive(Clone, Default, PartialEq)]
pub enum Theme {
	#[default]
	Web,
	Augmented,
}

#[derive(Clone, PartialEq)]
pub struct Elements {
	theme: Theme,
}
