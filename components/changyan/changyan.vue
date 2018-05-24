<template>
    <div id="SOHUCS" :sid="sid" ></div>
</template>
<script>
import changyan from "./cy";

export default {
    name: "discus-box",
    props: {
        sid: Number,
        require: true
    },
    mounted(){
        this.$nextTick(() => {
            // 加载畅言js
            let sohudiv = document.getElementById('SOHUCS');
            sohudiv && changyan();
        })
    }
}
</script>
