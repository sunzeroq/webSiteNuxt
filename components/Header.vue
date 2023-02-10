<template>
	<div class="header">
		<div class="menu-circle">
			<p aria-label="zeroLab">&nbsp;<span class="typewriter"></span></p>
		</div>

		<div class="header-menu">
			<NuxtLink to="/">主页</NuxtLink>
			<NuxtLink class="notify" to="/notes">笔记</NuxtLink>
			<NuxtLink to="/Demo">demo</NuxtLink>
		</div>
		<div class="search-bar">
			<input type="text" placeholder="Search" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-shrink: 0;
	height: 58px;
	width: 100%;
	border-bottom: 1px solid var(--border-color);
	padding: 0 30px;
	white-space: nowrap;
	@media screen and (max-width: 480px) {
		padding: 0 16px;
	}
	&-menu {
		display: flex;
		align-items: center;
		a {
			padding: 20px 30px;
			text-decoration: none;
			color: var(--inactive-color);
			border-bottom: 2px solid transparent;
			transition: 0.3s;
			&.is-active,
			&:hover {
				color: var(--theme-color);
				border-bottom: 2px solid var(--theme-color);
			}
		}
	}
	.menu-circle {
		width: 160px;
		flex: 0 0 160px;
		@media screen and (max-width: 945px) {
			display: none;
		}
	}
	p {
		width: 200px;
		color: #8bf;
		text-align: left;
		font-family: Lato, sans-serif;
	}
	@keyframes typing {
		0%,
		27% {
			content: "";
		}
		1%,
		26% {
			content: "H";
		}
		2%,
		25% {
			content: "He";
		}
		3%,
		23% {
			content: "Hel";
		}
		4%,
		22% {
			content: "Hell";
		}
		5%,
		21% {
			content: "Hello";
		}
		6%,
		20% {
			content: "Hello ";
		}
		7%,
		19% {
			content: "Hello Z";
		}
		9%,
		18% {
			content: "Hello Ze";
		}
		10%,
		17% {
			content: "Hello Zer";
		}
		11%,
		16% {
			content: "Hello Zero";
		}
		12%,
		15% {
			content: "Hello ZeroL";
		}
		13%,
		14% {
			content: "Hello ZeroLa";
		}
		14%,
		13% {
			content: "Hello ZeroLab";
		}
		15%,
		12% {
			content: "Hello ZeroLab!";
		}
	}
	@keyframes blink {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
	}

	.typewriter {
		--caret: currentcolor;
	}

	.typewriter::before {
		content: "";
		animation: typing 13.5s infinite;
	}

	.typewriter::after {
		content: "";
		border-right: 1px solid var(--caret);
		animation: blink 0.5s linear infinite;
	}

	.typewriter.thick::after {
		border-right: 1ch solid var(--caret);
	}

	.typewriter.nocaret::after {
		border-right: 0;
	}

	@media (prefers-reduced-motion) {
		.typewriter::after {
			animation: none;
		}

		@keyframes sequencePopup {
			0%,
			100% {
				content: "developer";
			}
		}

		.typewriter::before {
			content: "developer";
			animation: sequencePopup 12s linear infinite;
		}
	}
}

.search-bar {
	height: 40px;
	display: flex;
	width: 100%;
	max-width: 300px;
	padding-left: 16px;
	border-radius: 4px;
	flex-shrink: 1;
	@media screen and (max-width: 410px) {
		&:not(.main-header-link) {
			display: none;
		}
	}
	input {
		width: 100%;
		height: 100%;
		border: none;
		background-color: var(--search-bg);
		border-radius: 4px;
		font-family: var(--body-font);
		font-size: 15px;
		font-weight: 500;
		padding: 0 20px 0 40px;
		box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
		background-size: 14px;
		background-repeat: no-repeat;
		background-position: 16px 48%;
		color: var(--theme-color);
		&::placeholder {
			font-family: var(--body-font);
			color: var(--inactive-color);
			font-size: 15px;
			font-weight: 500;
		}
	}
}
</style>