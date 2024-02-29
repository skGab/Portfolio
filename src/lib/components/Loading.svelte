<script>
	import { onMount, onDestroy, tick } from 'svelte';
	import { Spinner } from 'spin.js';

	/**
	 * @type {Spinner}
	 */
	let spinner;
	/**
	 * @type {HTMLElement | undefined}
	 */
	let target;

	onMount(async () => {
		await tick();
		const opts = {
			lines: 20,
			length: 0,
			width: 29,
			radius: 73,
			scale: 0.15,
			corners: 1,
			speed: 1.4,
			rotate: 87,
			animation: 'spinner-line-fade-quick',
			direction: 1,
			color: '#ffffff',
			fadeColor: 'transparent',
			top: '50%',
			left: '49%',
			shadow: '0 0 1px transparent',
			zIndex: 2000000000,
			className: 'spinner',
			position: 'absolute',
		};
		spinner = new Spinner(opts).spin(target);
	});

	onDestroy(() => {
		if (target) {
			spinner.stop();
		}
	});
</script>

<div class="spinner" bind:this={target} />

<style>
	@import 'spin.js/spin.css';

	.spinner {
		min-height: 180px;
	}
</style>
