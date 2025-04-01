import { FaBloggerB, FaHome, FaProjectDiagram } from "react-icons/fa";
import { LuText } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";

export type siteConfig = typeof siteConfig;
export type NavBarConfig = typeof navBarConfig;

export const siteConfig = {
  //  Update accordingly to your specifications
  name: "John Doe",
  longName: "John Doe - Software Engineer | tech Enthusiast",
  description:
    "A software engineer with a passion for building web applications.",
  url: "https://johndoe.dev",
  creator: "@johnDoe",
  ogImgUrl: "/img/opengraph-image.jpg",
};

export const navBarConfig = [
  { name: "Home", href: "/", icon: <FaHome /> },
  { name: "About", href: "/about", icon: <LuText /> },
  { name: "Projects", href: "/projects", icon: <FaProjectDiagram /> },
  { name: "Contact", href: "/contact", icon: <RiContactsLine /> },
  { name: "Blog", href: "/blog", icon: <FaBloggerB /> },
];

export const homePageConfig = {
  title: "Jhon",
};

export const aboutPageConfig = {
  name: siteConfig.name,
  titles: "Software Engineer | Tech Enthusiast",
  paragraphOne: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              odit quae dicta maxime excepturi, vel corporis perspiciatis atque
              suscipit adipisci modi unde minus, maiores ea impedit debitis iste
              beatae pariatur.`,
  // You can leave paragraph two blank if not needed
  paragraphTwo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              odit quae dicta maxime excepturi, vel corporis perspiciatis atque
              suscipit adipisci modi unde minus, maiores ea impedit debitis iste
              beatae pariatur.`,
};
