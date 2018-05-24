<template>
    <div class="goto-top" v-show="isShow" @click.stop.prevent="goTop">
        <div class="goto-top-inner">
        <i class="iconfont icon-goTop"></i><br>
        顶部
        </div>
    </div>
</template>
<script>
import { throttle } from '~/assets/utils/extends';

export default{
	name: "go-top",
	props: {
		refDom: String
	},
	data () {
		return{
			isShow:false
		}
	},
	mounted () {
		console.log("comin");
		this.$nextTick(() => {
			console.log("come in");
			this.scroll = document.querySelector(this.refDom) || document;

			this.initScroll();
		});
	},
	methods:{
		initScroll(){
			this.scroll.addEventListener('scroll', throttle(this.toggleGoTop, 200, 200));
		},

		toggleGoTop(){
			let ContainerHeight = document.body.offsetHeight;
			let marginTop = this.scroll.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
			this.isShow = marginTop > ContainerHeight;
		},

		goTop () {
			var scroll = this._scroll || document.documentElement || document.body,
				timer = null;
			timer = setInterval(function () {
				if(scroll.scrollTop > 0 ) {
					scroll.scrollTop -= 60;
				}else {
					clearInterval(timer);
					timer = null;
				};
			}, 20)

		}
	}
}
</script>
<style>
    .goto-top{
        position: fixed;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        right: 15px;
        bottom: 152px;
        background-color: #151515;
        /* border-radius: 50%; */
        font-size: 22/24*1em;
		z-index: 100;
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    }
    .goto-top-inner{
        height: 50px;
        padding: 10px 0;
        line-height: 15px;
        font-size: 12px;
    }
</style>