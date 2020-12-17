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
            { timestamp: 0, dur: 6.550132, measure: 0, slide: "images/music/etude_01.png" },
            { timestamp: 6.550132, dur: 3.25178, measure: 3, slide: "images/music/etude_02.png" },
            { timestamp: 9.801912, dur: 3.246132, measure: 5, slide: "images/music/etude_03.png" },
            { timestamp: 13.048044, dur: 3.500522, measure: 7, slide: "images/music/etude_04.png" },
            { timestamp: 16.548566, dur: 3.248912, measure: 9, slide: "images/music/etude_05.png" },
            { timestamp: 19.797478, dur: 3.249912, measure: 11, slide: "images/music/etude_06.png" },
            { timestamp: 23.04739, dur: 3.50268, measure: 13, slide: "images/music/etude_07.png" },
            { timestamp: 26.55007, dur: 5.250572, measure: 15, slide: "images/music/etude_08.png" },
            { timestamp: 31.800642, dur: 3.500797, measure: 18, slide: "images/music/etude_09.png" },
            { timestamp: 35.301439, dur: 3.749062, measure: 20, slide: "images/music/etude_10.png" },
            { timestamp: 39.050492, dur: 3.497977, measure: 22, slide: "images/music/etude_11.png" },
            { timestamp: 42.548469, dur: 3.503261, measure: 24, slide: "images/music/etude_12.png" },
            { timestamp: 46.05173, dur: 3.49651, measure: 26, slide: "images/music/etude_13.png" },
            { timestamp: 49.54824, dur: 3.500493, measure: 28, slide: "images/music/etude_14.png" },
            { timestamp: 53.048733, dur: 3.499473, measure: 30, slide: "images/music/etude_15.png" },
            { timestamp: 56.548206, dur: 5.499476, measure: 32, slide: "images/music/etude_16.png" },
            { timestamp: 62.047682, dur: 3.254155, meausre: 35, slide: "images/music/etude_17.png" },
            { timestamp: 65.301837, dur: 3.495474, measure: 37, slide: "images/music/etude_18.png" },
            { timestamp: 68.797311, dur: 3.751365, measure: 39, slide: "images/music/etude_19.png" },
            { timestamp: 72.548676, dur: 3.749065, measure: 41, slide: "images/music/etude_20.png" },
            { timestamp: 76.297741, dur: 3.752402, measure: 43, slide: "images/music/etude_21.png" },
            { timestamp: 80.050143, dur: 3.497321, measure: 45, slide: "images/music/etude_22.png" },
            { timestamp: 83.547464, dur: 3.500332, measure: 47, slide: "images/music/etude_23.png" },
            { timestamp: 87.047796, dur: 3.499538, measure: 49, slide: "images/music/etude_24.png" },
            { timestamp: 90.547334, dur: 5.000961, measure: 51, slide: "images/music/etude_25.png" },
            { timestamp: 95.548295, dur: 4.75191, measure: 54, slide: "images/music/etude_26.png" },
            { timestamp: 100.300205, dur: 3.251491, measure: 57, slide: "images/music/etude_27.png" },
            { timestamp: 103.551696, dur: 4.996067, measure: 59, slide: "images/music/etude_28.png" },
            { timestamp: 108.547763, dur: 3.502566, measure: 62, slide: "images/music/etude_29.png" },
            { timestamp: 112.050329, dur: 3.247267, measure: 64, slide: "images/music/etude_30.png" },
            { timestamp: 115.297596, dur: 3.252446, measure: 66, slide: "images/music/etude_31.png" },
            { timestamp: 118.550042, dur: 3.499711, measure: 68, slide: "images/music/etude_32.png" },
            { timestamp: 122.049753, dur: 2.998197, measure: 70, slide: "images/music/etude_33.png" },
            { timestamp: 125.04795, dur: 3.254362, measure: 72, slide: "images/music/etude_34.png" },
            { timestamp: 128.302312, dur: 4.00, measure: 74, slide: "images/music/etude_35.png" }
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
                // Add music slide png if not same as existing slide
                if (currentBars != i) {
                    // Add corresponding music slide to HTML
                    $("#slides").html(`<img class="img-fluid" src=${etude.bars[i].slide}>`);
                    // Reset slide number
                    currentBars = i;
                    // Look for changes in 'slides' div
                    if (observeChanges) {
                        measureNumber(etude.bars[i], etude.bars[i + 1], etude.bars[i].dur);
                        $("#slides").prepend("<div class='overlay'></div>");
                        // Show overlay if checkbox checked
                        checkOverlay();
                        // Animate overlay to coincide to duration of slide in milliseconds
                        moveOverlay(etude.bars[i].dur * 1000);
                    }
                }
                return;
            }
        }
    }
    // Show slides on checkbox
    showMusic();

    console.log("Document ready");
});// End ready



let counter = 0;
function count() {
    counter++;
    console.log(counter);
}

// Show/hide measure counter
//setInterval(count, measureNumber(etude.bars[i], etude.bars[i + 1], etude.bars[i].dur));


function countMeasure(num, start, time) {
    for (var i = 0; i < num; i++) {
        (function (i) {
            setInterval(function () {
                console.log(start);
            }, 1000);
        })(i);
    }
}



// Returns average duration of each measure shown in slide
function measureNumber(currArrObj, nextArrObj, time) {
    // Measure number of first measure of slide
    var startMeasure = currArrObj.measure;
    // Number of measure on slide
    var numOfMeasures = nextArrObj.measure - startMeasure;
    // Number of measures on slide divided by duration of slide for avg measure duration
    var barDuration = time / numOfMeasures;
    // Avg duration of each measure on slide in seconds
    //setInterval(countMeasure(numOfMeasures, startMeasure), 1000);
    countMeasure(numOfMeasures, startMeasure, time);


    var span = document.createElement("span");
    span.innerHTML = barDuration.toString();

    document.body.appendChild(span);
    //console.log(barDuration);
}


// For each slide change check for overlay checkbox status
function checkOverlay() {
    var checkbox = document.getElementById("show-overlay");
    var overlay = document.querySelector(".overlay");
    // If checked show
    overlay.style.display = checkbox.checked ? "block" : "none";
}


// Show music slide div on checkbox
function showMusic() {
    $('input[id="show-music"]').click(function () {
        // If box checked show div
        if ($(this).prop("checked") === true) {
            $("#slides").css("visibility", "visible");
        }
        // If box not checked hide div
        else if ($(this).prop("checked") === false) {
            $("#slides").css("visibility", "hidden");
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


// Animate overlay on displayed slide
// Argument determined by slide duration
function moveOverlay(speed) {
    $(".overlay").animate({
        left: "640px",
    }, {
        duration: speed,
        easing: "linear"
    }
    );
}


// Check for correct durations against property start times
function checkPropertySums(objArr) {
    $(objArr).each(function () {
        console.log($(this).timestamp, $(this).timestamp + $(this).dur);
    });
}

