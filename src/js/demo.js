const images = document.querySelectorAll('.rounded-full');
let count = 0;
function onClickHandler(event) {
    let div = document.createElement('div');
    if (div.classList.contains('wick')) {
        div = div.parentElement;
    }
    div.classList.add('flame');
    div.innerHTML = `
    <div class="shadows"></div>
    <div class="top"></div>
    <div class="middle"></div>
    <div class="bottom"></div>`;
    event.target.prepend(div);
    // remove Selected class
    const selectedImage = document.querySelector('.rounded-full.selected');
    selectedImage.classList.remove('selected');
    count += 1;
    images[count].classList.add('selected');
}
function Init() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle) => {
        candle.addEventListener('click', onClickHandler);
    });
}
Init();
