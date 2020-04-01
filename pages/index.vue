<template lang="html">
    <div class="main">
        <div class="main-header">
            <h1>{{siteInfo.sitename}}</h1>
            <p>{{siteInfo.sitedescription}}</p>
        </div>
        <div class="posts-list">
            <h2 class="posts-list-title">Posts</h2>
            <p class="post-link" v-for="post in blogPosts"><n-link :to="post._path">{{post.title}}</n-link></p>
        </div>
        <div class="contactContainer">
            <h2 class="title">Contact</h2>
            <ContactForm/>
        </div>
    </div>
</template>

<script>
    import ContactForm from '~/components/ContactForm.vue';

    export default {
        components: {
            ContactForm
        },
        computed: {
            blogPosts() {
                return this.$store.state.blogPosts;
            },
            siteInfo() {
                return this.$store.state.siteInfo;
            }
        }
    }
</script>

<style lang="css" scoped>
    .posts-list {
        width: 100%;
        background-color: whitesmoke;
        padding: 20px;
        margin-top: 35px;
    }
    .post-link {
        padding-top: 10px;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    .main-header {
        text-align: center;
    }
    .contactContainer {
        width: 100%;
        margin-top: 40px;
    }
    .contactContainer .title {
        text-align: center;
    }
    .contactContainer .contactForm {
        margin-top: 10px;
    }
</style>
