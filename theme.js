// Default to white; only use dark mode when the visitor has chosen it.
(() => {
  let theme = 'light';
  try {
    if (localStorage.getItem('abstentionact-theme') === 'dark') theme = 'dark';
  } catch {
    // Keep the default when storage is unavailable.
  }
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0e0e10' : '#ffffff';
})();
