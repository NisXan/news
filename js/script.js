$(function() {
  $( document ).ready(function () {
    $.get(
      'http://data.fixer.io/api/latest',
      {
        'access_key': '91504613124e3aa07d32e6e72ed90e78',
      },
      function (response) {
        const eurRub = response.rates.RUB.toFixed(2);
        const eurDol = response.rates.USD.toFixed(2);
        const dolRub = (eurRub/eurDol).toFixed(2);
        $('#currency').html(`<div>ЕВРО в РУБЛЯХ - ${eurRub} руб.</div><div>ДОЛЛАР в РУБЛЯХ - ${dolRub} руб.</div>`);
      }
    );
  });

  $('#menu-mob').click(function () {
    if ($(window).width() <= 1024) {
      if ($('.menu-container').hasClass('menu-active')) {
        $('html').css('overflow', 'initial');
        $('body').css('overflow', 'initial');
        $('.menu-container').removeClass('menu-active');
      } else {
        $('html').css('overflow', 'hidden');
        $('body').css('overflow', 'hidden');
        $('.menu-container').addClass('menu-active');
      }
    }
  });

  $('.search-box').on('click', '.search-submit', function (e) {     
    if ($(window).width() <= 1024) {
      if ($('.search-box').hasClass('search-active')) {
        $('.search-box').toggleClass('search-active');
      } else {        
        e.preventDefault();
        $('.search-box').toggleClass('search-active');
      }
    }
  });
});