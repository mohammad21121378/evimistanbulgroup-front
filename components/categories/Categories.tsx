'use client'

import { useState } from 'react';
import styles from './Categories.module.css';
import { categories as categoriesData } from './constants'
import Link from '@/components/ui/Link';

export default function Categories({ category = "View all", categories = categoriesData }) {

    const [sort, setSort] = useState('View all');

    return (
        <div className="sticky top-28 z-10">

            <div className={`${styles.sortItems} grid-cols-1 md:text-left text-center`}>

                <Link key={"View all"}
                    href={sort === 'View all' ? `/our-insights/` : `/our-insights/${"View all"}`}>
                    <div
                        className={`${styles.sortItem} ${category === "View all" && 'text-white bg-orange-500 font-bold'} hover:bg-orange-500 hover:text-white`}
                        onClick={() => setSort("View all")}
                    >
                        {"View all"}
                    </div>
                </Link>

                {
                    categories?.map(item => (
                        <Link key={item.id} href={item.id === 'View all' ? `/our-insights/` : `/our-insights/${item.slug}`} >
                            <div
                                className={`${styles.sortItem} truncate ${category === item.slug && 'text-white !bg-orange-500 font-bold'} hover:bg-orange-500 hover:text-white`}
                                onClick={() => setSort(item.id)}
                            >
                                {item.title}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}



