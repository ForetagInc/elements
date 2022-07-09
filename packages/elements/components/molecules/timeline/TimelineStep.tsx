import { FC, PropsWithChildren } from 'react';

interface ITimelineStepProps {
	step: number;

	last: boolean;
}

export const TimelineStep: FC<PropsWithChildren<ITimelineStepProps>> = (props) => {
	return (
		<li
			className={`
				flex rel gap:24 mb:36px
				${!props.last && '{content:\'\';bg:gray-86;abs;w:1;h:100%;left:0;z-index:0;ml:14px;mt:36px}::after'}
			`}
		>
			<p className='b:1|solid|gray-86 bg:white p:2 h:28 w:28 line-height:1.4rem t:center round f:semibold f:12'>
				{props.step}
			</p>
			<div className='mt:4'>
				{props.children}
			</div>
		</li>
	)
};

TimelineStep.defaultProps = {
	step: 0,
	last: false
};

TimelineStep.displayName = 'TimelineStep';