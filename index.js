$(document).ready(function () {
  let lineCount = 1;
  $('.insert-line-number').text(`Line ${$('.reviews').length}`);

  function doneLine(currentMessage) {
    return $(
      `<li class="new-line">
        <input type="text" class="new-line-text" value="${currentMessage}" disabled></input>
        <button class="new-line-delete">x</button>
        <button class="new-line-confirm">Confirm</button>
        <button class="new-line-cancel">Cancel</button>
      </li>`
    );
  }

  $('.insert-line-delete').click(function () {
    if ($(this).siblings('.insert-line-text').val().length > 0) {
      $(this).hide(300);
      $(this).siblings('.insert-line-cancel').show(300);
      $(this).siblings('.insert-line-confirm').show(300);
    } else $(this).parent().hide(300);
  });

  $('.insert-line-cancel').click(function () {
    $(this).siblings('.insert-line-delete').show(300);
    $(this).siblings('.insert-line-confirm').hide(300);
    $(this).hide(300);
  });

  $('.insert-line-confirm').click(function () {
    $(this).siblings('.insert-line-text').val('');
    $(this).siblings('.insert-line-delete').show(300);
    $(this).hide(300);
    $(this).siblings('.insert-line-cancel').hide(300);
    $(this).parent().hide(300);
  });

  $('.new-line-button').click(function () {
    if ($('.new-line-insert').is(':visible')) {
      lineCount++;

      $('textarea').val($('textarea').val() + $('.insert-line-text').val());

      doneLine($('.insert-line-text').val()).insertBefore(
        $('.new-line-insert')
      );

      $('.insert-line-text').val('');
      $('.insert-line-number').text(`Line ${lineCount}`);
      $('.insert-line-text').focus();
    } else {
      $('.new-line-insert').show(300);
      $('.insert-line-text').focus();
    }
  });

  $('.insert-line-text').keyup(function () {
    if ($(this).scrollWidth > $(this).innerWidth()) {
      alert($(this).innerWidth());
    }

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

$(document).on('click', '.new-line-delete', function () {
  if ($(this).siblings('.new-line-text').val().length > 0) {
    $(this).hide(300);
    $(this).siblings('.new-line-cancel').show(300);
    $(this).siblings('.new-line-confirm').show(300);
  } else {
    $(this).parent().hide(300);
    $(this).parent().remove();
    $('.insert-line-number').text(`Line ${$('.new-line').length + 1}`);
  }
});

$(document).on('click', '.new-line-cancel', function () {
  $(this).siblings('.new-line-delete').show(300);
  $(this).siblings('.new-line-confirm').hide(300);
  $(this).hide(300);
});

$(document).on('click', '.new-line-confirm', function () {
  $(this).siblings('.new-line-delete').show(300);
  $(this).hide(300);
  $(this).siblings('.new-line-cancel').hide(300);
  $(this).parent().hide(300);
  $(this).parent().remove();
  $('.insert-line-number').text(`Line ${$('.new-line').length + 1}`);
});
