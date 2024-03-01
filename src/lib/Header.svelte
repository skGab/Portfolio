<script>
	import treeIcon from '$lib/icons/treeIcon.svg';
	import gitIcon from '$lib/icons/github.svg';
	import moon from '$lib/icons/moon_dark.png';
	import sun from '$lib/icons/sun_light.png';
	import Theme from './components/Theme.svelte';

	import { page } from '$app/stores';

	let active = true;

	const switchTheme = () => {
		if (active) {
			return (active = false);
		}

		return (active = true);
	};
</script>

<header id="header" class="sticky-top">
	<nav class="navbar navbar-expand-lg navbar-dark">
		<div class="container">
			<a class="navbar-brand fw-bold me-4" href="/">
				<img src={treeIcon} width={25} class="img-fluid hoverTree" alt="Icone floresta" />
				gabriel assunção
			</a>

			<div id="buttons">
				<button
					on:click={switchTheme}
					class="theme border-0 rounded-3 me-1 me-md-0 {active ? 'light' : 'dark'}"
					data-bs-container="body"
					data-bs-toggle="popover"
					data-bs-placement="right"
					data-bs-content="Sendo implementado!"
				>
					<img src={active ? sun : moon} width="15" class="img-fluid" alt="Icone do thema" />
				</button>

				<button
					class="navbar-toggler border-0 px-1"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
			</div>

			<div class="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
				<ul class="navbar-nav mb-2 mb-lg-0 gap-1 align-items-end">
					<li class="nav-item">
						<a
							class={$page.url.pathname === '/projetos' ? 'nav-link active px-2' : 'nav-link px-2'}
							aria-current="page"
							href="/projetos">Projetos</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link d-flex align-items-center"
							aria-current="page"
							href="https://github.com/skGab"
							target="_blank"
						>
							<img src={gitIcon} width={15} class="me-2 img-fluid" alt="GitHub Icon" />
							Source
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		nav {
			background-color: #20202380;
			backdrop-filter: blur(10px);

			a {
				text-decoration: none;
				color: var(--white) !important;
			}

			a:hover {
				text-decoration: underline;
			}

			.navbar-brand:hover > .hoverTree {
				transition: all 0.3s;
				transform: rotate(-22deg);
			}

			.navbar-brand:hover {
				text-decoration: none;
			}

			.nav-link {
				width: fit-content;
			}

			.nav-link.active {
				transition: all 0.3s ease-in;
				background-color: #ffae35;
				color: var(--body) !important;
			}
		}

		#buttons {
			display: flex;
			align-items: center;
			justify-content: center;

			@media screen and (min-width: 992px) {
				order: 2;
			}
		}

		.dark {
			background-color: #38383d;
		}
		.light {
			background-color: rgba(255, 205, 130, 0.925);
		}
		.theme {
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.8rem;
			transition: all 0.4s ease;
		}
	}
</style>
