/**
 * TESTIMONIALS DEMO DATA
 * 
 * NOTE: The testimonials below are demonstration data created for website UI
 * presentation purposes. Replace with verified client reviews and details when available.
 */

export interface TestimonialItem {
  id: string;
  companyName: string;
  industry: string;
  location: string;
  logo: string;
  contactPerson: string;
  designation: string;
  quote: string;
  isDemo: boolean;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "kavron",
    companyName: "Kavron Auto Components",
    industry: "Automotive Components",
    location: "Vapi, Gujarat",
    logo: "/home/clients/kavron-auto-components.svg",
    contactPerson: "Rajesh Panchal",
    designation: "Supply Chain & Operations",
    quote:
      "The packaging solution has been designed to meet our component handling and transportation requirements.",
    isDemo: true,
  },
  {
    id: "mivora",
    companyName: "Mivora Foods",
    industry: "Food & Beverage",
    location: "Valsad, Gujarat",
    logo: "/home/clients/mivora-foods.svg",
    contactPerson: "Pooja Desai",
    designation: "Packaging Quality Lead",
    quote:
      "The customized box design gives our products a neat and professional packaging presentation.",
    isDemo: true,
  },
  {
    id: "truvolt",
    companyName: "Truvolt Electricals",
    industry: "Electrical Products",
    location: "Surat, Gujarat",
    logo: "/home/clients/truvolt-electricals.svg",
    contactPerson: "Amitabh Shah",
    designation: "Logistics Manager",
    quote:
      "The packaging design focuses on keeping our electrical products organized and protected during handling.",
    isDemo: true,
  },
  {
    id: "nivaan",
    companyName: "Nivaan Textiles",
    industry: "Textile & Garments",
    location: "Silvassa",
    logo: "/home/clients/nivaan-textiles.svg",
    contactPerson: "Dhiren Patel",
    designation: "Dispatch & Export Coordinator",
    quote:
      "The packaging solution provides a practical way to organize and dispatch our textile products.",
    isDemo: true,
  },
  {
    id: "westora",
    companyName: "Westora Industrial Supplies",
    industry: "Industrial Supplies",
    location: "Umbergaon, Gujarat",
    logo: "/home/clients/westora-industrial-supplies.svg",
    contactPerson: "Kishore Mehta",
    designation: "Plant Head",
    quote:
      "The packaging requirements for our industrial supplies are addressed with a practical and suitable box design.",
    isDemo: true,
  },
];
