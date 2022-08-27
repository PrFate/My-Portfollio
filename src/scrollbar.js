// COLOR
const neonGreen = "#00F4AD";
const transparent = "transparent";

// Progress Bar Elements (SVG Rectangles)
const progressBarDashes = [...document.getElementById('progressBarGroup').children];

window.addEventListener('scroll', () => {
    const h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

    let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    colorProgressBar(percent);
});

const colorProgressBar = percentage => {
    const numberOfDashes = progressBarDashes.length;
    const maximumPercent = 100;
    const iterations = Math.round(percentage * numberOfDashes / maximumPercent);

    for (let i = 0; i < iterations; i++) {
        progressBarDashes[i].style.fill = neonGreen;
    }
    for (let i = iterations; i < numberOfDashes; i++) {
        progressBarDashes[i].style.fill = transparent;
    }
};

