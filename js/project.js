$(document).ready(function () {
    "use strict";
    // Intialize jwplayer instance
    var player = jwplayer("videoDiv").setup({
        // Media file hosted on AWS
        file: "https://gl-music-site.s3.amazonaws.com/videos/stravinsky_etude4.mp4",
        // Player instance options
        height: 360,
        width: 640,
        controls: true,
        // Add poster"images/stravinsky_etude-poster.png"
    });

    /*
        Object containing timestamps and images/music for music slides.
        Timestamp obtained by writing function to log slide media
        position from 'player.on)("time,...")' method.
    */
    var etude = {
        bars: [
            { timestamp: 0, slide: "images/music/etude_01.png" },
            { timestamp: 6.550132, slide: "images/music/etude_02.png" },
            { timestamp: 9.801912, slide: "images/music/etude_03.png" },
            { timestamp: 13.048044, slide: "images/music/etude_04.png" },
            { timestamp: 16.548566, slide: "images/music/etude_05.png" },
            { timestamp: 19.797478, slide: "images/music/etude_06.png" },
            { timestamp: 23.04739, slide: "images/music/etude_07.png" },
            { timestamp: 26.55007, slide: "images/music/etude_08.png" },
            { timestamp: 31.800642, slide: "images/music/etude_09.png" },
            { timestamp: 35.301439, slide: "images/music/etude_10.png" },
            { timestamp: 39.050492, slide: "images/music/etude_11.png" },
            { timestamp: 42.548469, slide: "images/music/etude_12.png" },
            { timestamp: 46.05173, slide: "images/music/etude_13.png" },
            { timestamp: 49.54824, slide: "images/music/etude_14.png" },
            { timestamp: 53.048733, slide: "images/music/etude_15.png" },
            { timestamp: 56.548206, slide: "images/music/etude_16.png" },
            { timestamp: 62.047682, slide: "images/music/etude_17.png" },
            { timestamp: 65.301837, slide: "images/music/etude_18.png" },
            { timestamp: 68.797311, slide: "images/music/etude_19.png" },
            { timestamp: 72.548676, slide: "images/music/etude_20.png" },
            { timestamp: 76.297741, slide: "images/music/etude_21.png" },
            { timestamp: 80.050143, slide: "images/music/etude_22.png" },
            { timestamp: 83.547464, slide: "images/music/etude_23.png" },
            { timestamp: 87.047796, slide: "images/music/etude_24.png" },
            { timestamp: 90.547334, slide: "images/music/etude_25.png" },
            { timestamp: 95.548295, slide: "images/music/etude_26.png" },
            { timestamp: 100.300205, slide: "images/music/etude_27.png" },
            { timestamp: 103.551696, slide: "images/music/etude_28.png" },
            { timestamp: 108.547763, slide: "images/music/etude_29.png" },
            { timestamp: 112.050329, slide: "images/music/etude_30.png" },
            { timestamp: 115.297596, slide: "images/music/etude_31.png" },
            { timestamp: 118.550042, slide: "images/music/etude_32.png" },
            { timestamp: 122.049753, slide: "images/music/etude_33.png" },
            { timestamp: 125.04795, slide: "images/music/etude_34.png" },
            { timestamp: 128.302312, slide: "images/music/etude_35.png" }
        ]
    };

    // As player instance plays, pass media position to function
    player.on("time", function (evt) {
        showMeasure(evt.position);
    });


    // Change music slide synchronized with performance
    var currentBars = -1;
    function showMeasure(time) {
        // Start at end of object and find first property where
        // the timestamp is less than the player position property
        // and return to prevent multiple property returns
        for (var i = etude.bars.length - 1; i >= 0; i--) {
            if (etude.bars[i].timestamp <= time) {
                // Add music slide png if not same as existing
                if (currentBars != i) {
                    // Add corresponding music slide to HTML
                    $("#slides").html(`<img class="img-fluid" src=${etude.bars[i].slide}>`);
                    // Reset slide number
                    currentBars = i;
                    // Look for changes in 'slides' div
                    if (observeChanges) {
                        $("#slides").prepend("<div class='overlay'>Overlay</div>");
                        console.log("Slide div change observed");
                    }
                }
                return;
            }
        }

    }

    // Show slides on checkbox
    showMusic();




    $("#button").click(function () {
        $("#overlay").animate({
            left: "640px",
        });
    });



    console.log("Document ready");
});// End ready


// Show music slide div on checkbox
function showMusic() {
    $('input[id="show-music"]').click(function () {
        // If box checked show div
        if ($(this).prop("checked") === true) {
            $("#slides").css("visibility", "visible");
            console.log("Checkbox[0] checked");
        }
        // If box not checked hide div
        else if ($(this).prop("checked") === false) {
            $("#slides").css("visibility", "hidden");
            console.log("Checkbox[0] unchecked");
        }
    });
}


// Listen for changes to html element
function observeChanges() {
    // Identify target element
    var targetNode = document.querySelector("#slides");
    // Identify type of change to listen for
    const config = { childList: true };
    // Listen for changes of child elements, if changes return true
    var callback = function (mutationList, observer) {
        for (var mutation of mutationList) {
            if (mutation.type === "childList") {
                return true;
            }
        }
    };
    // Instance of MutationObserver
    var observer = new MutationObserver(callback);
    // Call function on target node with config options
    observer.observe(targetNode, config);
}
