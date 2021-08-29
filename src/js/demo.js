function onClickHandler(event) {
    const div = document.createElement("div");
    div.classList.add('flame')
    div.innerHTML= `
    <div class="shadows"></div>
    <div class="top"></div>
    <div class="middle"></div>
    <div class="bottom"></div>`
    event.target.prepend(div)
}
function Init() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle) => {
        candle.addEventListener('click', onClickHandler)
    })
    console.log(candles)
}
Init()