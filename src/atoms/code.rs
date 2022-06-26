use yew::prelude::*;

#[function_component]
pub fn Code() -> Html {
	html! {
		<pre class="r:8 bg:gray-20 p:24 f:white">
			<code class="elements-code_rust">
				{"cargo install elements"}
			</code>
		</pre>
	}
}
