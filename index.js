'use strict';

function userNum() {
  const num = $('.js-number').val();
  if (num < 3) {
    return 3;
  }
  return num;
}

function getDogImages() {
  fetch(`https://dog.ceo/api/breeds/image/random/${userNum()}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImages();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
