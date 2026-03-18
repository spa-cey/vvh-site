export const COMPANY = {
  name: "VVH Construction Group",
  legal: "VVH Construction Group, LLC",
  slogan: "Built with Vision. Executed with Precision.",
  email: "info@vvh.group",
  phone: "(908) 555-0199",
  area: "NJ, NY & PA",
  hours: "Monday to Saturday, 7:00 AM to 6:00 PM",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOUNDERS = [
  {
    name: "Varun Kumar",
    role: "Principal / Co-Founder",
    icon: "HardHat" as const,
    bio: "Varun brings hands-on experience in large-scale commercial construction and field operations across the Northeast. He oversees project execution, subcontractor coordination, and quality control with a strong focus on disciplined delivery.",
  },
  {
    name: "Vishal Kumar",
    role: "Principal / Co-Founder",
    icon: "Target" as const,
    bio: "Vishal brings practical construction experience across the trades, project management, and pre-construction planning. He leads estimating, client communication, and business development with a focus on building well-scoped, well-managed projects.",
  },
  {
    name: "Humza Ahmed",
    role: "Principal / Co-Founder",
    icon: "ClipboardList" as const,
    bio: "Humza drives the operational side of VVH, coordinating scheduling, procurement, and project flow across residential and commercial work. With a hands-on approach and strong oversight of day-to-day execution, he helps ensure projects stay organized, efficient, and on track.",
  },
] as const;

export const TEAM = [
  {
    name: "Zara Khan",
    role: "Project Manager",
    icon: "ClipboardList" as const,
    bio: "Zara coordinates field operations and project timelines across active residential and commercial jobs. She works closely with subcontractors, clients, and the VVH leadership team to keep every phase of a project organized and on schedule.",
  },
  {
    name: "Sanaan Mazhar",
    role: "Technology & Systems",
    icon: "Monitor" as const,
    bio: "Sanaan manages the technology and backend systems that support VVH's operations. From digital infrastructure and workflow support to platform management and technical coordination, he helps build the systems behind the company's execution and growth.",
  },
] as const;

export const PROOF_ITEMS = [
  "Licensed & Insured",
  "NJ, NY & PA",
  "Residential & Commercial",
  "Est. 2016",
] as const;

export const CORE_VALUES = [
  "Accept Responsibility",
  "Communicate Honestly",
  "Deliver on Promises",
  "Treat Every Project Like Our Own",
  "Never Cut Corners",
  "Respect Every Trade",
  "Stay Hungry, Stay Humble",
  "Build Relationships, Not Just Buildings",
] as const;

export const SERVICES = [
  {
    id: "commercial",
    title: "Commercial Construction",
    icon: "Building2" as const,
    summary:
      "Commercial buildouts, office renovations, and tenant improvements managed with professional coordination from pre-construction through completion.",
    description:
      "Commercial buildouts, office renovations, and tenant improvements managed with professional coordination from pre-construction through completion. Our commercial team understands the unique demands of business construction: tight timelines, regulatory compliance, and the need to minimize disruption to your operations.",
  },
  {
    id: "residential",
    title: "Residential Renovations",
    icon: "Hammer" as const,
    summary:
      "Kitchen, bathroom, basement, and full-home renovation services delivered with quality workmanship, clear timelines, and attention to detail.",
    description:
      "Kitchen, bathroom, basement, and full-home renovation services delivered with quality workmanship, clear timelines, and attention to detail. From a single bathroom refresh to a complete whole-home transformation, we handle demolition, structural changes, finishes, and everything in between.",
  },
  {
    id: "ground-up",
    title: "Ground-Up Construction",
    icon: "HardHat" as const,
    summary:
      "From site preparation to final delivery, we manage new construction projects with a focus on planning, scheduling, and execution.",
    description:
      "From site preparation to final delivery, we manage new construction projects with a focus on planning, scheduling, and execution. Whether you are building a new home or developing a commercial property, our team manages every detail from permits and planning through final walkthrough.",
  },
  {
    id: "exterior",
    title: "Exterior Restoration",
    icon: "Home" as const,
    summary:
      "Siding, facade improvements, deck work, exterior repairs, and property upgrades that improve appearance, durability, and long-term value.",
    description:
      "Siding, facade improvements, deck work, exterior repairs, and property upgrades that improve appearance, durability, and long-term value. We restore and protect your property\u2019s exterior surfaces, improving curb appeal while extending their lifespan.",
  },
  {
    id: "roofing",
    title: "Roofing Services",
    icon: "Droplets" as const,
    summary:
      "Roof repair, replacement, and maintenance solutions designed to protect your property and keep projects code-compliant and weather-ready.",
    description:
      "Roof repair, replacement, and maintenance solutions designed to protect your property and keep projects code-compliant and weather-ready. From emergency leak repairs to complete roof replacements, our team delivers reliable work that stands up to demanding weather conditions.",
  },
  {
    id: "management",
    title: "General Contracting & Project Management",
    icon: "ClipboardList" as const,
    summary:
      "End-to-end coordination including budgeting, scheduling, subcontractor management, and on-site oversight to keep projects moving efficiently.",
    description:
      "End-to-end coordination including budgeting, scheduling, subcontractor management, and on-site oversight to keep projects moving efficiently. Our project managers serve as your single point of contact, coordinating all trades and ensuring every phase hits its deadline.",
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Clear Scopes & Pricing",
    icon: "DollarSign" as const,
    description:
      "We provide straightforward proposals, defined scopes, and honest pricing so you understand the work before the project begins.",
  },
  {
    title: "Reliable Project Execution",
    icon: "Clock" as const,
    description:
      "From planning to completion, we keep projects moving with disciplined scheduling, proactive coordination, and consistent communication.",
  },
  {
    title: "Quality Without Shortcuts",
    icon: "Award" as const,
    description:
      "We hold our work to a high standard and focus on details that affect durability, appearance, and long-term performance.",
  },
  {
    title: "Licensed & Insured",
    icon: "ShieldCheck" as const,
    description:
      "VVH operates professionally, responsibly, and in compliance, giving clients confidence throughout the build process.",
  },
] as const;

export const PROJECT_TYPES = [
  "Commercial Construction",
  "Residential Renovation",
  "Ground-Up Construction",
  "Exterior Restoration",
  "Roofing",
  "General Contracting",
  "Other",
] as const;
