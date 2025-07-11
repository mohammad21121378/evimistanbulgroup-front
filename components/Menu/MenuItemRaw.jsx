import styles from './MenuModal.module.css'
import Link from 'next/link'

export  default  function  MenuItemRaw({title, href="/"}){
    return (
        <Link href={href}>
            <a>
                <div className="mb-2 w-100 rounded-12 px-1 ">
                    <div className={'fs-15'}>
                        {title}
                    </div>
                </div>
            </a>
        </Link>
    );
}