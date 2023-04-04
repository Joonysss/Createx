const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');
const portfolioTabsBtns = document.querySelectorAll('.portfolio-tabs-nav__btn');
const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
const portfolioTabsItemsVisible = document.querySelectorAll('.portfolio-tabs__item--visible');


portfolioTabsNav.addEventListener('click', (e) => {
  const target = e.target;
  if ( target.classList.contains('portfolio-tabs-nav__btn')) {

    const path = target.dataset.path;
    portfolioTabsBtns.forEach(el => {
      el.classList.remove('portfolio-tabs-nav__btn--active');
    });

    target.classList.add('portfolio-tabs-nav__btn--active');

    portfolioTabsItems.forEach(el => {
      el.classList.remove('portfolio-tabs__item--visible')
    });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible')
    });


    if (path == 'all') {
      portfolioTabsItems.forEach(el => {
        el.classList.add('portfolio-tabs__item--visible')
      });
    }   
  }
});

