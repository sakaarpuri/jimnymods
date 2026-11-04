const share = document.querySelector('[data-share-build]');
if (share && (navigator.share || navigator.clipboard)) {
  share.hidden = false;
  share.addEventListener('click', async () => {
    const url = new URL(location.pathname, location.origin).href;
    const status = document.getElementById('shareStatus');
    try {
      if (navigator.share) await navigator.share({title: document.title, url});
      else {
        await navigator.clipboard.writeText(url);
        status.textContent = 'Link copied';
      }
    } catch (error) {
      if (error.name !== 'AbortError') status.textContent = 'Copy the page address to share this build.';
    }
  });
}
