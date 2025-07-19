import UsefulLinks from "@/components/useful-links";

interface SidebarProps {
    showConsultationBox?: boolean;
    showLinks?: boolean;
    showSearch?: boolean;
    showMedicalImg?: boolean;
  }
  
  export default function ServiceSidebar({
    showConsultationBox = true,
    showLinks = true,
    showSearch = false,
    showMedicalImg=false
  }: SidebarProps) {
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

            <button className="bg-white text-orange-500 font-bold w-full py-2.5 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition-all duration-500">
              Book A Free Consultation
            </button>
          </div>
        )}
  
        {showLinks && (
          <UsefulLinks title="Useful Guides & Insights" links={[
            "Citizenship & Residency in Turkey",
            "Property & Real Estate in Turkey",
            "Cities & Neighborhoods in Turkey",
            "Investment & Finance in Turkey",
        ]} />
        )}
  
        {showSearch && (
          <div className="w-full">
            <button className="w-full border border-orange-500 text-orange-500 font-medium px-4 py-2 rounded-full text-sm flex items-center justify-center gap-2 hover:bg-orange-50 transition">
              Find Property Now <span className="text-base">🔍</span>
            </button>
          </div>
        )}
      </aside>
    );
  }
  