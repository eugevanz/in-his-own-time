$(function () {
  let reviews = $('.reviews');

  let newLine = $('<li></li>').css({
    display: 'flex',
    'flex-wrap': 'nowrap',
    alignItems: 'center'
  });
  newLine.append(
    $('<div></div>').text(`Line ${reviews.length}`).css({ minWidth: '10vw' })
  );
  newLine.append(
    $('<input></input>')
      .prop('disabled', true)
      .css({ marginRight: '2vw', width: '100%' })
  );
  newLine.append($('<button>X</button>'));

  reviews.append(newLine);
});
