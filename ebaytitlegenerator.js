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

$(document).ready(function () {

  $('form').submit(function (event) {
    var itemName = $('#itemName').val();
    generateTitle(itemName);
    event.preventDefault();
  });

});
