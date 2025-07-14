export default function RightSidebar() {
    return (
        <div className="md:col-span-3 md:pt-16 pt-2">
            <div className="bg-slate-100 outline w-full text-center outline-1 outline-orange-500 p-3.5 rounded-lg grid justify-center text-base font-medium">

                Need Personalized Help?

                <button className="button mt-2.5 button-small">
                    Book A Free Consultation
                </button>

            </div>

            <div className="p-6 bg-slate-100 rounded-lg md:mt-5 mt-8">

                <h6 className="text-base font-medium mb-4">
                    Useful links
                </h6>

                {
                    ['http://useful-links-test-1.test', 'http://useful-links-test-2.test', 'http://useful-links-test-3.test'].map(item => <a href={item} className="font-extralight hover:text-orange-500 transition-all duration-300 text-sm leading-7 pr-1 underline"> {item} </a>)
                }
            </div>
        </div>
    );
}