<template>
    <form
            class="contactForm"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
    >
        <input type="hidden" name="form-name" value="contact" />
        <label>
            <input type="text" v-model="subject" name="subject" />
        </label>
        <label>
            <textarea v-model="message" name="message" />
        </label>
        <button>Submit</button>
    </form>
</template>
<script>
    export default {
        name: "ContactForm",
        data () {
            return {
                subject: "",
                message: ""
            }
        }
    }
</script>

<style scoped>
    .contactForm {
        display: flex;
        flex-direction: column;
    }
</style>
