$(window).scroll(function () {
  scrollFunction();
});

function scrollFunction() {
  if ($(document).scrollTop() > 20) {
    $("#myBtn").css("display", "block");
  } else {
    $("#myBtn").css("display", "none");
  }
}

function topFunction() {
  $("body, html").animate(
    {
      scrollTop: 0,
    },
    200
  );
}

$(window).scroll(function () {
  var windowHeight = $(window).height();
  var scrollPos = $(window).scrollTop();
  var textBlockPos = $(".textBlock").offset().top;
  var cardsBlockPos = $(".cards").offset().top;
  var feedbackBlockPos = $(".feedbackFormBlock").offset().top;

  if (scrollPos > textBlockPos - windowHeight + 250) {
    $(".textBlock h1, .textBlock p").addClass("fadeIn");
  } else {
    $(".textBlock h1, .textBlock p").removeClass("fadeIn");
  }

  if (scrollPos > cardsBlockPos - windowHeight + 100) {
    $(".card, .contactsBlock h1").addClass("fadeIn");
  } else {
    $(".card, .contactsBlock h1").removeClass("fadeIn");
  }

  if (scrollPos > feedbackBlockPos - windowHeight + 200) {
    $(".feedbackFormBlock h1, .feedbackFormBlock form").addClass("fadeIn");
  } else {
    $(".feedbackFormBlock h1, .feedbackFormBlock form").removeClass("fadeIn");
  }
});

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    const email = $("#exampleInputEmail1").val();
    const text = $("#exampleInputText").val();

    if (
      (email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) ||
      email.length === 0
    ) {
      console.log("invalid");
      $(".tipEmail").addClass("showTip");
    } else if (text.length < 10) {
      $(".tipEmail").removeClass("showTip");
      $(".tipText").addClass("showTip");
      // еще бы добавить максимальное количество символов и защиту
      // от кода/ссылок внутри текста
    } else {
      $(".tipEmail").removeClass("showTip");
      $(".tipText").removeClass("showTip");
      $(".feedbackFormBlock form").addClass("hideForm");
      $(".feedbackFormBlock .success").addClass("showMessage");
    }
  });
});
