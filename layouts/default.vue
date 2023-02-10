<template>
  <div class="container">
    <Header></Header>
    <div class="container-main">
        <Menu></Menu>
        <slot></slot>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue';

export default {
    name: "index",
    components: { Header, Menu }
};
</script>
<style lang="scss">
.container {
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: $primary;
	height: 96vh;
	width: 90vw;
	border-radius: 24px;
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	overflow: hidden;
	color: $theme-color;
}
.container-main {
	display: flex;
	height: calc(100% - 58px);
}
</style>>