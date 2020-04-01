import Vue from "vue";
import Vuex from "vuex";
import { ContentState } from "~/types/state";
import { Blog, Page, SiteInfo } from "~/types/entity";
Vue.use(Vuex);

export const state = (): ContentState => ({
    blogPosts: [],
    allPages: [],
    siteInfo: [],
});

export const mutations = {
    SET_POSTS(state: ContentState, data: Blog[]) {
        state.blogPosts = data;
    },
    SET_PAGES(state: ContentState, data: Page[]) {
        state.allPages = data;
    },
    SET_INFO(state: ContentState, data: SiteInfo[]) {
        state.siteInfo = data;
    },
};

export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch("getSiteInfo");
        await dispatch("getBlogPosts");
        await dispatch("getPages");
    },
    async getBlogPosts({ commit }) {
        const context = await require.context(
            "~/content/blog/",
            false,
            /\.json$/
        );

        const searchposts = await context.keys().map((key) => ({
            ...context(key),
            _path: `/blog/${key.replace(".json", "").replace("./", "")}`,
        }));

        commit("SET_POSTS", searchposts.reverse());
    },
    async getPages({ commit }) {
        const context = await require.context(
            "~/content/pages/",
            false,
            /\.json$/
        );

        const pages = await context.keys().map((key) => ({
            ...context(key),
            _path: `/page/${key.replace(".json", "").replace("./", "")}`,
        }));

        commit("SET_PAGES", pages);
    },
    getSiteInfo({ commit }) {
        const info = require("~/content/setup/info.json");
        commit("SET_INFO", info);
    },
};
