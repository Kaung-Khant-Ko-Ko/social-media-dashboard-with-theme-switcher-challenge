$("#switch").on("click", function () {
  setTimeout(() => {
    if ($("#mode").is(":checked")) {
      $("body").css({
        "background-image":
          "linear-gradient(180deg, hsl(225, 100%, 98%) 0%, hsl(225, 100%, 98%) 30%, hsl(0, 0%, 100%) 30%, hsl(0, 0%, 100%) 100%)",
        color: "hsl(228, 12%, 44%)",
      });
      $(".overview__card").css("background-color", "hsl(227, 47%, 96%)");
      $(".header__title, .card__count, .card__count--today").css(
        "color",
        "hsl(230, 17%, 14%)"
      );
      $(".dark-mode__switch").css({
        "background-image": "none",
        "background-color": "hsl(230, 22%, 74%)",
      });
    } else {
      $("body").css({
        "background-image":
          "linear-gradient(180deg, hsl(232, 19%, 15%) 0%, hsl(232, 19%, 15%) 30%, hsl(230, 17%, 14%) 30%, hsl(230, 17%, 14%) 100%)",
        color: "hsl(228, 34%, 66%)",
      });
      $(".overview__card").css("background-color", "hsl(228, 28%, 20%)");
      $(".header__title, .card__count, .card__count--today").css(
        "color",
        "hsl(0, 0%, 100%)"
      );
      $(".dark-mode__switch").css(
        "background-image",
        "linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%)"
      );
    }
  }, 100);
});
