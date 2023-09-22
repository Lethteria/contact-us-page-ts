export interface ILink {
    text: string
    href: string
}
export interface INavLink extends ILink {
    subLinks?: ILink[]
}
export interface INavColumn {
    title: string
    links: ILink[]
}