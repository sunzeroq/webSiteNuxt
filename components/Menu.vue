<template>
	<div class="left-side">
		<div class="side-wrapper">
			<div class="side-title">Lasted</div>
			<div class="side-menu">
				<!-- TODO: 
				a link refactoring to `navigateTo()` -->
				<a
					v-for="(item, index) in noteList"
					:key="index"
					:href="item._path"
					>{{ item.title }}</a
				>
			</div>
		</div>

		<div class="side-wrapper">
			<div class="side-title">CSS Lab</div>
			<div class="side-menu">
				<a href="#">Three.js</a>
			</div>
		</div>
		<div class="side-wrapper">
			<div class="side-title">GitHub Demo</div>
			<div class="side-menu">
				<a href="#">Custom Clip</a>
				<a href="#">LowCode</a>
			</div>
		</div>
		<div class="side-wrapper">
			<div class="side-title">Index</div>
			<div class="side-menu">
				<a href="#">笔记索引</a>
				<a href="#">Demo索引</a>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { data: noteList } = await useAsyncData("navigation", () =>
		fetchContentNavigation()
	)
</script>

<style lang="scss">
	.left-side {
		flex-basis: 200px;
		border-right: 1px solid var(--border-color);
		padding: 26px;
		overflow: auto;
		flex-shrink: 0;
		@media screen and (max-width: 945px) {
			display: none;
		}
	}

	.side-wrapper + .side-wrapper {
		margin-top: 20px;
	}

	.side-title {
		color: var(--inactive-color);
		margin-bottom: 14px;
	}

	.side-menu {
		display: flex;
		flex-direction: column;
		white-space: nowrap;
		a {
			text-decoration: none;
			color: var(--theme-color);
			display: flex;
			align-items: center;
			font-weight: 400;
			padding: 10px;
			font-size: 14px;
			border-radius: 6px;
			transition: 0.3s;
			&:hover {
				background-color: var(--hover-menu-bg);
			}
		}
		svg {
			width: 16px;
			margin-right: 8px;
		}
	}
</style>
