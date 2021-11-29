const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0],
        tooltips: [true],
        connect: 'lower',
        step: 130,
        range: {
            'min': [0],
            'max': [210]
        }
    });

}