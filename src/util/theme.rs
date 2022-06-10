use serde::{Deserialize, Serialize};

#[derive(Clone, Default, PartialEq, Serialize, Deserialize)]
pub enum Theme {
	#[default]
	Screen,
	Augmented,
}
