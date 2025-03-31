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
  { name: "Home", href: "/" },
  { name: "About", href: "/#" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];
