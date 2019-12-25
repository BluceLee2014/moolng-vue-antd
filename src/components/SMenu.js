export default {
  name: 'SMenu',
  moolngKey: '',
  props: {
    theme: {
      type: String,
      required: false
    },
    skey: {
      type: String
    }
  },
  data () {
    return {
      title: ''
    }
  },
  created () {
    console.log('-> SMenu created : ', this.$props)
    // this.$data.age = this.$props.aname
  },
  mounted () {
    // console.log('-> SMoolng mounted : ', this.$props.pname)
  },
  render () {
    console.log(this.moolngKey)
    console.log('->SMenu render this = : ', this)
    console.log('->SMenu render props = : ', this.$props)
    let key = this.$props.skey
    console.log('SMenu render key = ', key)
    return (
      <div>
        SMenu key = {key}
      </div>
    )
  },
  watch: {
    name (val) {
      console.log(val)
    }
  }
}
