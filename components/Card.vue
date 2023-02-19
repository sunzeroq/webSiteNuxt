<template>
	<div class="app-card">
		<span class="card-title"> {{ props.title }} </span>
		<div class="app-card__subtext">
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(["title"])
</script>

<style lang="scss" scoped>
	.app-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: calc(33.3% - 50px);
		font-size: 16px;
		background-color: var(--content-bg);
		border-radius: 14px;
		border: 1px solid var(--theme-bg-color);
		padding: 20px;
		margin: 4px;
		cursor: pointer;
		transition: 0.3s ease;
		&:hover {
			transform: scale(1.02);
			background-color: var(--theme-bg-color);
		}
		.card-title {
			font-size: 28px;
		}

		&__subtext {
			font-size: 14px;
			font-weight: 400;
			line-height: 14px;
			margin-top: 20px;
			border-bottom: 1px solid var(--border-color);
			padding-bottom: 20px;
		}
		@media screen and (max-width: 1110px) {
			width: calc(50% - 20px);
			&:last-child {
				margin-top: 20px;
				margin-left: 0px;
			}
		}
		@media screen and (max-width: 565px) {
			width: calc(100% - 20px);
			margin-top: 20px;
			& + .app-card {
				margin-left: 0;
			}
		}
	}
</style>
