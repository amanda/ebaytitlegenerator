var words = ['vintage', 'best', 'new', 'cheap', 'great value', 'selling fast', 'rare', 'beautiful', 'CLEARANCE', 'LOOK', 'free shipping'];
var characters = ['!', '!!!', '!!!!!!!'];

var choice = function (someList) {
  return someList[Math.floor(Math.random() * (someList.length - 1))];
};

var generateTitle = function (someItem) {
  var funCharacter = choice(characters);
  var funWord = choice(words);
  var secondWord = choice(words);
  var newItem = funWord + ' ' + secondWord + ' ' + someItem + funCharacter;
  $('#result').html('<p>' + newItem + '</p>');
};

var action = function () {
  if ($('#itemName').val().length > 0) {
    $('#submitButton').prop('disabled', false);
  } else {
    $('#submitButton').prop('disabled', true);
  }
};

$(document).ready(function () {

  $('#itemName').on('keyup', action);

  $('form').submit(function (event) {
    var itemName = $('#itemName').val();
    generateTitle(itemName);
    event.preventDefault();
  });

});
