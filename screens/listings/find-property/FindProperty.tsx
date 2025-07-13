import SvgForBg from "./SvgForBg";

export default function FindProperty() {
    return (
        <div className="bg-[#002DD1] pt-20 pb-24 mt-16 space-y-6 text-white text-center relative">
            <h6 className="heading-6 text-orange-500">
                Let Us Help.
            </h6>

            <h5 className="heading-5">
                Can’t Find the Right Property?
            </h5>

            <p className="paragraph-medium container mx-auto px-20 relative z-10">
                Not all of our properties are listed online — and some of the best offers go fast. If you’re looking for something specific, contact us directly and our team will handpick options tailored to your needs, budget, and goals.
            </p>

            <button className="button">
                Book A Free Consultation
            </button>

            <SvgForBg className="md:block hidden absolute left-6 top-1/2 -translate-y-[56%]" />
            <SvgForBg className="md:block hidden absolute right-6 top-1/2 -translate-y-[56%] -scale-x-100" />

        </div>
    );
}