<template>
    <div>
        <h1>s-moolng</h1>
        <s-moolng :pname="age"></s-moolng>
    </div>
</template>

<script>

    import SMoolng from "./SMoolng";

    export default {
        name: "QMoolng",
        props: {
            aname: {
                type: String
            }
        },
        data() {
            return {
                age: null
            }
        },
        components: {
            SMoolng
        },
        watch: {
            set aname(val) {
                console.log(val)
            }
        },
        created() {
            console.log('-> created : ', this.$props.aname)
            this.$data.age = this.$props.aname
        },
        mounted() {
            console.log('-> mounted : ', this.$props.aname)
        },
        render() {

            return ({})
        }
    }
</script>

<style scoped>

</style>
