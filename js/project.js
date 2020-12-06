$(document).ready(function () {
    "use strict";

    var player = jwplayer("videoDiv").setup({
        file: "https://gl-music-site.s3.amazonaws.com/videos/stravinsky_etude4.mp4",
        height: 360,
        width: 640,
        controls: true,
    });

    var etude = {
        bars: [
            { timestamp: 0, slide: "images/etude_01.png" },
            { timestamp: 6.550132, slide: "images/etude_02.png" },
            { timestamp: 9.801912, slide: "images/etude_03.png" },
            { timestamp: 13.048044, slide: "images/etude_04.png" },
            { timestamp: 16.548566, slide: "images/etude_05.png" },
            { timestamp: 19.797478, slide: "images/etude_06.png" },
            { timestamp: 23.04739, slide: "images/etude_07.png" },
            { timestamp: 26.55007, slide: "images/etude_08.png" },
            { timestamp: 31.800642, slide: "images/etude_09.png" },
            { timestamp: 35.301439, slide: "images/etude_10.png" },
            { timestamp: 39.050492, slide: "images/etude_11.png" },
            { timestamp: 42.548469, slide: "images/etude_12.png" },
            { timestamp: 46.05173, slide: "images/etude_13.png" },
            { timestamp: 49.54824, slide: "images/etude_14.png" },
            { timestamp: 53.048733, slide: "images/etude_15.png" },
            { timestamp: 56.548206, slide: "images/etude_16.png" },
            { timestamp: 62.047682, slide: "images/etude_17.png" },
            { timestamp: 65.301837, slide: "images/etude_18.png" },
            { timestamp: 68.797311, slide: "images/etude_19.png" },
            { timestamp: 72.548676, slide: "images/etude_20.png" },
            { timestamp: 76.297741, slide: "images/etude_21.png" },
            { timestamp: 80.050143, slide: "images/etude_22.png" },
            { timestamp: 83.547464, slide: "images/etude_23.png" },
            { timestamp: 87.047796, slide: "images/etude_24.png" },
            { timestamp: 90.547334, slide: "images/etude_25.png" },
            { timestamp: 95.548295, slide: "images/etude_26.png" },
            { timestamp: 100.300205, slide: "images/etude_27.png" },
            { timestamp: 103.551696, slide: "images/etude_28.png" },
            { timestamp: 108.547763, slide: "images/etude_29.png" },
            { timestamp: 112.050329, slide: "images/etude_30.png" },
            { timestamp: 115.297596, slide: "images/etude_31.png" },
            { timestamp: 118.550042, slide: "images/etude_32.png" },
            { timestamp: 122.049753, slide: "images/etude_33.png" },
            { timestamp: 125.04795, slide: "images/etude_34.png" },
            { timestamp: 128.302312, slide: "images/etude_35.png" }
        ]
    };

    player.on("time", function (evt) {
        showMeasure(evt.position);
        /*
        $("#slides").click(function () {
            console.log(evt.position);
        });
        */
    });

    function showMeasure(time) {
        /*
        for (var i = 0; i <= etude.bars.length - 1; i++) {
            if (time >= etude.bars[i].start && time <= (etude.bars[i].start + etude.bars[i].dur)) {
                $("#slides").html(`<img class="img-fluid" src=${etude.bars[i].slide}>`);
                console.log(etude.bars[i].slide)
                return;
            }
        }
        */

        for (var i = etude.bars.length - 1; i >= 0; i--) {
            if (etude.bars[i].timestamp <= time) {
                $("#slides").html(`<img class="img-fluid" src=${etude.bars[i].slide}>`);
                return;
            }
        }
    }






    console.log("Document ready");
});// End ready

