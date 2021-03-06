requirejs.config({
  baseUrl: 'node_modules',
  shim: {
    'bootstrap': ['jquery'],
    'slick': ['jquery'],
    'slimscroll': ['jquery']
  },
  paths: {
    'jquery': 'jquery/dist/jquery.min',
    'slick': 'slick-carousel/slick/slick.min',
    'fancybox': 'jquery-fancybox/source/js/jquery.fancybox.pack',
    'bootstrap': 'bootstrap-sass/assets/javascripts/bootstrap',
    'slimscroll': '../js/jquery.slimscroll.min'
  }
});
