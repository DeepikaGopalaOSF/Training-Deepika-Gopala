'use strict';

function initializeEvents () {
  $ ('.radiobutton').on ('click', function (e) {
    if ($ (this).val () == '1') {
      $ ('.billme-content').hide ();
      $ ('.creditcard-content').show ();
    } else {
      $ ('.creditcard-content').hide ();
      $ ('.billme-content').show ();
    }
  });

  $ ('.input-textarea').on ('keyup', function (e) {
    var count = 150 - $ (this).val ().length;
    $ ('span.commentCount').text (count);
  });
}

exports.init = function () {
  initializeEvents ();
};
