<template lang="html">
    <div class="post">
        <h1 class="title">{{ title }}</h1>
        <p class="date">Posted by {{ author }} on {{ date }}</p>
        <div class="body" v-html="$md.render(body)" />
        <p class="back">
            <a class="back-link" @click="$router.back()">Back</a>
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
    components: {},
})
export default class BlogPage extends Vue {
    private date: string = "";
    private body: string = "";
    private title: string = "";
    private author: string = "";

    async asyncData({ params }) {
        const post = await import(
            `~/content/blog/${(params as any).slug}.json`
        );
        return {
            date: post.date,
            body: post.body,
            title: post.title,
            author: post.author,
        };
    }
}
</script>

<style scoped lang="stylus">
.back, .date, .body
    padding-top 10px

.back-link
    text-decoration underline
    color #3b8070
    cursor pointer

.date
    color darkgray

.post
    background-color whitesmoke
    padding 20px
</style>
