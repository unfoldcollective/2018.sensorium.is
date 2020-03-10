var splineLoop1, splineLoop2, splineLoop3;
var hasMouseMoved, mouseTimeout;

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("sb-site").addEventListener('mousemove', function onFirstMouseMove() {
        hasMouseMoved = true;

        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(function () {
            hasMouseMoved = false;
        }, 5000);
        
    }, false);    
});

function setup() {
    var myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('bg-canvas');
    background(0);
    frameRate(30);
    smooth();
    noFill();

    var teal = color('#0096AC');
    var pink = color('#FBD2CE');
    var purple = color('#796CAF');
    var green = color('#9CFCCF');
    var colorCombo1 = [teal, pink];
    var colorCombo2 = [teal, green];
    var colorCombo3 = [purple, pink];

    var splineSettings1 = {
        nPoints: 10,
        origin: {
            x: 0.33 * width,
            y: 0.6 * height
        },
        radius: 0.55 * height,
        distortFactor: 0.2 * 0.55 * height,
        colors: colorCombo1,
        interpolationSteps: 4,
        movement: {
            moveFactor: -0.2,    // 0 == no positional animation
            noiseFactor: 0.6,     // 0 == no noise
            easeFactor: 0.05,   // 1 == no easing
            tightnessFactor: 0  // 0 == no tightness animation 
        }
    }
    splineLoop1 = new SplineLoop(splineSettings1);

    var splineSettings2 = {
        nPoints: 10,
        origin: {
            x: 0.7 * width,
            y: 0.6 * height
        },
        radius: 0.45 * height,
        distortFactor: 0.2 * 0.4 * height,
        colors: colorCombo2,
        interpolationSteps: 4,
        movement: {
            moveFactor: -0.2,   // 0 == no positional animation
            noiseFactor: 0.6,   // 0 == no noise
            easeFactor: 0.05,   // 1 == no easing
            tightnessFactor: 0  // 0 == no tightness animation 
        }
    }
    splineLoop2 = new SplineLoop(splineSettings2);

    var splineSettings3 = {
        nPoints: 10,
        origin: {
            x: 0.5 * width,
            y: 0.4 * height
        },
        radius: 0.5 * height,
        distortFactor: 0.2 * 0.5 * height,
        colors: colorCombo3,
        interpolationSteps: 4,
        movement: {
            moveFactor: -0.2,   // 0 == no positional animation
            noiseFactor: 0.6,   // 0 == no noise
            easeFactor: 0.05,   // 1 == no easing
            tightnessFactor: 0  // 0 == no tightness animation 
        }
    }
    splineLoop3 = new SplineLoop(splineSettings3);

    splineLoop1.drawSplines();
    splineLoop2.drawSplines();
    splineLoop3.drawSplines();
}

function draw() {
    // update if mousemove event has been detected
    if (hasMouseMoved) {
        background(0);
        splineLoop1.update();
        splineLoop1.drawSplines();

        splineLoop2.update();
        splineLoop2.drawSplines();

        splineLoop3.update();
        splineLoop3.drawSplines();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}