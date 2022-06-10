use web_sys::window;

#[derive(Clone, Default, PartialEq)]
pub enum Scheme {
	#[default]
	Light,
	Dark,
}

impl Scheme {
	pub fn init(&self) {
		let win = window().expect("Window is not present");

		let document = win.document().expect("Document is not present");

		let storage = win
			.local_storage()
			.expect("localStorage is not available")
			.unwrap();

		let class_list = document
			.document_element()
			.expect("Document class list is not present")
			.class_list();

		let storage_theme = storage.get_item("theme").unwrap();

		let is_dark = match storage_theme {
			None => {
				storage.set_item("theme", "dark").unwrap();
				false
			}
			Some(x) => {
				x == *"dark"
					|| win
						.match_media("(prefers-color-scheme: dark)")
						.unwrap()
						.unwrap()
						.matches()
			}
		};

		if !is_dark {
			class_list.toggle("light").unwrap();
		} else {
			class_list.toggle("dark").unwrap();
		}
	}
}
