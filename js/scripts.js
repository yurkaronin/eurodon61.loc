let menuSearch = document.querySelector('.js-header-menu-search');

if(menuSearch) {
  menuSearch.onclick = function() {

    if (document.body.classList.contains('header-search-active')) {
      document.body.classList.remove('header-search-active');
    } else {
      document.body.classList.add('header-search-active');
    }
  };
}
