function enforceLayout() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  
  // Force 70/30 split
  document.querySelector('.video-container').style.height = '70vh';
  document.querySelector('.transaction-panel').style.height = '30vh';
}

window.addEventListener('resize', enforceLayout);
enforceLayout();
