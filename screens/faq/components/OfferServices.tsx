
import OfferServicesBase from "@/components/offer-services";

export default function OfferServices() {
    return (
        <OfferServicesBase
            offerServices={[
                
                {
                    title: 'Our Guides & Insights',
                    description:
                        'Explore expert-written articles on property, citizenship, investment, residency, business, study, treatment and everyday life in Turkey.',
                    buttonHref: '/our-insights',
                    icon: (<svg width="2.31rem" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 25V18.5M18.5 12H18.5163M34.75 18.5C34.75 27.4746 27.4746 34.75 18.5 34.75C9.52537 34.75 2.25 27.4746 2.25 18.5C2.25 9.52537 9.52537 2.25 18.5 2.25C27.4746 2.25 34.75 9.52537 34.75 18.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    )
                },

                {
                    title: 'Contact Us',
                    description:
                        'Our multilingual team offers personalized support for international clients — in English, Arabic, Russian, Farsi, French, Turkish, and more.',
                    buttonHref: '/contact-us',
                    buttonLabel: 'Contact Us',
                    icon: (<svg width="2.31rem" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.25 34.5C27.2246 34.5 34.5 27.2246 34.5 18.25C34.5 9.27537 27.2246 2 18.25 2C9.27537 2 2 9.27537 2 18.25C2 27.2246 9.27537 34.5 18.25 34.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.75 18.0004C14.75 16.5254 15.0469 15.0723 15.6406 13.641C16.2344 12.2098 17.125 10.9379 18.3125 9.82539C18.4625 9.67539 18.6375 9.60039 18.8375 9.60039C19.0375 9.60039 19.2125 9.67539 19.3625 9.82539L21.05 11.5504C21.1875 11.6879 21.2625 11.8473 21.275 12.0285C21.2875 12.2098 21.2375 12.3754 21.125 12.5254L19.475 14.7004C19.4 14.8004 19.3125 14.8754 19.2125 14.9254C19.1125 14.9754 19 15.0004 18.875 15.0004H16.7375C16.5875 15.4754 16.4688 15.9629 16.3813 16.4629C16.2937 16.9629 16.25 17.4754 16.25 18.0004C16.25 18.5254 16.2937 19.0379 16.3813 19.5379C16.4688 20.0379 16.5875 20.5254 16.7375 21.0004H18.875C19 21.0004 19.1125 21.0254 19.2125 21.0754C19.3125 21.1254 19.4 21.2004 19.475 21.3004L21.125 23.4754C21.2375 23.6254 21.2875 23.791 21.275 23.9723C21.2625 24.1535 21.1875 24.3129 21.05 24.4504L19.3625 26.1754C19.2125 26.3254 19.0375 26.4004 18.8375 26.4004C18.6375 26.4004 18.4625 26.3254 18.3125 26.1754C17.125 25.0754 16.2344 23.8066 15.6406 22.3691C15.0469 20.9316 14.75 19.4754 14.75 18.0004Z" fill="white"/>
                    </svg>)
                },

            ]}
        />
    )
}