import Button from "@/components/ui/Button";
import UsefulLinksWithLabel from "@/components/useful-links/UsefulLinksWithLabel";
import { useConsultationStore } from "@/stores/consultationStore";

interface SidebarProps {
  showConsultationBox?: boolean;
  showLinks?: boolean;
  showSearch?: boolean;
  showMedicalImg?: boolean;
  links?: { label: string; link: string }[];
  servicesLinks?: { label: string; link: string }[];
}

export default function ServiceSidebar({
  showConsultationBox = true,
  showLinks = true,
  links,
  servicesLinks,
  showSearch = false,
  showMedicalImg = false
}: SidebarProps) {

  const { onOpen } = useConsultationStore();

  return (
    <aside className="sticky top-28 space-y-6 w-full">
      {showMedicalImg && (
        <img src="/images/medical-carelines.webp" className="w-full max-w-xs mx-auto object-cover h-full" alt="Medical Carelines - Evimistanbul" />
      )}

      {showConsultationBox && (
        <div className="bg-orange-600 text-white rounded-lg px-6 py-7">
          <h3 className="font-bold text-base mb-2">
            Not Sure Where to Start ?
          </h3>
          <p className="text-sm mb-4">
            Our consultants are here to guide you. Whether you’re planning to
            relocate, invest, study, or seek healthcare, we provide personalized
            advice, transparent processes, and multilingual support at every step.
          </p>

          <button onClick={onOpen} className="bg-white text-orange-500 font-bold w-full py-2.5 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition-all duration-500">
            Book A Free Consultation
          </button>
        </div>
      )}

      {showLinks && links && links.length && (
        <UsefulLinksWithLabel
          title="Useful Guides & Insights"
          links={links}
        />
      )}

      {showLinks && servicesLinks && servicesLinks.length && (
        <UsefulLinksWithLabel
        truncate
          childClassName={'list-disc !list-inside text-blue-700 !font-medium'}
          title="Related Services"
          links={servicesLinks}
        />
      )}

      {showSearch && (
        <Button color="orange" href="/properties-for-sale-in-turkey" className="justify-between mt-6 !rounded-lg !px-6" gradient={false} outline size="full" flex>
          Find Property Now

          <svg width="1.15rem" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z" fill="currentColor" />
          </svg>

        </Button>
      )}
    </aside>
  );
}
