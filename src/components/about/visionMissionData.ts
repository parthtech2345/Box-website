export interface StatementItem {
  id: string;
  badgeNumber: string;
  title: string;
  description: string;
  checkpoints: string[];
}

export interface VisionMissionData {
  eyebrow: string;
  mainHeading: string;
  supportingText: string;
  vision: StatementItem;
  mission: StatementItem;
}

export const VISION_MISSION_DATA: VisionMissionData = {
  eyebrow: "OUR VISION & MISSION",
  mainHeading: "From Vision to Reality.",
  supportingText: "One purpose. Every box. A better packaging future.",
  vision: {
    id: "vision",
    badgeNumber: "01",
    title: "Shaping the Future of Packaging.",
    description:
      "To build a trusted packaging identity through thoughtful solutions, consistent quality and a forward-looking approach to the evolving needs of businesses.",
    checkpoints: [
      "Industry-trusted manufacturing identity",
      "Sustainable high-strength kraft stewardship",
      "Future-ready automated corrugation lines",
      "Consistent batch-to-batch quality benchmarks",
      "Long-term value creation for partner brands",
    ],
  },
  mission: {
    id: "mission",
    badgeNumber: "02",
    title: "Creating Packaging with Purpose.",
    description:
      "To understand customer requirements and develop practical corrugated packaging solutions through careful design, attention to quality and dependable service.",
    checkpoints: [
      "Deep understanding of client product protection",
      "Custom dimensioning and optimized flute selection",
      "Rigorous dimensional and structural inspection",
      "Reliable delivery schedules and on-demand supply",
      "Transparent communication from inquiry to dispatch",
    ],
  },
};
