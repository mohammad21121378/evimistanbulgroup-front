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
        <div className={classNames(className, 'mb-3')}>
            {
                title &&
                <h6 className={`text-orange-500 font-bold uppercase text-xs`}>{title}</h6>
            }

            <div className={` ${childrenClassName}`}>
                {children}
            </div>
        </div>
    )
}