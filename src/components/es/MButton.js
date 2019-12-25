import Button from "ant-design-vue/es/button";

export default {
    name: 'MButton',
    props: {
        type: {
            type: String
        },
        name: {
            type: String
        },
        icon: {
            type: String
        }
    },
    data() {
        return {
            title: ''
        }
    },
    created() {
        console.log('-> SMenu created : ', this.$props)
        // this.$data.age = this.$props.aname
    },
    mounted() {
        // console.log('-> SMoolng mounted : ', this.$props.pname)
    },
    render() {
        const {type, name, icon} = this
        console.log(this)
        console.log(type, name, icon)
        let kname = this.$props.name
        console.log(kname)
        const props = {
            type: type,
            icon: icon
        }

        return (
            <Button {...{props}}>{name}</Button>
        )
    },
    watch: {
        name(val) {
            console.log(val)
        }
    }
}
