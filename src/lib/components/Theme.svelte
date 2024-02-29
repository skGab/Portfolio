<!-- ThemeToggle.svelte -->

<script>
    let isDarkTheme = false;
  
    function toggleTheme() {
      isDarkTheme = !isDarkTheme;
      const newTheme = isDarkTheme ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  </script>
  
  <button on:click={toggleTheme}>
    {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
  </button>
  