<template>
	<div class="header">
		<div class="menu-circle">
			<p aria-label="zeroLab">&nbsp;<span class="typewriter"></span></p>
		</div>

		<div class="header-menu">
			<a class="menu-link is-active" href="#">Apps</a>
			<a class="menu-link notify" href="#">Your work</a>
			<a class="menu-link" href="#">Discover</a>
			<a class="menu-link notify" href="#">Market</a>
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
			@media screen and (max-width: 610px) {
				&:not(.main-header-link) {
					display: none;
				}
			}
			&.is-active,
			&:hover {
				color: var(--theme-color);
				border-bottom: 2px solid var(--theme-color);
			}
		}
	}
	.menu-circle {
		width: 160px;
		flex: auto;
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
</style>