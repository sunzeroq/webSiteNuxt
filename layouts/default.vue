<template>
	<div class="container">
		<Header></Header>
		<div class="container-main">
			<Menu></Menu>
			<slot></slot>
		</div>
		<div
			class="dark-light"
			@click="switchDark"
		>
			<svg
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.5"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
			</svg>
		</div>
	</div>
</template>

<script setup>
	import Header from "@/components/Header.vue"
	import Menu from "@/components/Menu.vue"
	const switchDark = () => {
		document.body.classList.toggle("light-mode")
	}
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
	.dark-light {
		position: fixed;
		bottom: 50px;
		right: 30px;
		background-color: var(--dropdown-bg);
		box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
		padding: 8px;
		border-radius: 50%;
		z-index: 3;
		cursor: pointer;
		svg {
			width: 24px;
			flex-shrink: 0;
			fill: #ffce45;
			stroke: #ffce45;
			transition: 0.5s;
		}
	}
	.light-mode {
		.dark-light svg {
			fill: transparent;
			stroke: var(--theme-color);
		}
		.profile-img {
			border: 2px solid var(--theme-bg-color);
		}
		.content-section ul {
			background-color: var(--theme-bg-color);
		}
		.pop-up__title {
			border-color: var(--theme-color);
		}
		.dropdown.is-active ul {
			background-color: rgb(255 255 255 / 94%);
		}
	}

	body.light-mode:before,
	body.light-mode .video-bg:before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: linear-gradient(
			180deg,
			rgba(255, 255, 255, 0.72) 0%,
			rgb(255 255 255 / 45%) 100%
		);
		backdrop-filter: saturate(3);
	}
</style>
