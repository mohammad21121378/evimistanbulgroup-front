export interface ServiceItem {
  title: string;
  href: string;
}

const prefix = '/faqs';

export const servicesData: ServiceItem[] = [
  { title: 'Legal & Residency in Turkey', href: `${prefix}/legal-residency-in-turkey` },
  { title: 'Turkish Citizenship', href: `${prefix}/turkish-citizenship` },
  { title: 'Real Estate: Buying Property in Turkey', href: `${prefix}/real-estate-buying-property` },
  { title: 'Real Estate: Selling Property in Turkey', href: `${prefix}/real-estate-selling-property` },
  { title: 'Real Estate: Renting Property in Turkey', href: `${prefix}/real-estate-renting-property` },
  { title: 'Work Permits & Employment', href: `${prefix}/work-permits-employment` },
  { title: 'Study Permits & Education', href: `${prefix}/study-permits-education` },
  { title: 'Medical Tourism & Healthcare', href: `${prefix}/medical-tourism-healthcare` },
  { title: 'Business & Finance', href: `${prefix}/business-finance` },
  { title: 'Family Relocation & Lifestyle Adjustments', href: `${prefix}/family-relocation-lifestyle` },
];