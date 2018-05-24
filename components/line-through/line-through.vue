<template>
    <div class="line-through">
        <fieldset>
            <legend>
                <slot>
                    <span class="font-empty" v-text="message"></span>
                </slot>
            </legend>
        </fieldset>
    </div>
</template>

<style lang="scss">
    @import "./style";
</style>
<script>
    export default
    {
        name: "line-through",

        props:
        {
            message:
            {
                type: String,
                default: "没有更多数据了哦"
            }
        }
    };
</script>
