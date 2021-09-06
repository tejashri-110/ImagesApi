var btn = document.getElementById("btn").addEventListener("click", getPost);
var con = 0;
var div = document.getElementById("cardDiv");

function getPost() {
    fetch('https://source.unsplash.com/random')
        // 
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            for (let index = 0; index < 1; index++) {
                div.innerHTML += `
                <div class="card col-3 m-1 mx-auto">
                <img class="card-img-top" width="40px" height="180px" src="${data.message}">
                <div class="card-body">
                <h5 class="card-title">"${data.status}"</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
                `
                con = con + 1;
            }
        })

        .catch((error) => {
            console.log(error);
        })
}