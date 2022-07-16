import * as React from 'react';

import { Card, Checkbox } from '../components';

interface IOAuthTemplateProps {
	app: string;
	appLogo: string;
	permissions: Array<{
		icon: string;
		permission: string;
		adjustable: boolean;
	}>;
};

export const OAuth: React.FC<IOAuthTemplateProps> = (props) => {
	return (
		<Card
			title='Sign in with Whole'
			titleLogo='https://raw.githubusercontent.com/ForetagInc/branding/master/Foretag/Sirocco/logos/Default.svg'
			className='max-w:600px'
		>
			<div className='flex flex:column ai:center p:24|48@sm'>
				<img
					className='w:48'
					src={props.appLogo}
					alt={props.app + ' logo'}
				/>
				<h1 className='t:center mb:24 f:medium'>{props.app} wants to access your Foretag Account</h1>
				<div>
					<h3 className='f:semibold'>Select what <span className='f:blue'>{props.app}</span> can access</h3>
					<div className='mt:8 mb:16'>
						{
							props.permissions.map(({ permission, icon, adjustable }, index) =>
								<div key={index} className='flex jc:space-between ai:center py:16 bb:1|solid|gray-86'>
									<div className='flex gap:10 ai:center'>
										<img src={icon} alt={permission} className='h:32' />
										<p>{permission}</p>
									</div>
									<Checkbox
										aria-role='presentation'
										checked
										hideLabel={true}
										label={permission}
										disabled={!adjustable}
									/>
								</div>
							)
						}
					</div>

					<h3 className='f:semibold mb:8'>Make sure you trust {props.app}</h3>
					<p>You may be sharing sensitive info with this site or app. You can always see or remove access in your account.</p>
				</div>
			</div>
		</Card>
	);
}

OAuth.displayName = 'OAuth';