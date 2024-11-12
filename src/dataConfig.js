// dataConfig.js
export const headConfig = {
    title: 'JS Plumbing & Heating Installations Ltd',
    description: '➠ We are a family run business, based in Kingston upon Thames. ➠ With over 3 decades of experience, JS Plumbing & Heating Installations has eveloved in bringing high quality services and installations of leading industry standard plumbing and heating systems to clients',
    keywords: 'Bathroom installations and refurbishments,  Bathroom repair,  Boiling water unit installations, Water softener installations and services,  Vented and unvented hot water cylinder installations, replacements, services, repairs + certificates,  Boiler installations, replacements, services, diagnostics, repairs + certificates, Central heating installation + repairs, Power flushing of central heating systems,  Underfloor heating installation, services, diagnostics + repairs, Thames Water approved main water application, installation, connections + certificate,  Booster pump installations + replacements,  Gas installations + alterations, Gas safety inspections,  Gas certificates, landlord certificates, safety certificates,  Customer advice service, Free quotations, Joerg Schaefer',
};

export const menuConfig = {
    home: { title: '', value: 'home', icon: '' },
    about: { title: 'About us', value: 'about', icon: 'mdi-account-box' },
    philosophy: { title: 'Our philosophy', value: 'philosophy', icon: 'mdi-lightbulb-outline' },
    services: { title: 'Services', value: 'services', icon: 'mdi-briefcase' },
    gallery: { title: 'Gallery', value: 'gallery', icon: 'mdi-image-multiple' },
    contact: { title: 'Contact', value: 'contact', icon: 'mdi-phone' },
    footer: { title: '', value: 'footer', icon: '' },
};

export const sectionsConfig = {
    home: {
        id: menuConfig.home.value,
        title: "JS Plumbing & Heating Installations Ltd.",
        text: "Plumbers in Kingston and surrounding areas.",
        btnText: "get free quote"
    },
    about: {
        id: menuConfig.about.value,
        items: [
            {
                title: 'About us',
                text: 'We are a family run business, based in Kingston upon Thames. With over 3 decades of experience, JS Plumbing & Heating Installations has evolved in bringing high quality services and installations of leading industry standard plumbing and heating systems to clients. Through the development of our core strategy, designed to provide our clients with an all-round and complete service, we have achieved in maintaining reliable, successful and sound solutions to the installation of plumbing and heating systems and appliances. We strive to continue building on our strategic product, services and experience through our up-to-date knowledge based research into industry leading manufacturers and their plumbing and heating appliances, assuring our solutions meet our clients’ economical and environmental demands.'
            },
            {
                title: 'Our vision',
                text: 'Our vision was conceived with the idea for providing a more dynamic, efficient and cost-effective approach in finding solutions to more reliable, stable and compatible plumbing and heating systems that meet our client’s demands. Years of experience working with clients, architects and construction companies gave us the knowledge in developing a strategy flexible enough to cater for individual solutions, whilst ensuring quality, stability and long life for all our installed plumbing and heating systems. Our values represent precise and thorough planning for our solutions, accurate, clean and professional installation of plumbing and heating appliances and an aftercare service to maintain the systems quality and longevity. At the core of our product and services is a strong customer relationship, advising and consulting every step of the way.'
            },
        ]
    },
    philosophy: {
        id: menuConfig.philosophy.value,
        items: [
            {
                title: 'Consultation',
                text: 'Based on a firm belief that careful, precise and informed planning is the key to a successful project, we take a thorough approach in assessing our client’s requests, specifications, thoughts, desires, and living space to establish a project overview. Our consulting service extends to advising our clients on all technical, design, and aesthetic aspects when submitting our individual solutions. We proceed in building a detailed plan for implementing and installing our plumbing and heating solutions, in order to provide you with a detailed and transparent estimate of costs in an accessible way.'
            },
            {
                title: 'Installation',
                text: 'We take great care in implementing our solutions and installing plumbing and heating systems in a professional, accurate and appropriately clean manner. We supervise and attend to our clients throughout the workmanship period with advice and administration, including applications and connections of gas and water mains. Collaboration with architects and construction companies working on the project are an essential part of our workflow in ensuring a seamless integration of our planned plumbing and heating solutions.'
            },
            {
                title: 'Aftercare',
                text: 'We value and appreciate maintaining a strong after-sales customer relationship. Our term of guarantee ensures a minimum 1-year warranty on all the work carried out and on all delivered materials including manufacturer warranties. We provide our clients with maintenance services on all installed systems and appliances within and outside of our warranty.'
            }
        ]
    },
    services: {
        id: menuConfig.services.value,
        title: "Our Services",
        items: [
            {
                title: 'Bathroom installations + refurbishments',
                text: 'Transform your bathroom into a modern, functional space with our expert plumbing services. Whether you are planning a new installation or refurbishing an existing bathroom, our skilled plumbers handle everything from pipework to fixture installations with precision. We ensure high-quality finishes, efficient water systems, and stylish, durable results tailored to your needs. Let us bring your bathroom vision to life—on time and within budget.'
            },
            {
                title: "Bathroom repair",
                text: "We specialize in bathroom repairs, fixing leaks, faulty fixtures, and ensuring your plumbing works smoothly."
            },
            {
                title: "Boiling water unit installations",
                text: "We install boiling water units for instant hot water, perfect for kitchens, offices, and commercial spaces."
            },
            {
                title: "Water softener installations + services",
                text: "Protect your plumbing from hard water damage with our expert water softener installations and ongoing maintenance services."
            },
            {
                title: "Vented and unvented hot water cylinder installations, replacements, services, repairs + certificates",
                text: "Our team handles all aspects of hot water cylinder systems, from installation and repairs to safety certifications for peace of mind."
            },
            {
                title: "Boiler installations, replacements, services, diagnostics, repairs + certificates",
                text: "We provide comprehensive boiler services including installations, repairs, diagnostics, and issuing of safety certificates."
            },
            {
                title: "Central heating installation + repairs",
                text: "Stay warm with our expert central heating installations and repair services, ensuring efficient heating throughout your home."
            },
            {
                title: "Power flushing of central heating systems",
                text: "Improve the efficiency of your heating system with our power flushing service, removing sludge and debris from your radiators."
            },
            {
                title: "Underfloor heating installation, services, diagnostics + repairs",
                text: "Enjoy the comfort of underfloor heating with our installation services, including diagnostics and repairs for any issues."
            },
            {
                title: "Thames Water approved main water application, installation, connections + certificate",
                text: "We are Thames Water-approved installers, ensuring safe and certified connections to the main water supply for your property."
            },
            {
                title: "Booster pump installations + replacements",
                text: "Boost your water pressure with our booster pump installations, replacements, and expert advice to meet your specific needs."
            },
            {
                title: "Gas installations + alterations",
                text: "Our qualified team provides safe gas installations and alterations, ensuring compliance with all safety regulations."
            },
            {
                title: "Gas safety inspections",
                text: "Keep your home safe with our comprehensive gas safety inspections, ensuring your system is up to standard and hazard-free."
            },
            {
                title: "Gas certificates, landlord certificates, safety certificates",
                text: "We provide all necessary gas safety certificates, including landlord and safety certificates, to comply with legal requirements."
            },
            {
                title: "Customer advice service",
                text: "Our customer advice service helps you make informed decisions about your plumbing, heating, and gas needs, with expert guidance."
            },
            {
                title: "Free quotation",
                text: "Contact us for a no-obligation, free quotation on any plumbing, heating, or gas service. We're here to help!"
            }
        ]
    },
    gallery: {
        id: menuConfig.gallery.value,
        galleryItems: [
            {
                title: "Bathroom",
                dir: "Bathroom",
                images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
            },
            {
                title: "Booster",
                dir: "Booster",
                images: ["1.jpg", "2.jpg"]
            },
            {
                title: "Central Heating",
                dir: "CentralHeating",
                images: ["1.jpg", "2.jpg", "3.jpg"]
            },
            {
                title: "Underfloor Heating",
                dir: "UnderfloorHeating",
                images: ["1.jpg", "2.jpg"]
            }
        ]
    },
    contact: {
        id: menuConfig.contact.value,
        items: [
            {
                icon: "mdi-phone",
                text: "+44 (0) 79 400 774 49",
                href: "tel:+447940077449"
            },
            {
                icon: "mdi-email",
                text: "phinstallations[at]gmx.eu",
                href: "mailto:phinstallations@gmx.eu"
            },
            {
                icon: "mdi-map-marker",
                text: "JS PH Installations Ltd",
                href: "https://maps.app.goo.gl/oAtzJZfzTFLEnZ4RA"
            }
        ],
        email: "phinstallations@gmx.eu"
    },
    footer: {
        id: menuConfig.footer.value,
        text: "JS Plumbing & Heating Installations Ltd.",
    }
};
