use chrono::Utc;
use yew::prelude::*;

use crate::atoms::{Button, Card, Input, Notification, Switch};

#[function_component(Login)]
pub fn login() -> Html {
	html! {
		<>
			<Notification
				icon="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png"
				media="https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg"
				app="Discord"
				title="itsezc - Chiru B"
				subject="Watch this and tell me what you think"
				datetime={Utc::now()}
				more="10 more notifications"
			/>

			<div class="d:flex h:100vh m:8 ai:center jc:center">
				<Card loading={true}>
					<div class="flex flex:column ai:center jc:center my:16">
						<img
							alt="Whole logo"
							src="https://i.ibb.co/WyBNqTv/logo-draft.png"
							class="w:144 mb:32"
						/>
						<h1 class="mb:8 f:22 f:gray-72">{"Sign In"}</h1>
						<p class="">{"Use your Whole Account"}</p>
					</div>

					<div class="my:20">
						<Input
							label="ID"
							placeholder="XYZ123456789"
						/>
						<div class="flex flex:row-reverse">
							<Switch
								label="Remember me"
								toggled={true}
							/>
						</div>
					</div>

					<div class="d:flex jc:space-between gap:10 my:10">
						<Button
							text="Create account"
							borderless={true}
							class={classes!("t:left")}
						/>

						<Button
							text="Login"
							bold={true}
							uppercase={true}
							rounded={true}
							disabled={true}
						/>
					</div>
				</Card>
			</div>
		</>
	}
}
