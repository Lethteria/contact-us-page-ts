import {INavColumn, INavLink} from "../types/navigation";

export const pages: INavLink[] = [
    {href: "#",
        text: "Home"
    },
    {text: "Features",
        href: "#",
        subLinks: [{text: 'item1', href: "#"},{text: 'item2', href: "#"}]
    },
    {text: "Blog",
        href: "#"
    },
    {text: "Shop",
        href: "#",
        subLinks: [{text: 'item4', href: "#"},{text: 'item5', href: "#"},{text: 'item6', href: "#"}]
    },
    {text: "About",
        href: "#"
    },
    {text: "Contact",
        href: "#"
    }
];

export const footerNavLinks: INavColumn[] = [
    {
        title: "Company",
        links: [{href: "#", text: "About"},
                {href: "#", text: "Contact"},
                {href: "#", text: "Blogs"}]
    },
    {
        title: "Legal",
        links: [{href: "#", text: "Privacy Policy"},
                {href: "#", text: "Terms & Services"},
                {href: "#", text: "Terms of Use"},
                {href: "#", text: "Refund Policy"}]
    },
    {
        title: "Quick Links",
        links: [{href: "#", text: "Techlabs Keybox"},
                {href: "#", text: "Downloads"},
                {href: "#", text: "Forum"}]
    }
];