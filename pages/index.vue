<template>
	<NuxtLayout>
		<div class="content">
			<NuxtLink to="/about">About</NuxtLink>
			<NuxtLink to="/demo">demo</NuxtLink>
			
		</div>
	</NuxtLayout>
</template>

<script>

export default {
    name: "index"
};
</script>

<style lang="scss">
.content {
	position: relative;
	flex: 1;
	margin: 8px;
	padding: 8px;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	overflow-x: auto;
}
</style>