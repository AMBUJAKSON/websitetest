const slider = document.getElementById('slider');
        const output = document.getElementById('slidervalue');
        slider.addEventListener('input', function() {
            output.textContent =  slider.value;
        });


const a = document.getElementById("input1")
const b = document.getElementById("input2")
document.getElementById("b1").addEventListener('click', function(){
    output1.textContent = "Number here:" + (a.value + b.value)
})

