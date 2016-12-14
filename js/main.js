requirejs.config({
  paths: {
    jquery: './jquery.min',
    modal: './modal'
  }
})

requirejs(['jquery'], function ($) {
  console.log($('input'));
});