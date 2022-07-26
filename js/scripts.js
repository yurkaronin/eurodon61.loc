let menuSearch = document.querySelector('.js-header-menu-search');
let firstHeaderSearch = document.querySelector('.js-button-search');


if (menuSearch) {
  menuSearch.onclick = function () {
    console.log("wow");
    if (document.body.classList.contains('header-search-active')) {
      document.body.classList.remove('header-search-active');
    } else {
      document.body.classList.add('header-search-active');
    }
  };
};

if(firstHeaderSearch) {
  firstHeaderSearch.onclick = function() {
    console.log("wow");
    if (document.body.classList.contains('header-search-active')) {
      document.body.classList.remove('header-search-active');
    } else {
      document.body.classList.add('header-search-active');
    }
  };
};
