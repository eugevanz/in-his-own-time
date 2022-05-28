$(function () {
  let reviews = $('.reviews');
  let message = '';

  function newLine() {
    return $(
      `<li class="new-line">
      <div class="new-line-number">Line ${$('.new-line').length + 1}</div>
      <input type="text" class="new-line-text"></input>
      <button>X</button>
    </li>`
    );
  }

  reviews.append(newLine);

  $('.new-line-button').click(function () {
    reviews.append(newLine);
  });

  $('.new-line-text')
    .last()
    .keyup(function (e) {
      message = $(this).val();
      console.log(message);
      // if (e.keyCode !== 8) {
      //   message = message + String.fromCharCode(e.keyCode);
      // } else {
      //   message = message.slice(0, -1);
      // }

      if (message.length > 0 && message.length % 50 === 0) {
        $(this).prop('disabled', true);
        reviews.append(newLine);
        $('textarea').val(message);
        $('.new-line-text').last().focus();
        return;
      }
    });
});
