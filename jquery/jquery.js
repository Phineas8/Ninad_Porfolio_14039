$(document).ready(function() {
    $('.sections').each(function(index) {
      $(this).delay(500 * index).fadeTo(1000, 1);
    });
  });
$(document).ready(function () {
    $(".mini-sections").hover(
        function () {
            $(this).find(".more-info").stop(true, true).slideDown(200);
        },
        function () {
            $(this).find(".more-info").stop(true, true).slideUp(200);
        }
    );

     let mode = "darkmode";

  // Click handler for the mode toggle image
  $("#modeimage").click(() => {
    console.log("Current mode:", mode);

    if (mode === "darkmode") {
      // Switch to light mode styles
      $("body").css({
        background: "white",
        color: "black",
      });
      $(".sections").css({
        "background-color": "#dadada",
        color: "black",
      });
      $(".headings").css("color", "black");
      $("label").css("color", "black");
      $("#modeimage").prop("src", "./jquery/darkmode.png");

      mode = "lightmode";
    } else {
      // Switch to dark mode styles
      $("body").css({
        background: "black",
        color: "white",
      });
      $(".sections").css({
        "background-color": "#161616",
        color: "white",
      });
      $(".headings").css("color", "white");
      $("label").css("color", "white");
      $("#modeimage").prop("src", "./jquery/lightmode.png");

      mode = "darkmode";
    }
  });
  

});

