import classNames from 'classnames';

type Props = {
    title: string|JSX.Element;
    className?: string;
    titleClassName?: string;
    childrenClassName?: string;
    children: React.ReactNode;
};

export default function Section({ title, children, className, titleClassName, childrenClassName }: Props) {
    
    return (
        <div className={classNames(className, 'pt-2 pb-1 px-2.5 ')}>
            {
                title ?
                <div className={`text-orange-500 font-bold text-left uppercase text-xs pl-px pb-1.5`}>{title}</div>
                : ''
            }

            <div className={` ${childrenClassName} `}>
                {children}
            </div>
        </div>
    )
}