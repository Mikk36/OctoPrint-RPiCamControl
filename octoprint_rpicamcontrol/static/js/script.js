$(document).ready(function() {
  console.log("RPi Cam Control loaded");
  function reloadRpiCamControlImage() {
    var url = this.src;
    var urlNew = url.substr(0, url.indexOf("?") + 1) + Date.now();
    this.src = urlNew;
  }
  $("#webcam_image")
  .on("load", reloadRpiCamControlImage)
  .on("error", function() {
    setTimeout(reloadRpiCamControlImage, 100);
  });
});
