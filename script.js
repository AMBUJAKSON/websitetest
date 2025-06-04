const slider = document.getElementById('slider');
        const output = document.getElementById('slidervalue');
        slider.addEventListener('input', function() {
            output.textContent =  slider.value;
        });