<template>
    <div class="layout">
        <div class="header">
            <n-link class="logo" to="/">▲</n-link>
        </div>
        <nuxt class="content" />
        <div class="footer">
            <p>
                <!-- This is not an n-link because the NetlifyCMS admin page is static.
                If you make it an n-link, you'll get a "Page could not be found" when
                you click it. -->
                <a href="/admin">NetlifyCMS Admin Login</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    components: {},
};
</script>

<style scoped lang="stylus">
.layout
    max-width 600px
    margin-left auto
    margin-right auto
    height 100vh
    padding 40px 20px 10px 20px

.header
    display flex
    flex-direction row
    align-items center
    justify-content center
    width 100%

.content
    margin-top 40px
    margin-bottom 40px

.footer
    background-color whitesmoke
    width 100%
    display flex
    flex-direction row
    justify-content space-between

.footer > *
    padding 20px

.logo
    display block
    margin 0
    padding 0

.button--green
    display inline-block
    border-radius 4px
    border 1px solid #3b8070
    color #3b8070
    text-decoration none
    padding 10px 30px

.button--green:hover
    color #fff
    background-color #3b8070

.button--grey
    display inline-block
    border-radius 4px
    border 1px solid #35495e
    color #35495e
    text-decoration none
    padding 10px 30px
    margin-left 15px

.button--grey:hover
    color #fff
    background-color #35495e
</style>
