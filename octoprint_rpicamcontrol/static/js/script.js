$(document).ready(function() {
  console.log("RPi Cam Control loaded");
  var RPiCamControlEnabled = false;
  function reloadRPiCamControlImage() {
    if(!RPiCamControlEnabled) return;
    var url = this.src;
    if(!url) return;
    var urlNew = url.substr(0, url.indexOf("?") + 1) + Date.now();
    this.src = urlNew;
  }
  $("#webcam_image")
  .on("load", reloadRPiCamControlImage)
  .on("error", function() {
    setTimeout(reloadRPiCamControlImage, 100);
  });
  $("#tabs a[data-toggle=\"tab\"]").on("show", function(e) {
    if(e.target.hash === "#control") {
      RPiCamControlEnabled = true;
      var image = $("#webcam_image");
      if(image.attr("src")) {
        image.attr("src", image.attr("src") + "0");
      }
    } else {
      RPiCamControlEnabled = false;
    }
  });
});
