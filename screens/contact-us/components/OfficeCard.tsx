import { Heading } from "@/components/typography";

interface OfficeCardProps {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  mapSrc: string;
  isReverse?: boolean;
}

const OfficeCard = ({
  title,
  subtitle,
  address,
  phone,
  email,
  mapSrc,
  isReverse = false,
}: OfficeCardProps) => {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 mt-10 items-center md:gap-0 gap-10">

      <div className={`md:col-span-5 ${isReverse ? 'md:order-3' : 'md:order-1'}`}>
        <iframe
          src={mapSrc}
          className="w-full h-[14.5rem] rounded-xl border"
          loading="lazy"
          allowFullScreen
        />
      </div>

      <div className={`hidden h-full md:grid grid-rows-[1fr] justify-center ${isReverse ? 'md:order-2' : 'md:order-2'}`}>
        <div className="w-2 bg-slate-200 h-full rounded-sm" />
      </div>

      <div className={`md:col-span-6 md:gap-y-0 grid h-full items-start grid-rows-[auto,auto,1fr] ${isReverse ? 'md:order-1' : 'md:order-3'}`}>
        <Heading type="heading-4" className="font-bold uppercase">
          {title}
        </Heading>

        <p className="text-xl font-bold text-orange-600 mt-1 uppercase">{subtitle}</p>

        <div className="grid grid-cols-11 gap-10 md:mt-auto mt-6 text-base">
          <div className="col-span-6">
            <div className="font-semibold uppercase mb-2.5">Office Location</div>
            <p className="text-slate-500">{address}</p>
          </div>
          <div className="col-span-5">
            <div className="font-semibold uppercase mb-2.5">Contact</div>
            <a href={`tel:${phone}`} className="text-slate-500 hover:text-orange-600 block">
              {phone}
            </a>
            <a href={`mailto:${email}`} className="text-slate-500 hover:text-orange-600 block">
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeCard;
