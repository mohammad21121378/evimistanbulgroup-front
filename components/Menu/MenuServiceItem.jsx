import styles from './MenuModal.module.css'
import Link from 'next/link'
import Image from 'next/image'


export  default  function  MenuServiceItem({img, title, description, active, href="/", itemBgNone}){
    return (
        <Link href={href}>
                <div className={`mb-2 d-flex align-items-start gap-10 w-100 rounded-6 py-8px px-12px ${!itemBgNone && 'bg-white'} `}>
                    <div>
                        <img style={{height:37,minWidth:37,width:37,maxWidth:37}} src={img.src} alt={img.alt} width={50} height={50} loading={'lazy'} />
                    </div>
                    <div>
                        <div className={'fs-15 fw-600 '} style={{color: 'rgba(52, 64, 84, 1)'}}>{title}</div>
                        <div className={`${styles.textGray1} fs-12 mt-1`}>{description}</div>
                    </div>
                </div>
        </Link>
    );
}