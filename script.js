const text = document.getElementById("text")
const number = document.getElementById("number")
const circle = document.getElementById("circle")

function randomAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        number.innerHTML = `<small>${data.slip.id}</small>`
        text.innerHTML = `<p>"${data.slip.advice}"</p>`
    });
}
randomAdvice()

circle.addEventListener("click", randomAdvice)





