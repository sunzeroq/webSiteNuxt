<template>
	<NuxtPage />
</template>
<style lang="scss">
	@import "@/assets/style/global.scss";

	body {
		font-family: var(--body-font);
		background-image: url("@/static/screen.jpg");

		background-size: cover;
		background-position: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		@media screen and (max-width: 480px) {
			padding: 0.8em;
		}
	}

	::-webkit-scrollbar {
		width: 6px;
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: var(--scrollbar-bg);
		border-radius: 10px;

		&:hover {
			background: var(--scrollbar-bg-hover);
		}
	}
</style>
