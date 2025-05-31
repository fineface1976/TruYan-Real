 document.addEventListener('DOMContentLoaded', () => {
  // ===== LAYOUT ENFORCEMENT =====
  function enforceLayout() {
    // 1. Set viewport unit
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // 2. Strict section heights
    document.querySelector('.video-container').style.height = '70vh';
    document.querySelector('.transaction-panel').style.height = '30vh';

    // 3. Mining button full height
    const miningBtn = document.getElementById('miningToggle');
    if (miningBtn) {
      miningBtn.style.height = '100%';
      miningBtn.style.padding = '0 30px 0 10px';
    }

    // 4. Action button text boldness
    document.querySelectorAll('.action-btn').forEach(btn => {
      btn.style.fontWeight = '900';
      btn.style.color = '#000';
    });

    // 5. Stat item text alignment
    document.querySelectorAll('.stat-item').forEach(item => {
      item.style.minWidth = '0';
      item.style.flex = '1 1 auto';
    });
  }

  // ===== EVENT LISTENERS =====
  window.addEventListener('resize', enforceLayout);
  window.addEventListener('orientationchange', enforceLayout);

  // Initial execution
  enforceLayout();

  // ===== DYNAMIC ELEMENT PROTECTION =====
  const observer = new MutationObserver(enforceLayout);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });
});
