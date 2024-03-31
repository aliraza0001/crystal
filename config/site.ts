export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Crystal Pakistan App Test Site",
  description: `create a website that includes the menu of one store, with the possibility of saving user’s favourite meals by using a free public api to fetch the meals of this store.`,
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Menu",
      href: "/menu",
    },
    {
      label: "My Favourites",
      href: "/my-favourites",
    },
    {
      label: "Meal Generator",
      href: "/meal-generator",
    },
    {
      label: "Meals Page",
      href: "/meals-page",
    },
    {
      label: "About Me",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
