export interface SiteInfo {
    sitename: string;
    sitedescription: string;
}

export interface Page {
    title: string;
    body: string;
    _path: string;
}

export interface Blog {
    date: string;
    title: string;
    body: string;
    author: string;
    _path: string;
}
