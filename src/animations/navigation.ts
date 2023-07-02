type ChangeToStatus = 'open' | 'closed';

export function toggleMobileMenu(status: ChangeToStatus): void {
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenu) {
    const exit = document.getElementById('exit-menu');
    const hamburger = document.getElementById('hamburger-menu');
    switch (status) {
      case 'open':
        mobileMenu.classList.remove('close-mobile-menu');
        mobileMenu.classList.add('open-mobile-menu');
        mobileMenu.style.maxHeight = '20rem';
        hamburger?.classList.add('hidden');
        exit?.classList.remove('hidden');
        break;
      case 'closed':
        mobileMenu.classList.remove('open-mobile-menu');
        mobileMenu.classList.add('close-mobile-menu');
        mobileMenu.style.maxHeight = '0';
        exit?.classList.add('hidden');
        hamburger?.classList.remove('hidden');
        break;
      default:
        break;
    }
  }
}
