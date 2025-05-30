class VideoController {
  constructor() {
    this.video = document.querySelector('video');
    this.socialButtons = document.querySelectorAll('.social-share button');
    this.setupVideo();
    this.setupSocialShare();
  }

  setupVideo() {
    // Ensure video plays on mobile devices
    this.video.setAttribute('playsinline', '');
    this.video.setAttribute('muted', '');
    
    // Fallback for autoplay
    document.addEventListener('click', () => {
      this.video.play().catch(e => console.log('Autoplay prevented:', e));
    }, { once: true });
  }

  setupSocialShare() {
    this.socialButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const platform = btn.dataset.platform;
        let url = '';
        
        switch(platform) {
          case 'tiktok':
            url = 'https://www.tiktok.com';
            break;
          case 'youtube':
            url = 'https://www.youtube.com';
            break;
          case 'instagram':
            url = 'https://www.instagram.com';
            break;
        }
        
        window.open(url, '_blank');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new VideoController();
});
