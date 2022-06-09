#[derive(Default, Clone, PartialEq)]
pub enum XAlignment {
	#[default]
	Left,
	Center,
	Right,
}

#[derive(Default, Clone, PartialEq)]
pub enum YAlignment {
	#[default]
	Top,
	Center,
	Bottom,
}
