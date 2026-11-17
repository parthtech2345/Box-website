/**
 * CLIENT PARTNERS DEMO DATA
 * 
 * NOTE: The companies and logos below are fictional demonstration data
 * created for website layout and UI presentation purposes.
 * Replace with verified customer logos and details as available.
 */

export interface ClientPartner {
  id: string;
  name: string;
  industry: string;
  location: string;
  logo: string;
  isDemo: boolean;
  alt: string;
}

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    id: "kavron",
    name: "Kavron Auto Components",
    industry: "Automotive Components",
    location: "Vapi, Gujarat",
    logo: "/home/clients/kavron-auto-components.svg",
    isDemo: true,
    alt: "Kavron Auto Components logo",
  },
  {
    id: "mivora",
    name: "Mivora Foods",
    industry: "Food & Beverage",
    location: "Valsad, Gujarat",
    logo: "/home/clients/mivora-foods.svg",
    isDemo: true,
    alt: "Mivora Foods logo",
  },
  {
    id: "truvolt",
    name: "Truvolt Electricals",
    industry: "Electrical Products",
    location: "Surat, Gujarat",
    logo: "/home/clients/truvolt-electricals.svg",
    isDemo: true,
    alt: "Truvolt Electricals logo",
  },
  {
    id: "nivaan",
    name: "Nivaan Textiles",
    industry: "Textile & Garments",
    location: "Silvassa, D&NH and D&D",
    logo: "/home/clients/nivaan-textiles.svg",
    isDemo: true,
    alt: "Nivaan Textiles logo",
  },
  {
    id: "westora",
    name: "Westora Industrial Supplies",
    industry: "Industrial Supplies",
    location: "Umbergaon, Gujarat",
    logo: "/home/clients/westora-industrial-supplies.svg",
    isDemo: true,
    alt: "Westora Industrial Supplies logo",
  },
];
