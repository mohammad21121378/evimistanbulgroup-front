import { Heading } from "@/components/typography";
import SectionCard from "@/components/ui/SectionCard";
import { useConsultationStore } from "@/stores/consultationStore";
import classNames from "classnames";


const paragraphClasses = "italic text-xl leading-snug mb-5";


export default function Alert() {
    
  const { onOpen } = useConsultationStore()

    return (
        <SectionCard>

        <Heading type="heading-5" className="">
          Please Note:
        </Heading>

        <p className={classNames(paragraphClasses, "mt-6")}>
          The information below is provided for educational and informational purposes only. While we do our best to keep it up-to-date, laws, procedures, and requirements in Turkey are constantly evolving. Every case is unique — your situation may differ due to nationality, personal background, or recent legal changes.
        </p>
        <p className={classNames(paragraphClasses)}>
          hat’s why we always recommend speaking with the expert advisors first.

        </p>
        <p className={classNames(paragraphClasses, '!mb-1')}>
          Contact us for a <span className="text-orange-500 hover:text-orange-700 duration-300 transition-all  underline font-bold px-0.5 cursor-pointer" onClick={onOpen}>FREE Consultation</span> and receive personalized guidance based on your specific needs.
        </p>
      </SectionCard>
    )
}