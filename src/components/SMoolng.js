import SMenu from './SMenu'

export default {
  name: 'SMoolng',
  props: {
    pname: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      sname: name
    }
  },
  created () {
    // console.log('-> SMoolng created : ', this.$props.pname)
    // this.$data.age = this.$props.aname
  },
  mounted () {
    // console.log('-> SMoolng mounted : ', this.$props.pname)
  },
  render () {
    // console.log('->SMoolng render : ', this.$props.pname)
    let name = this.$props.pname
    console.log('SMoolng render', name)
    // const mkeyprop = {
    //   props: {
    //     sage: 1,
    //     skey: name
    //   },
    //   on: {
    //     blur () {
    //       return {}
    //     }
    //   },
    //   ref: 'xxxxxxRef'
    // }
    return (
      <SMenu {...{moolngKey: '33333'}}></SMenu>
    )
  },
  watch: {
    name (val) {
      console.log(val)
    }
  }
}
