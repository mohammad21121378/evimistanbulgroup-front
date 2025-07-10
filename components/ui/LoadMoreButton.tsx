'use client'

import { FC } from 'react'
import Loading from './Loading'

interface LoadMoreButtonProps {
    onClick: () => void,
    loading?: boolean
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({ onClick, loading = false }) => {
    return (
        <button
            className="text-orange-600 flex justify-center mx-auto font-semibold items-center text-center cursor-pointer"
            onClick={onClick}>

            {
                loading ?
                    <Loading /> :
                    <>
                        Load More <svg className="ml-2" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(90deg)' }}> <path d="M-1.90735e-06 15C-1.90735e-06 6.72913 6.72913 0 15 0C23.2709 0 30 6.72913 30 15C30 23.2709 23.2709 30 15 30C6.72913 30 -1.90735e-06 23.2709 -1.90735e-06 15ZM28.6957 15C28.6957 7.44783 22.5522 1.30435 15 1.30435C7.44782 1.30435 1.30435 7.44783 1.30435 15C1.30435 22.5522 7.44782 28.6957 15 28.6957C22.5522 28.6957 28.6957 22.5522 28.6957 15Z" fill="currentColor"></path><path d="M6.52004 14.9998C6.52004 14.6398 6.81221 14.3477 7.17221 14.3477H22.8244C23.1844 14.3477 23.4766 14.6398 23.4766 14.9998C23.4766 15.3598 23.1844 15.652 22.8244 15.652H7.17221C6.81221 15.652 6.52004 15.3598 6.52004 14.9998Z" fill="currentColor"></path> <path d="M16.9584 20.2173C16.9584 20.0504 17.0223 19.8834 17.1488 19.7556L21.9058 14.9999L17.1501 10.2443C16.8958 9.98994 16.8958 9.57646 17.1501 9.32211C17.4045 9.06776 17.818 9.06776 18.0723 9.32211L23.2897 14.5395C23.5441 14.7938 23.5441 15.2073 23.2897 15.4617L18.0723 20.6791C17.818 20.9334 17.4045 20.9334 17.1501 20.6791C17.0223 20.5512 16.9584 20.3843 16.9584 20.2173Z" fill="currentColor"></path></svg>
                    </>
            }

        </button>
    )
}

export default LoadMoreButton
