<template>
    <section class="no-data list-no-data">
        <div class="erro-msg">
            <svg v-if="iconClass" class="icon no-data-icon" aria-hidden="true">
                <use :xlink:href="'#icon-' + iconClass"></use>
            </svg>
            <span class="erro-msg-word" v-text="message"></span>
        </div>
    </section>
</template>

<style lang="less">
    @import "./style";
</style>

<script>
    export default
    {
        name: "no-data",

        props:
        {
            iconClass: String,      // 无数据时图标样式
            message:                // 无数据时提示语
            {
                type: String,
                default: "暂无数据哦~"
            }
        }
    };
</script>