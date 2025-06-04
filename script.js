const slider = document.getElementById('slider');
        const output = document.getElementById('slidervalue');
        slider.addEventListener('input', function() {
            output.textContent =  slider.value;
        });


a = document.getElementById("input1")
b = document.getElementById("input2")
document.getElementById("b1").addEventListener('click', function(){
    output1.textContent = "Number here:" + (Int32Array(a.value) + Int16Array(b.value))
})

