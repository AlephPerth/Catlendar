var today = new Date();
// getDate() devuelve el día del mes (del 1 al 31)
var day = today.getDate();
// getMonth() devuelve el mes (de 0 a 11)
var month = today.getMonth() + 1;
// getFullYear() devuelve el año completo
var year = today.getFullYear();

fetch("https://api.thecatapi.com/v1/images/search") 
    .then((res) => res.json()) 
    .then((data) => {

    const img = document.querySelector("img");
    img.src = data[0].url;

    let identificador = document.getElementById("date");
    identificador.innerHTML = `<h2> Today is ${day}-${month}-${year} </h2>`;
});



