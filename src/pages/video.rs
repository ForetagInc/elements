use yew::prelude::*;

use crate::atoms::{Video, VideoSource};

#[function_component]
pub fn VideoPage() -> Html {
	html! {
		<div class="flex jc:center ai:center h:full w:full">
			<div class="h:320 w:720">
				<Video
					source={
						vec![
							VideoSource {
								src: String::from("https://www.w3schools.com/html/mov_bbb.mp4"),
								label: String::from( "720p")
							}
						]
					}
				/>
			</div>
		</div>
	}
}
