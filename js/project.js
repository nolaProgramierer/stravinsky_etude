$(document).ready(function () {
    "use strict";

    var player = jwplayer("videoDiv").setup({
        file: "https://gl-music-site.s3.amazonaws.com/videos/stravinsky_etude4.mp4",
        height: 360,
        width: 640,
        controls: true,
    });

    console.log("Document ready");
});// End ready