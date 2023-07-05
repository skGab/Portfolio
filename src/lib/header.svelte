<script>
	import treeIcon from '$lib/icons/treeIcon.svg';
	import gitIcon from '$lib/icons/github.svg';

	import { page } from '$app/stores';
</script>

<header id="header" class="sticky-top">
	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container">
			<a class="navbar-brand fw-bold" href="/">
				<img src={treeIcon} width={25} class="img-fluid me-1 hoverTree" alt="Icone floresta" />
				gabriel assunção
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
			<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				<ul class="navbar-nav mb-2 mb-lg-0 gap-1">
					<li class="nav-item">
						<a
							class={$page.url.pathname === '/projetos' ? 'nav-link active' : 'nav-link'}
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
					<!-- {/* <li className="nav-item">
                        <Link className="nav-link" aria-current="page" href="#">x</Link>
                    </li> */} -->
				</ul>
			</div>
		</div>
	</nav>
</header>
