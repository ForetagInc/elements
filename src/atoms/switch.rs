use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct SwitchProps {
	checked: Option<bool>,
}

#[function_component]
pub fn Switch(props: &SwitchProps) -> Html {
	html! {
		<>
			<label class="inline-flex align-items:center ml:10">
				<input
					class="hide bg:blue-50:checked+svg opacity:.7[disabled]+svg
					filter:none[disabled]+svg>rect 
					width:34:active:not([disabled])+svg>rect 
					cursor:no-drop[disabled]+svg
					translateX(32):checked+svg>rect
					translateX(13):checked:active:not([disabled])+svg>rect"
					type="checkbox"
					checked={props.checked.unwrap()}
				/>
				<svg class="width:64 height:32 bg:fade-90 bg:gray-20@dark rounded ~background-color|.3s cursor:pointer">
					<rect
						x="2"
						y="2"
						rx="14"
						width="28"
						height="28"
						class="~transform|.1s|ease-out,width|.1s|ease-out"
						fill="#fff"
					/>
				</svg>
			</label>
		</>
	}
}
