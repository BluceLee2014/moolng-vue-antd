<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']"
                :style="{ height: '100%', borderRight: 0 }">
            <a-sub-menu v-for="m in menuData" :key="m.id" :title="m.title">
                <span slot="title"><a-icon :type="m.icon"/>{{m.title}}</span>
                <a-menu-item v-for="subNote in m.subList"
                             :key="'{uri:\''+subNote.uri + '\',routerName:\''+subNote.routerName + '\'}'"
                             v-on:click="two">
                    {{subNote.title}} - {{subNote.uri}}
                    <router-link :to="subNote.uri"></router-link>
                    <!--                            <a href="https://www.baidu.com" target="_blank"></a>-->
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </a-layout-sider>
</template>

<script>
    export default {
        name: "MoolngMenu",
        data() {
            return {
                menuData: [
                    {
                        id: 1,
                        icon: 'user',
                        title: 'subnav 1',
                        subList: [
                            {
                                id: 2,
                                icon: 'user',
                                title: 'option1',
                                uri: '/r1',
                                routerName: 'R1'
                            },
                            {
                                id: 3,
                                icon: 'user',
                                title: 'option2',
                                uri: '/r2'
                            },
                            {
                                id: 4,
                                icon: 'user',
                                title: 'option3',
                                uri: '/r3'
                            }
                        ]
                    },
                    {
                        id: 5,
                        icon: 'laptop',
                        title: 'subnav 2',
                        subList: []
                    },
                    {
                        id: 6,
                        icon: 'notification',
                        title: 'subnav 3',
                        subList: []
                    }
                ]
            }
        },
        methods: {
            two(e) {
                let val = e.key
                console.log(val)
                console.log(eval("(" + val + ")"))
                // console.log(this.$route)
            },
            onOpenChange(openKeys) {
                console.log(openKeys)
                // const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
                // if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                //     this.openKeys = openKeys;
                // } else {
                //     this.openKeys = latestOpenKey ? [latestOpenKey] : [];
                // }
            },
            titleClick(e) {
                console.log('titleClick', e);
            },
            handleClick(e) {
                console.log('click', e);
                console.log(this.$route)
            },
        },
        watch: {
            openKeys(val) {
                console.log('openKeys', val);
            },
        },
    }
</script>

<style scoped>

</style>
