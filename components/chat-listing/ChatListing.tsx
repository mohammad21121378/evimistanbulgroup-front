import cn from 'classnames';
import styles from './ChatListing.module.css'
import { ChatItem } from '@/types/Chat';
import { motion } from 'framer-motion'
import { Location2 } from '@/constants/icons';
import Link from '../ui/Link';
import { formatNumber } from '@/utils/formatNumber';
import { FaChevronRight } from 'react-icons/fa6';

type Prop = {
    msg: ChatItem
}

export default function ChatListing({ msg }: Prop) {
    return (
        <>
            <div className={cn(
                styles.parentBox,
                { [styles.userSender]: msg.role === 'user' }
            )}>
                <div className={styles.box}>
                    <div className={styles.textBox} aria-label="GPT response">
                        {msg.content === '...' ? (
                            <span className={styles["typing-loader"]}>
                                <span>.</span><span>.</span><span>.</span>
                            </span>
                        ) : (
                            msg.content
                        )}
                    </div>
                    <div className={styles.icon}></div>
                </div>
            </div>

            {
                msg.properties
                    ?
                    <>
                        {
                            msg.properties?.map((item, index) =>
                            (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (index + 1) * 0.5, duration: 0.5 }}
                                    className="flex bg-white rounded-2xl shadow-md overflow-hidden mb-3"
                                >
                                    <Link href={`${item.url}`} className="w-40 h-full object-cover flex-shrink-0 bg-gray-100">
                                        <img
                                            src={item.images[0] || '/placeholder.jpg'}
                                            alt={item.images[1] || 'Property Image'}
                                            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                                        />
                                    </Link>

                                    <div className="px-4 py-2.5 flex flex-col justify-between text-left w-full">
                                        <div>

                                            <Link href={`${item.url}`} className="text-lg font-bold hover:text-orange-700 text-orange-600">{item.title}</Link>

                                            <div

                                                className={cn(
                                                    "paragraph-medium font-medium flex items-center gap-1 mt-1 underline text-gray-500",

                                                )}
                                            >
                                                {Location2}
                                                <div>
                                                    <Link
                                                        href={`/properties-for-sale-in-turkey?location=${item.locationID}`}
                                                        className={cn(
                                                            "paragraph-medium font-medium  underline",

                                                        )}
                                                    >

                                                        {item.location}
                                                    </Link>,
                                                    <Link
                                                        href={`/properties-for-sale-in-turkey?location=${item.parentLocationID}`}
                                                        className={cn(
                                                            "paragraph-medium font-medium  underline",

                                                        )}
                                                    >

                                                        {item.parentLocation}
                                                    </Link>
                                                </div>
                                            </div>


                                            <p className="text-sm text-gray-600 line-clamp-2 mt-1" dangerouslySetInnerHTML={{__html:item.description ?? ""}}></p>
                                        </div>

                                        <div className="mt-2.5 text-sm font-medium text-[#1A1A1A]">
                                            {item.min_price && item.max_price ? (
                                                <>
                                                    ${formatNumber(item.min_price)} MIN – ${formatNumber(item.max_price)} MAX
                                                </>
                                            ) : item.min_price ? (
                                                <>
                                                    ${formatNumber(item.min_price)}
                                                </>
                                            ) : item.max_price ? (
                                                <>
                                                    ${formatNumber(item.max_price)}
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }

                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (msg.properties.length+1) * .5, duration: 0.5 }}
                        className='pt-4 '
                        >
                            <Link  href="/properties-for-sale-in-turkey" className='flex gap-1 capitalize items-center text-center justify-center pb-1 hover:text-orange-500 text-gray-600 font-bold'>
                                See more properties <FaChevronRight />
                            </Link>
                            <hr className='bg-gray-200 mt-1 mb-3' />
                        </motion.div>

                    </>
                    : 
                    <></>
            }

        </>
    );
}