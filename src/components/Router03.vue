<template>
    <div>
        <h1>Router 03 {{mq}}</h1>
        <q-moolng :aname=mq></q-moolng>
<!--        <Router02></Router02>-->
    </div>
</template>

<script>
    import QMoolng from "./QMoolng";

    // import Router02 from "./Router02";


    export default {
        name: 'Router03',
        components: {
            QMoolng
        },
        data() {
            return {
                mq: 'xxxx'
            }
        }
    }
</script>

<style>

</style>
