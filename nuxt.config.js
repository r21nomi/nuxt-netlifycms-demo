import path from "path";
import glob from "glob";
import pkg from "./package";
import info from "./content/setup/info";

const dynamicRoutes = getDynamicPaths({
    "/blog": "blog/*.json",
    "/page": "page/*.json",
});

console.log(dynamicRoutes);

export default {
    mode: "universal",
    head: {
        title: info.sitename,
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: pkg.description,
            },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    loading: { color: "#fff" },
    css: ["@/assets/style/common.styl"],
    plugins: [],
    buildModules: ["@nuxtjs/eslint-module", "@nuxt/typescript-build"],
    modules: ["@nuxtjs/markdownit", "@nuxtjs/axios", "nuxt-webfontloader"],
    webfontloader: {
        google: {
            families: ["Noto+Sans+JP:400,700,900&display=swap&subset=japanese"],
        },
    },
    markdownit: {
        injected: true,
        preset: "default",
        breaks: true,
        html: true,
    },
    axios: {},
    build: {
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|ts|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                });
            }
        },
    },
    generate: {
        routes: dynamicRoutes,
    },
};

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
    return [].concat(
        ...Object.keys(urlFilepathTable).map((url) => {
            const filepathGlob = urlFilepathTable[url];
            return glob
                .sync(filepathGlob, { cwd: "content" })
                .map(
                    (filepath) => `${url}/${path.basename(filepath, ".json")}`
                );
        })
    );
}
