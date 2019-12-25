<template>
    <div>
        <h1>Router 03 {{mq}}</h1>
<!--        <q-moolng :aname=mq></q-moolng>-->
<!--        <Router02></Router02>-->
        <m-button name="测试按钮123" type="danger" icon="check"></m-button>
    </div>
</template>

<script>
    // import QMoolng from "./QMoolng";

    import MButton from "./es/MButton";

    // import Router02 from "./Router02";


    export default {
        name: 'Router03',
        components: {
            // QMoolng,
            MButton
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
