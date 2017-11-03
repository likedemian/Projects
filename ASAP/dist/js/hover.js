$(document).on("mouseover", ".detail__button", function() {
    $(this).css({
      opacity: "0.5",
      transition: "0.25s",
    })
  }),

  $(document).on("mouseleave", ".detail__button", function() {
    $(this).css({
      opacity: "1",
      transition: "0.25s",
    })
  });