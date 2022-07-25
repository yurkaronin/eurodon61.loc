let menuSearch = document.querySelector('.js-header-menu-search');
let headerSearch = document.querySelector('.js-button-search');


if(menuSearch) {
  menuSearch.onclick = function() {

    if (document.body.classList.contains('header-search-active')) {
      document.body.classList.remove('header-search-active');
    } else {
      document.body.classList.add('header-search-active');
    }
  };
};

if(headerSearch) {
  headerSearch.onclick = function() {
    console.log("wow");
    if (document.body.classList.contains('header-search-active')) {
      document.body.classList.remove('header-search-active');
    } else {
      document.body.classList.add('header-search-active');
    }
  };
};
