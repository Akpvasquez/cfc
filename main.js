function revealPage2() {
  $("#page1").addClass("hidden");
  $("#page2").removeClass("hidden");
}
$("#page1").click(revealPage2)
