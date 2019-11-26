<template lang="pug">
  wxc-tab-bar(
    :tab-titles="tabTitles"
    :tab-styles="tabStyles"
    title-type="iconFont"
    @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected"
  )
    .item
      home
    .item
      my
</template>

<script>
import home from '@/views/home'
import my from '@/views/my'
import { WxcTabBar, WxcIcon } from 'weex-ui'

export default {
  components: {
    WxcTabBar,
    WxcIcon,
    home,
    my
  },
  data () {
    return {
      tabTitles: [
        {
          title: 'Home',
          codePoint: '\ue608'
        },
        {
          title: 'My',
          codePoint: '\ue752'
        }
      ],
      tabStyles: {
        bgColor: '#FFFFFF',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        isActiveTitleBold: true,
        width: 160,
        height: 120,
        fontSize: 24,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        iconFontSize: 50,
        iconFontMarginBottom: 8,
        iconFontColor: '#333333',
        activeIconFontColor: 'red',
        iconFontUrl: '//at.alicdn.com/t/font_501019_mauqv15evc1pp66r.ttf'
      }
    }
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      console.log(e.page)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
