'use client'

import { useState } from 'react';
import styles from './Categories.module.css';
import { categories as categoriesData } from './constants'
import Link from '@/components/ui/Link';

export default function Categories({ category = "View all", categories = categoriesData }) {

    const [sort, setSort] = useState('View all');

    return (
        <div className="sticky top-0 z-10">

            <div className={styles.sortBox}>
                <div className={styles.sortMobile}>

                    <div className={'w-50 fs-25 fw-bold'}>Sort By:</div>
                    <div className={'border w-50'}>{category}</div>

                </div>

                <div className={`${styles.sortItems}`}>

                    <Link key={"View all"}
                        href={sort === 'View all' ? `/our-insights/` : `/our-insights/${"View all"}`}>
                            <div
                                className={`${styles.sortItem} ${category === "View all" && 'text-white bg-orange-500'} hover:bg-orange-500 hover:text-white`}
                                onClick={() => setSort("View all")}
                            >
                                {"View all"}
                            </div>
                    </Link>

                    {
                        categories?.map(item => (
                            <Link key={item.id} href={item.id === 'View all' ? `/our-insights/` : `/our-insights/${item.slug}`} >
                                    <div
                                        className={`${styles.sortItem} ${category === item.slug && 'text-white bg-orange-500'} hover:bg-orange-500 hover:text-white`}
                                        onClick={() => setSort(item.id)}
                                    >
                                        {item.title}
                                    </div>
                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}



