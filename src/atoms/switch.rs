use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct SwitchProps {
	#[prop_or(false)]
	pub disabled: bool,
	#[prop_or(false)]
	pub toggled: bool,
	#[prop_or_default]
	pub label: String,
}

#[function_component]
pub fn Switch(props: &SwitchProps) -> Html {
	html! {
		<>
			<label class="inline-flex gap:10 ai:center">
				<input
					class="hide bg:blue-50:checked+svg opacity:.7[disabled]+svg
					filter:none[disabled]+svg>rect 
					width:34:active:not([disabled])+svg>rect 
					cursor:no-drop[disabled]+svg
					translateX(18):checked+svg>rect
					translateX(4):checked:active:not([disabled])+svg>rect"

					type="checkbox"
					checked={props.toggled}
				/>
				<svg class="w:42 h:24 bg:fade-90 bg:gray-20@dark rounded ~background-color|.3s cursor:pointer">
					<rect
						x="2"
						y="3"
						rx="14"
						width="18"
						height="18"
						class="~transform|.1s|ease-out,width|.1s|ease-out"
						fill="#fff"
					/>
				</svg>
				<p>{props.label.clone()}</p>
			</label>
		</>
	}
}
