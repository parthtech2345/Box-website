export interface OwnerProfile {
  name: string;
  designation: string;
  companyName: string;
  isPlaceholder: boolean;
  photoUrl: string | null;
  quote: string;
  bioParagraphs: string[];
  signatureLabel: string;
}

export interface ManagementMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  photoUrl: string;
  photoAlt: string;
  isDemo: boolean;
}

export const OWNER_PROFILE: OwnerProfile = {
  name: "Rajeshwar Sharma",
  designation: "Founder & Managing Director",
  companyName: "Aavrit Packaging",
  isPlaceholder: true,
  photoUrl: null,
  quote:
    "Packaging is not merely a box—it is the silent ambassador of our clients' products, engineered with precision, reliability and care.",
  bioParagraphs: [
    "Behind every successful business is a clear vision and a commitment to doing things better. Our leadership guides the company with a focus on thoughtful packaging solutions, quality and lasting business relationships.",
    "Driven by decades of combined industrial understanding, our operational philosophy centers on sustainable material stewardship, modern corrugation technology, and honest customer partnerships across diverse commercial sectors.",
  ],
  signatureLabel: "Aavrit Packaging Leadership",
};

export const MANAGEMENT_TEAM: ManagementMember[] = [
  {
    id: "rajesh-patel",
    name: "Rajesh Patel",
    designation: "General Manager",
    department: "Plant Management & Strategy",
    photoUrl: "/about/management-team/rajesh-patel.png",
    photoAlt: "Portrait of Rajesh Patel, General Manager",
    isDemo: true,
  },
  {
    id: "amit-shah",
    name: "Amit Shah",
    designation: "Production Manager",
    department: "Corrugation & Quality Control",
    photoUrl: "/about/management-team/amit-shah.png",
    photoAlt: "Portrait of Amit Shah, Production Manager",
    isDemo: true,
  },
  {
    id: "neha-desai",
    name: "Neha Desai",
    designation: "Operations Manager",
    department: "Supply Chain & Logistics",
    photoUrl: "/about/management-team/neha-desai.png",
    photoAlt: "Portrait of Neha Desai, Operations Manager",
    isDemo: true,
  },
  {
    id: "priya-mehta",
    name: "Priya Mehta",
    designation: "Human Resources Manager",
    department: "Talent & Organizational Culture",
    photoUrl: "/about/management-team/priya-mehta.png",
    photoAlt: "Portrait of Priya Mehta, Human Resources Manager",
    isDemo: true,
  },
];
