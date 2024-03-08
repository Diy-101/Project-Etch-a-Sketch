

const field = document.getElementById('field');
const width = field.offsetWidth;
const height = field.offsetHeight;



for (let i = 0; i <= 16 ** 2; ++i) {
    const div = document.createElement('div');
    div.className = 'part';
    div.setAttribute('style', 'width: '+Number(width) / 16+'px; height: '+Number(height) / 16+'px;')
    field.appendChild(div); 
}


const label = document.querySelector('#labelSize')
let currentsize = Number(label.textContent.slice(3))
const size = document.querySelector('#size');

size.addEventListener('change', function () {
    label.textContent = `${this.value}x${this.value}`;
    currentsize = Number(label.textContent.slice(3));
    field.innerHTML = "";
    for (let i = 0; i <= currentsize ** 2; ++i) {
        const div = document.createElement('div');
        div.className = 'part';
        div.setAttribute('style', 'width: '+Number(width) / currentsize+'px; height: '+Number(height) / currentsize+'px;')
        field.appendChild(div); 
    }
    const part = document.querySelectorAll('.part');

    for (let i = 0; i < part.length; ++i) {
    part[i].addEventListener('mouseenter', (e) => {
        e.target.setAttribute('style', `background: black; width: ${Number(width) / currentsize}px; height: ${Number(height) / currentsize}px;`)
    })
}

}, false);

size.addEventListener('input', function () {
    label.textContent = `${this.value}x${this.value}`
}, false);


const part = document.querySelectorAll('.part');

for (let i = 0; i < part.length; ++i) {
    part[i].addEventListener('mousedown', (e) => {
        e.target.setAttribute('style', `background: black; width: ${Number(width) / currentsize}px; height: ${Number(height) / currentsize}px;`)
    })
}



