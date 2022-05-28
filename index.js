$(function () {
  let lineCount = 1;
  $('.insert-line-number').text(`Line ${$('.reviews').length}`);

  function doneLine(currentMessage) {
    return $(
      `<li class="new-line">
      <div class="new-line-number">Line ${$('.new-line').length + 1}</div>
      <input type="text" class="new-line-text" value="${currentMessage}" disabled></input>
      <button>X</button>
    </li>`
    );
  }

  $('.new-line-button').click(function () {
    lineCount++;

    $('textarea').val($('textarea').val() + $('.insert-line-text').val());

    doneLine($('.insert-line-text').val()).insertBefore($('.new-line-insert'));

    $('.insert-line-text').val('');
    $('.insert-line-number').text(`Line ${lineCount}`);
    $('.insert-line-text').focus();
  });

  $('.insert-line-text').keyup(function () {
    if ($('textarea').val().length > 1000) $(this).prop('disabled', true);

    if ($(this).val().length > 50) {
      lineCount++;

      doneLine($(this).val()).insertBefore($('.new-line-insert'));

      $('textarea').val($('textarea').val() + $(this).val());
      $(this).val('');

      $('.insert-line-number').text(`Line ${lineCount}`);
    }
  });
});
