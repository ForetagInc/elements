import { FC, PropsWithChildren } from 'react';

interface ITimelineStepProps {
	horizontal?: boolean;

	step: number;

	last: boolean;
}

export const TimelineStep: FC<PropsWithChildren<ITimelineStepProps>> = ({ horizontal, step, last, children }) => {
	return (
		<li
			className={`
				flex rel gap:24 mb:36px
				${horizontal && 'ai:center flex:column mr:36'}
				${!last &&
				(
					!horizontal ? '{content:\'\';bg:gray-86;abs;w:1;h:100%;left:0;z-index:0;ml:14px;mt:36px}::after'
						: `{content:\'\';bg:gray-86;abs;w:100%;h:1;left:0;z-index:0;ml:44px;mt:14px}::after`
				)
				} 
			`}
		>
			<p className='b:1|solid|gray-86 bg:white p:2 h:28 w:28 line-height:1.4rem t:center round f:semibold f:12'>
				{step}
			</p>
			<div className='mt:4'>
				{children}
			</div>
		</li>
	)
};

TimelineStep.defaultProps = {
	step: 0,
	last: false,
	horizontal: false
};

TimelineStep.displayName = 'TimelineStep';