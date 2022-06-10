use serde::{Deserialize, Serialize};

#[derive(Default, Clone, PartialEq, Serialize, Deserialize)]
pub enum XAlignment {
	#[default]
	Left,
	Center,
	Right,
}

#[derive(Default, Clone, PartialEq, Serialize, Deserialize)]
pub enum YAlignment {
	#[default]
	Top,
	Center,
	Bottom,
}
