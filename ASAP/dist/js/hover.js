$(document).on("mouseover", ".main__movie-list__wrap", function() {
    $(this).css({
      opacity: "0.75",
      transition: "0.25s",
    })
  }),

  $(document).on("mouseleave", ".main__movie-list__wrap", function() {
    $(this).css({
      opacity: "1",
      transition: "0.25s",
    })
  });