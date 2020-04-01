<template>
    <form
        class="contactForm"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
        <!-- Avoid the error "Failed to execute 'appendChild' on 'Node'". -->
        <!-- https://qiita.com/yahsan2/items/a70c4c8f617ee9b1f9ff -->
        <input type="hidden" name="form-name" value="contact" />
        <label>
            <span class="label">Your Name</span>
            <input v-model="name" type="text" name="name" placeholder="name" />
        </label>
        <label>
            <span class="label">Your Email</span>
            <input
                v-model="email"
                type="text"
                name="email"
                placeholder="email"
            />
        </label>
        <label>
            <span class="label">Message</span>
            <textarea v-model="message" name="message" placeholder="message" />
        </label>
        <button type="submit">Submit</button>
    </form>
</template>

<script lang="ts">
export default {
    name: "ContactForm",
    data() {
        return {
            name: "",
            email: "",
            message: "",
        };
    },
};
</script>

<style scoped lang="stylus">
.contactForm
    width 100%
    display flex
    flex-direction column

.label
    display block
    font-size 12px

label
    &:nth-child(n + 2)
        margin-top 20px

input, textarea
    width 100%
    padding 10px
    box-sizing border-box
    margin-top 5px

button
    width 100px
    margin 20px auto 0
    padding 10px
    box-sizing border-box
</style>
