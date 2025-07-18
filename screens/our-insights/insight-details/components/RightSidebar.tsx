import UsefulLinks from "@/components/useful-links";

export default function RightSidebar() {
    return (
        <div className="md:col-span-3 md:pt-16 pt-2">
            <div className="bg-slate-100 outline w-full text-center outline-1 outline-orange-500 p-3.5 rounded-lg grid justify-center text-base font-medium">

                Need Personalized Help?

                <button className="button mt-2.5 button-small">
                    Book A Free Consultation
                </button>

            </div>

            <UsefulLinks
                className="md:mt-5 mt-8"
                links={['http://useful-test-1.test', 'http://useful-links-test-2.test', 'http://useful-links-test-test-3.test']}
                inline
            />
        </div>
    );
}