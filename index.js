// fetch("https://restcountries.com/v3.1/all")
//   .then((data) => data.json())
//   .then((data1) => {
//     data1.forEach(country => {
//       const officialName = country.name.official;
//       const capital = country.capital[0];
//       console.log(officialName);
//       console.log(capital);
//     });
//   })
//   .catch(error => console.error("Error:", error));


var container = document.createElement("div")
container.className = "container";

var row = document.createElement("div")
row.className = "row"
row.classList.add("row","m-3")
var res = fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((data1) => foo(data1))
container.append(row)
function foo(data1) {
  for (let index = 0; index < data1.length; index++) {
    row.innerHTML += `<div class="col-md-4">
      <div class="card border-primary mb-3 " style="width: 18rem;">
  <img src="${data1[index].flags.svg}" class="card-img-top" alt="countryflag">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>  
    
    </div>
    </div>`
    document.body.append(container)
  }
}