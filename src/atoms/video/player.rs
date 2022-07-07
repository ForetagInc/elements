use std::ops::Not;
use yew::prelude::*;

#[derive(Eq, PartialEq)]
pub struct VideoSource {
	pub src: String,
	pub label: String,
}

#[derive(PartialEq, Eq, Properties)]
pub struct VideoProps {
	pub source: Vec<VideoSource>,
	#[prop_or(false)]
	pub autoplay: bool,
	#[prop_or(false)]
	pub muted: bool,
	#[prop_or(false)]
	pub fullscreen: bool,
}

const HQ: &str = "ri-hq";
const HD: &str = "ri-hd";
const FOURK: &str = "ri-4k";

#[function_component]
pub fn Video(props: &VideoProps) -> Html {
	let video_ref = use_node_ref();
	let paused = use_state(|| false);

	let toggle_pause = {
		let paused = paused.clone();
		Callback::from(move |_| paused.set(paused.not()))
	};

	html! {
		<div class="rel f:white/.8 w:100% h:100%">
			<video
				ref={video_ref}
				autoplay={props.autoplay}
				muted={props.muted}
				class="w:full h:full bg:black"
			>
				<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
			</video>
			<div class="flex abs bottom:6 f:24 bd:blur(6px) bg:gray-40/.5 r:8 p:4|8 gap:10 w:full">
				<i class="ri-rewind-mini-line"></i>
				{
					if *paused {
						html! {
							<i class="ri-play-line" onclick={toggle_pause}></i>
						}
					} else {
						html! {
							<i class="ri-pause-line"  onclick={toggle_pause}></i>
						}
					}
				}
				<i class="ri-speed-mini-line"></i>
				<i class="ri-4k-line"></i>
				<i class="ri-closed-captioning-line"></i>
			</div>
		</div>
	}
}
