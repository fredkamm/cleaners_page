import { FiMapPin, FiPhone } from "react-icons/fi";
import {
  GiBroom,
  GiVacuumCleaner,
  GiPostOffice,
  GiFamilyHouse,
  GiTrashCan,
  GiBathtub,
} from "react-icons/gi";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  // {
  //   name: "about",
  //   href: "about",
  // },
  {
    name: "services",
    href: "services",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// Services
export const services = [
  {
    icon: <GiFamilyHouse />,
    name: "House Cleaning",
    description:
      "Will travel to your home to clean while you are at work, so you can come home to a clean home. All homes must be located in Bucks County area to be considered",
  },
  {
    icon: <GiPostOffice />,
    name: "Office Cleaning",
    description:
      "Will clean small office spaces that are also located in the Bucks County area",
  },
  {
    icon: <GiVacuumCleaner />,
    name: "Vacuuming",
    description:
      "Services include vacuuming carpets",
  },
  {
    icon: <GiBroom />,
    name: "Sweeping",
    description:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ",
  },
  {
    icon: <GiBathtub />,
    name: "Bathroom Cleaning",
    description:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ",
  },
  {
    icon: <GiTrashCan />,
    name: "Trash Collecting",
    description:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ",
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
