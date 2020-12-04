$(document).ready(function () {
    "use strict";

    var player = jwplayer("videoDiv").setup({
        file: "https://gl-music-site.s3.amazonaws.com/videos/stravinsky_etude4.mp4",
        height: 360,
        width: 640,
        controls: true,
    });

    var bars = {
        etude: [
            { time: 0, slide: "images/etude_01.png" },
            { time: 0, slide: "images/etude_02.png" },
            { time: 0, slide: "images/etude_03.png" },
            { time: 0, slide: "images/etude_04.png" },
            { time: 0, slide: "images/etude_05.png" },
            { time: 0, slide: "images/etude_06.png" },
            { time: 0, slide: "images/etude_07.png" },
            { time: 0, slide: "images/etude_08.png" },
            { time: 0, slide: "images/etude_09.png" },
            { time: 0, slide: "images/etude_10.png" },
            { time: 0, slide: "images/etude_11.png" },
            { time: 0, slide: "images/etude_12.png" },
            { time: 0, slide: "images/etude_13.png" },
            { time: 0, slide: "images/etude_14.png" },
            { time: 0, slide: "images/etude_15.png" },
            { time: 0, slide: "images/etude_16.png" },
            { time: 0, slide: "images/etude_17.png" },
            { time: 0, slide: "images/etude_18.png" },
            { time: 0, slide: "images/etude_19.png" },
            { time: 0, slide: "images/etude_20.png" },
            { time: 0, slide: "images/etude_21.png" },
            { time: 0, slide: "images/etude_22.png" },
            { time: 0, slide: "images/etude_23.png" },
            { time: 0, slide: "images/etude_24.png" },
            { time: 0, slide: "images/etude_25.png" },
            { time: 0, slide: "images/etude_26.png" },
            { time: 0, slide: "images/etude_27.png" },
            { time: 0, slide: "images/etude_28.png" },
            { time: 0, slide: "images/etude_29.png" },
            { time: 0, slide: "images/etude_30.png" },
            { time: 0, slide: "images/etude_31.png" },
            { time: 0, slide: "images/etude_32.png" }


        ]
    }

    console.log("Document ready");
});// End ready