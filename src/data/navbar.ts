import { AccessLevel } from "../@types/access-level";

type NavItem = {
  name: string;
  url: string; // If '#' specified, target will be blanked
  accessLevel: AccessLevel[];
};

type NavBar = {
  headItem: NavItem;
  subItems?: NavItem[];
};

export const navbar: NavBar[] = [
  {
    headItem: {
      name: "Home",
      url: "/",
      accessLevel: ["anyone"],
    },
  },
  {
    headItem: {
      name: "General Tasks",
      url: "#",
      accessLevel: ["clerk", "admin"],
    },
    subItems: [
      {
        name: "Create User",
        url: "/create-user",
        accessLevel: ["admin"],
      },
      {
        name: "Create Investigation",
        url: "/create-investigation",
        accessLevel: ["clerk", "admin"],
      },
      {
        name: "Create Investigation Inspector",
        url: "/create-investigation-inspector",
        accessLevel: ["admin"],
      },
      {
        name: "Update Investigations",
        url: "/update-investigations",
        accessLevel: ["clerk", "admin"],
      },
      {
        name: "Update Suspectors",
        url: "/update-suspectors",
        accessLevel: ["admin"],
      },
      {
        name: "Update Formal Inquiries",
        url: "/update-formal-inquiries",
        accessLevel: ["clerk", "admin"],
      },
      {
        name: "Update Interim Reports",
        url: "/update-interim-reports",
        accessLevel: ["clerk", "admin"],
      },
      {
        name: "Update Charge Sheets",
        url: "/update-charge-sheets",
        accessLevel: ["clerk", "admin"],
      },
    ],
  },
  {
    headItem: {
      name: "Advanced Search",
      url: "/advanced-search",
      accessLevel: [
        "admin",
        "clerk",
        "divisional-superintendent",
        "deputy-postmaster-general",
      ],
    },
  },
  {
    headItem: {
      name: "Detailed Reports",
      url: "/detailed-reports",
      accessLevel: ["admin"],
    },
  },
];
