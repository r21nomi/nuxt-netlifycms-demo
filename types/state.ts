import { Blog, Page, SiteInfo } from "~/types/entity";

export interface RootState {
    version: string;
}

export interface ContentState {
    blogPosts: Blog[];
    allPages: Page[];
    siteInfo: SiteInfo[];
}
