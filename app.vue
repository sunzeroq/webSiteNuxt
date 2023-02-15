<template>
	<NuxtPage />
</template>
<style lang="scss">
	@import "@/assets/style/global.scss";

	:root {
		--theme-bg-color: rgba(16 18 27 / 40%);
		--border-color: rgba(113 119 144 / 25%);
		--theme-color: #f9fafb;
		--inactive-color: rgb(113 119 144 / 78%);
		--body-font: "Poppins", sans-serif;
		--hover-menu-bg: rgba(12 15 25 / 30%);
		--content-title-color: #999ba5;
		--content-bg: rgb(146 151 179 / 13%);
		--button-inactive: rgb(249 250 251 / 55%);
		--dropdown-bg: #21242d;
		--dropdown-hover: rgb(42 46 60);
		--popup-bg: rgb(22 25 37);
		--search-bg: #14162b;
		--overlay-bg: rgba(36, 39, 59, 0.3);
		--scrollbar-bg: rgb(1 2 3 / 40%);
		--scrollbar-bg-hover: rgb(1 2 3 / 60%);
	}

	body {
		font-family: var(--body-font);
		background-image: url("https://wallpapershome.com/images/wallpapers/macos-big-sur-1280x720-dark-wwdc-2020-22655.jpg");

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
