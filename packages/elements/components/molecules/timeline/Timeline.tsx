import { FC, PropsWithChildren, Children, cloneElement, ReactElement, JSXElementConstructor } from 'react';

interface ITimelineProps {
	horizontal: boolean;
}

export const Timeline: FC<PropsWithChildren<ITimelineProps>> = ({ horizontal, children }) => {

	let childrenArray = Children.toArray(children);

	return (
		<ol className={`flex ${!horizontal && 'flex:column'} gap:10`}>
			{
				Children.map(children, (child, index) => {
					const step = index + 1;
					const last = step === childrenArray.length;

					return cloneElement(
						child as ReactElement<any, string | JSXElementConstructor<any>>,
						{ step, last, horizontal }
					)
				})
			}
		</ol>
	)
};

Timeline.defaultProps = {
	horizontal: false
};

Timeline.displayName = 'Timeline';