<template>
    <a-layout id="components-layout-demo-top-side-2">
        <a-layout-header class="header">
            <div class="logo"/>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']"
                        :style="{ height: '100%', borderRight: 0 }">
                    <a-sub-menu v-for="m in menuData" :key="m.id" @click="getMenuInfo" :title="m.title">
                        <span slot="title"><a-icon :type="m.icon"/>{{m.title}}</span>
                        <a-menu-item v-for="subNote in m.subList" :key="subNote.id" ref="moolngMenu" :value="subNote.uri">{{subNote.title}}
<!--                            <router-link :to="subNote.uri"></router-link>-->
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                <a-tabs hideAdd v-model="activeKey" type="editable-card" @edit="onEdit">
                    <a-tab-pane v-for="pane in tabsData" :tab="pane.title" :key="pane.key" :closable="pane.closable">
                        {{pane.content}}
                        <input ref="moolngInput" v-on:click="mtest"/>
                        <router-link to="/index">跳转到指定Tab</router-link>
                        <router-view :name="pane.routerName"></router-view>
                    </a-tab-pane>
                </a-tabs>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    export default {
        name: 'Layout',
        data() {
            const tabsData = [
                {title: 'Tab 1', content: 'Content of Tab 1', key: '-1'},
                {title: 'Tab 2', content: 'Content of Tab 2', key: '-2'},
            ];
            const showTabsData = {}
            const menuInfo = {
                id: 0,
                name: '',
                uri: ''
            }
            return {
                collapsed: false,
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
                                uri: '/index',
                                routerName: 'MoolngIndex'
                            },
                            {
                                id: 3,
                                icon: 'user',
                                title: 'option2'
                            },
                            {
                                id: 4,
                                icon: 'user',
                                title: 'option3'
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
                ],
                activeKey: tabsData[0].key,
                tabsData,
                showTabsData,
                menuInfo,
                newTabIndex: 3
            };
        },
        methods: {
            mtest() {
                console.log(this)
            },
            getMenuInfo(e) {
                console.log(e)
                console.log("------getMenuInfo-------")
                console.log(this.$refs)
                const obj = e.item.$slots
                console.log(obj)
                const a = obj['default']
                console.log(a[0])
                console.log(a[0].text)
                // console.log(this.tabsData)
                // console.log(this)
                let id = e.key
                let name = a[0].text
                this.menuInfo = {id: id, name: name}
                this.addTag()
            },
            callback(key) {
                console.log(key);
            },
            onEdit(targetKey, action) {
                this[action](targetKey);
            },
            getShowTabs() {
                let menuInfo = this.menuInfo
                console.log('----------getShowTabs start-----------')
                console.log(menuInfo)
                console.log(this.showTabsData)
                console.log('----------getShowTabs end-----------')
                // this.showTabsData[menuInfo.id] = menuInfo
                if (this.showTabsData[menuInfo.id] == undefined) {
                    this.showTabsData[menuInfo.id] = menuInfo
                    return false
                }
                return true
            },
            addTag() {
                let menuInfo = this.menuInfo
                console.log(menuInfo)
                if (this.getShowTabs()) {
                    this.activeKey = menuInfo.id;
                    return
                }
                const panes = this.tabsData;
                const activeKey = menuInfo.id
                panes.push({
                    title: menuInfo.name,
                    content: `Content of new Tab ${activeKey}`,
                    key: activeKey,
                    routerName: 'MoolngIndex'
                });
                this.tabsData = panes;
                this.activeKey = activeKey;
                // this.$router.replace('/list')
            },
            add() {
                const panes = this.tabsData;
                const activeKey = `newTab${this.newTabIndex++}`;
                panes.push({
                    title: `New Tab ${activeKey}`,
                    content: `Content of new Tab ${activeKey}`,
                    key: activeKey,
                });
                this.tabsData = panes;
                this.activeKey = activeKey;
            },
            remove(targetKey) {
                let activeKey = this.activeKey;
                let lastIndex;
                this.panes.forEach((pane, i) => {
                    if (pane.key === targetKey) {
                        lastIndex = i - 1;
                    }
                });
                const panes = this.panes.filter(pane => pane.key !== targetKey);
                if (panes.length && activeKey === targetKey) {
                    if (lastIndex >= 0) {
                        activeKey = panes[lastIndex].key;
                    } else {
                        activeKey = panes[0].key;
                    }
                }
                this.panes = panes;
                this.activeKey = activeKey;
            },
        }
    }
</script>

<style scoped>
    #components-layout-demo-top-side-2 .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>
