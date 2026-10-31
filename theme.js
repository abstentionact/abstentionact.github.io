// Apply the saved preference before styles load to avoid a light-mode flash.
(() => {
  let theme = 'light';
  try {
    const saved = localStorage.getItem('abstentionact-theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
  } catch {
    // Storage can be unavailable in private or restricted browser contexts.
  }
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111c18' : '#ffffff';
})();
