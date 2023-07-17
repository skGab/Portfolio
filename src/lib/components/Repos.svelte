<script lang="ts">
	import type { PageData } from '../../routes/$types';

	export let data: PageData;
</script>

<li>
	{#each data.repositories as repo}
		{repo.name}
	{/each}
</li>

<style style="scss"></style>
