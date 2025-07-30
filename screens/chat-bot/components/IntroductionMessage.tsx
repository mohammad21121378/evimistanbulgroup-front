export default function IntroductionMessage() {
    return (
        <div className={` z-10 grid justify-center text-center px-6 mb-8`}>

            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" className="size-32 mx-auto">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40 13.3a26.7 26.7 0 0 0-23.5 39.3c.8 1.5 1 3.2.6 5l-2.2 7.8 8.2-2.2c1.7-.4 3.4-.2 4.8.6a26.7 26.7 0 1 0 12-50.5zM40 9a31.1 31.1 0 0 0-27.4 45.8c.3.5.3 1.1.2 1.7L9.6 67.9c-.4 1.7 1.1 3.2 2.8 2.8l11.9-3.2c.5-.1 1 0 1.6.2A31.1 31.1 0 1 0 39.9 9z" fill="url(#a)">
                </path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M40 39.2a5 5 0 0 0-5 5v6.3c0 1-.9 2-1.9 2h-6.7C25 52.4 24 51.3 24 50V36.4c0-3.4 0-3.7 1.3-4.5l11.8-6.8c1-.6 1.8-1 2.8-1 1 0 1.7.4 2.8 1l11.9 6.8c1.3.8 1.3 1.1 1.3 4.5v13.7c0 1.3-1 2.3-2.3 2.3H47c-1 0-2-.8-2-1.9v-6.3a5 5 0 0 0-5-5z" fill="url(#b)">
                </path>
                <defs>
                    <linearGradient id="b" x1="56" y1="38.2" x2="24.1" y2="38.2" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#c2410c"></stop>
                        <stop offset="1" stop-color="#f97316"></stop>
                    </linearGradient>
                </defs>
            </svg>

            <div className='text-3xl -mt-2.5 font-bold'>
                Say Hello to Evim GPT
            </div>

            <div className='mt-3 text-base font-normal text-gray-600'>
                Chat with the Turkey AI-Powered property search assistant and browse homes stress free!
            </div>

        </div>
    )
}