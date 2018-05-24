<template>
    <div class="pop-mask" :class="{show: showSlider}" @click.stop="toggleShow">
        <div class="components-slide-menu" @click.stop>
            <!-- slider顶部关闭菜单及头像部分 BEGIIN -->
            <div class="slide-menu-header">
                <!-- 头像部分 BEGIN -->
                <div class="menu-header-user">
                    <img class="menu-header-image" src="~assets/images/icon.jpg" alt="Evan's Avatar">
                </div>
                <!-- 头像部分 END -->
                <!-- 关闭按钮 BEGIN -->
                <button class="menu-header-button" @click.stop="toggleShow">
                    &times;
                </button>
                <!-- 关闭按钮 END -->
                <!-- 头部菜单邮箱 BEGIN -->
                <div class="menu-header-dropdown slide-menu-item slider-dropdown font-lightgrey">
                    <span>skcy@vip.qq.com</span>
                    <i class="iconfont icon-arrow-down"></i>
                </div>
                <!-- 头部菜单邮箱 END -->
            </div>
            <!-- slider顶部关闭菜单及头像部分 END -->

            <!-- slider下面菜单部分 BEGIN -->
            <nav class="slide-menu-list">
                <!-- 头部菜单的子菜单项 BEGIN -->
                <nav class="slide-menu-sublist">
                    <a class="slide-menu-subitem" href="mailto:skcy@vip.qq.com">
                        <i class="iconfont slider-menu-icon icon-git"></i>
                        <span>Email Me</span>
                    </a>
                    <a class="slide-menu-subitem" href="//iskcy.com">
                        <i class="iconfont slider-menu-icon icon-git"></i>
                        <span>iskcy.com</span>
                    </a>
                </nav>
                <!-- 头部菜单的子菜单项 END -->
                <!-- 正常菜单项 BEGIN -->
                <a class="slide-menu-item" :class="{'active':  showSub === 0}" href="javascript: void(0);" @click="switchMenu(0)">
                    <i class="iconfont slider-menu-icon icon-git"></i>
                    <span>主页</span>
                </a>
                <!-- 子菜单项 BEGIN -->
                <nav class="slide-menu-sublist" :class="{'show': showSub === 0}">
                    <router-link to="/" class="slide-menu-subitem" :class="{'active':  showSub === 0}">
                        <i class="iconfont icon-git"></i>
                        <span>Email Me</span>
                    </router-link>
                </nav>
                <!-- 子菜单项 END -->
                <!-- 正常菜单项 END -->
                <!-- 菜单分割线 BEGIN -->
                <a href="javascript:void(0);" class="slide-divider"></a>
                <!-- 菜单分割线 END -->
                <!-- 不包含图标的菜单项 BEGIN -->
                <a href="javascript:void(0);" class="slide-menu-item friends-links">友情链接</a>
                <!-- 不包含图标的菜单项 END -->
            </nav>
            <!-- slider下面菜单部分 END -->
        </div>
    </div>
</template>

<script>
import { ModalHelper } from "~/assets/utils/extends";
export default {
    name: 'slide-menu',
    props: {
        value: Boolean
    },
    data(){
        return {
            showSub: null
        };
    },
    computed: {
        showSlider: {
            get(){
                return this.value;
            },
            set(val){
                this.$emit('input', val);
            }
        }
    },
    // 禁止背景滑动有BUG，该方案与顶部蓝背景变色冲突
    // watch: {
    //     showSlider(val){
    //         if(val){
    //             console.log(123456);
    //             ModalHelper.afterOpen();
    //         }else{
    //             ModalHelper.beforeClose();
    //         }
    //     }
    // },
    methods: {
        toggleShow(){
            this.showSlider = !this.showSlider;
        },

        switchMenu(index){
            this.showSub = this.showSub !== index ? index : null;
        }
    }
}
</script>


<style lang="scss">
    @import './style';
</style>
