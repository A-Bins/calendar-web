<script lang="ts">
	import doraemong from "./assets/doraemong.png"
</script>

<div class="menubar"></div>
<h1 class="relative top(125px) c(black) font-size(50px)">Me new : 매일 새로운 메뉴를!</h1>
<img src={doraemong} class="width(250px) absolute left(150px)" alt="">
<img src={doraemong} class="width(250px) absolute right(150px) reverse" alt="">

<style>
	.menubar { 
		filter: drop-shadow(0 0 3em #000000);
		position: relative;
  		top: 0;
  		left: 0;
  		right: 0;
		height: 50px;
		width: 100%;
		display: flex;
		background-color: #cccccc;
		align-items: center;
		justify-content: space-around;
	}
	.reverse {
		transform: rotate(90deg);
        transform: scaleX(-1);   
	}
</style>