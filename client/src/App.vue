<template>
  <div id="app">
		<transition name="fade" mode="out-in">
			<router-view v-bind:add="notify"></router-view>
		</transition>
	</div>
</template>

<script>

export default {
  name: 'App',
};
</script>
