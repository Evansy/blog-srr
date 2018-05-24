<template>
  <div>
    <!-- 顶部栏 BEGIN -->
    <navbar @on-more-click="toggleSlider"></navbar>
    <!-- 顶部栏 END -->

    <!-- 右侧菜单 BEGIN -->
    <slide-menu v-model="showSlider"></slide-menu>
    <!-- 右侧菜单 END -->

    <div class="page-content">
        <transition name="router-fade" mode="out-in">
            <nuxt/>
        </transition>
    </div>

    <!-- 页脚区域 BEIGN -->
    <footbar></footbar>                    
    <!-- 页脚区域 END -->
    
  </div>
</template>

<script>
import { navbar, slideMenu, footbar } from "../components/index.js";

export default {
  components: {
    navbar,
    slideMenu,
    footbar
  },
  data(){
      return {
          showSlider: false
      };
  },
  methods: {
      toggleSlider(){
          this.showSlider = !this.showSlider;
      }
  }
}
</script>

