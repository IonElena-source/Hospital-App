<template>


   <div class="Home">
		<SideBar></SideBar>
		<div class="contentm">
			
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
		
	</div>

</template>

<script>
import SideBar from "./SideBar";
export default {
  name: 'Home',
  components: { SideBar },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home {
	display: grid;
	grid-template-columns: 1fr 5fr;
	background-color: rgb(58, 138, 238);
	height: 100vh;
	width: 100vw;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
	transform: translateX(-2em);
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s ease;
}
.contentm {
    background-color: white;
	border-radius: 10px;
	width: 92.8vw;
	height: 96.5vh;

	margin: 2px 10px 3px 2px;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
	transform: translateX(-2em);
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s ease;
}
</style>
