<script>
	import treeIcon from '$lib/icons/treeIcon.svg';
	import gitIcon from '$lib/icons/github.svg';
	import moon from '$lib/icons/moon_dark.png';
	import sun from '$lib/icons/sun_light.png';

	import { page } from '$app/stores';

	let active = false;

	const switchTheme = () => {
		if (active) {
			active = false;
		}

		return (active = true);
	};
</script>

<header id="header" class="sticky-top">
	<nav class="navbar navbar-expand-lg navbar-dark">
		<div class="container">
			<a class="navbar-brand fw-bold" href="/">
				<img src={treeIcon} width={25} class="img-fluid me-1 hoverTree" alt="Icone floresta" />
				gabriel assunção
			</a>

			<div id="buttons">
				<button on:click={switchTheme} class="border-0 rounded-3 px-2 py-1 me-1">
					<img src={active ? sun : moon} width="15" class="img-fluid" alt="" />
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

			<div class="collapse navbar-collapse justify-content-end mt-3 mt-lg-0" id="navbarSupportedContent">
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
							href="https://github.com/zDeep10"
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

			.navbar-brand:hover {
				text-decoration: none;
			}

			.navbar-brand:hover > .hoverTree {
				transition: all 0.3s;
				transform: rotate(-22deg);
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
	}
</style>
