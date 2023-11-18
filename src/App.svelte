<script lang="ts">
	// @ts-ignore
	import * as THREE from 'three';
	// @ts-ignore
	import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

	const scene = new THREE.Scene();


	const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 20 );
	camera.position.z = 2.5;

	const ambientLight = new THREE.AmbientLight( 0xffffff );
	scene.add( ambientLight );

	const pointLight = new THREE.PointLight( 0xffffff, 15 );
	camera.add( pointLight );
	scene.add( camera );


	var loader = new OBJLoader();
	loader.load( "objfile.obj", function ( object: any ) {
		
		object.scale.setScalar(100 )
  		scene.add( object );
	},
	// called when loading is in progresses
	function ( xhr: any ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error: any ) {

		console.log( 'An error happened' );

	});
	
	const renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	renderer.render( scene, camera );



	import doraemong from "./assets/doraemong.png"

	function gotoTop() {
		scrollToTop(500)
	}

	function scrollToTop(scrollDuration: number) {
    	var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
    	    if ( window.scrollY != 0 ) {
	            window.scrollBy( 0, scrollStep );
        	}
        	else clearInterval(scrollInterval); 
    	},15);
	}
</script>

<div class="menubar">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<p class="top" on:click={gotoTop}>Top</p>
</div>
<h1 class="relative top(125px) c(black) font-size(50px)">Me new : 매일 새로운 메뉴를!</h1>
<img src={doraemong} class="width(100px) absolute left(150px)" alt="">
<img src={doraemong} class="width(100px) absolute right(150px) reverse" alt="">
<p>asd</p>


<style>
	.top {
		will-change: filter;
	}
	.top:hover {
		filter: drop-shadow(0 0 5px #ffffff);
		cursor: pointer;
	}
	.menubar { 
		filter: drop-shadow(0 0 3em #000000);
		position: fixed;
  		top: 0;
  		left: 0;
  		right: 0;
		height: 50px;
		width: 100%;
		display: flex;
		background-color: #242424;
		align-items: center;
		justify-content: space-around;
	}
	.reverse {
		transform: rotate(90deg);
        transform: scaleX(-1);   
	}
</style>