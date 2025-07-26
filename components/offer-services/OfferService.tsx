import FeatureCard from "@/components/feature-card";

export const offerServicesDefault = [
    {
      title: 'Frequently Asked Questions (FAQs)',
      description:
        'Find quick answers to the most common questions from international residents, investors, students, patients, and families planning life in Turkey.',
      buttonHref: '/faqs',
      icon: (<svg width="2.31rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5213 13.375C13.9033 12.289 14.6574 11.3732 15.6499 10.7898C16.6425 10.2065 17.8095 9.99327 18.9442 10.1879C20.0789 10.3825 21.1081 10.9725 21.8495 11.8532C22.5909 12.734 22.9967 13.8487 22.995 15C22.995 18.25 18.12 19.875 18.12 19.875M18.25 26.375H18.2663M34.5 18.25C34.5 27.2246 27.2246 34.5 18.25 34.5C9.27537 34.5 2 27.2246 2 18.25C2 9.27537 9.27537 2 18.25 2C27.2246 2 34.5 9.27537 34.5 18.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      ),
      buttonLabel: 'Learn More'
    },
    {
      title: 'Our Guides & Insights',
      description:
        'Explore expert-written articles on property, citizenship, investment, residency, business, study, treatment and everyday life in Turkey.',
      buttonHref: '/our-insights',
      icon: (<svg width="2.31rem" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 25V18.5M18.5 12H18.5163M34.75 18.5C34.75 27.4746 27.4746 34.75 18.5 34.75C9.52537 34.75 2.25 27.4746 2.25 18.5C2.25 9.52537 9.52537 2.25 18.5 2.25C27.4746 2.25 34.75 9.52537 34.75 18.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      )
    },
  
  ]


export default function OfferServices({offerServices=offerServicesDefault}) {
    const buttonLabel = 'Learn More'
    return (
        <section className="section">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12">
                    {
                        offerServices.map((item, key) => <FeatureCard key={key} {...item} buttonLabel={item.buttonLabel ?? buttonLabel} />)
                    }
                </div>
            </div>
        </section>
    );
}