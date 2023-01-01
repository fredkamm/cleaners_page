import { FiMapPin, FiPhone } from "react-icons/fi";

// navigation
export const navigation = [
    {
      name: "home",
      href: "home",
    },
    {
      name: "about",
      href: "about",
    },
    {
      name: "services",
      href: "services",
    },
    {
      name: "testimonials",
      href: "testimonials",
    },
    {
      name: "contact",
      href: "contact",
    },
  ];

  // contact
export const contact = [
  {
    icon: <FiPhone />,
    title: "Schedule an Appointment?",
    subtitle: "Best way to get in touch with me:",
    description: "Phone Number: xxx-xxx-xxxx",
  },
  {
    icon: <FiMapPin />,
    title: "Locations Available",
    subtitle: "Bucks County, Pennsylvania",
    description: "Willing to travel anywhere in the bucks county area",
  },
];
