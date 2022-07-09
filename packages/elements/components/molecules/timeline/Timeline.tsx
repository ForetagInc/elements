import { FC, PropsWithChildren, Children, cloneElement, ReactElement, JSXElementConstructor } from 'react';

export const Timeline: FC<PropsWithChildren> = (props) => {

	let children = Children.toArray(props.children);

	return (
		<ol className='flex flex:column gap:10'>
			{
				Children.map(children, (child, index) => {
					const step = index + 1;
					const last = step === children.length;

					return cloneElement(child as ReactElement<any, string | JSXElementConstructor<any>>, { step, last })
				})
			}
		</ol>
	)
}