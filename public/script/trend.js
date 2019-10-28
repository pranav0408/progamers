var results;
var container = document.querySelector('.trendContainer')
var loader = document.querySelector('.loader-container')

function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector('.container-nav').classList.toggle("changeContainerNav");
}
function myFunction2(x) {
    x.classList.toggle("changeContainerNav");
    document.querySelector('.container-main').classList.toggle("change");
}

const showAnticipated = () => {
    loader.style["opacity"]="1"
    container.innerHTML = ""
    var f = fetch('https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added')
    f.then(data =>{
        return data.json()
    }).then(data=>{
        results = data.results;
        for( var i = 0; i< 10; i+=2 ){
            container.innerHTML += `
            <div class="row">
                <div class="col-sm-6">
                    <div class="card m-3">
                        <img src="${results[i].background_image}" alt="Game Image" class="card-img-top">
                        <h3 class="card-title text-center mt-3"> ${results[i].name} </h3>
                        <div class="text-center">
                            <hr>
                        </div>
                        <div class="ml-3">
                            <p class="card-body">
                                <h4>Released: <span class="badge badge-warning"> ${results[i].released} </span> </h4>
                                <h4>Ratings: <span class="badge badge-info"> ${results[i].rating} </span> </h4>
                                <h5>Number of Suggestions: <span class="badge badge-pill badge-secondary"> ${results[i].suggestions_count} </span> </h5>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card m-3">
                        <img src="${results[i+1].background_image}" alt="Game Image" class="card-img-top">
                        <h3 class="card-title text-center mt-3"> ${results[i+1].name} </h3>
                        <div class="text-center">
                            <hr>
                        </div>
                        <div class="ml-3">
                            <p class="card-body">
                                <h4>Released: <span class="badge badge-warning"> ${results[i+1].released} </span> </h4>
                                <h4>Ratings: <span class="badge badge-info"> ${results[i+1].rating} </span> </h4>
                                <h5>Number of Suggestions: <span class="badge badge-pill badge-secondary"> ${results[i+1].suggestions_count} </span> </h5>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
        loader.style["opacity"]="0"
    })
}
const showPopular = () => {
    loader.style["opacity"]="1"
    container.innerHTML = ""
    var f = fetch('https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-added')
    f.then(data =>{
        return data.json()
    }).then(data=>{
        results = data.results;
        for( var i = 0; i< 10; i+=2 ){
            container.innerHTML += `
            <div class="row">
                <div class="col-sm-6">
                    <div class="card m-3">
                        <img src="${results[i].background_image}" alt="Game Image" class="card-img-top">
                        <h3 class="card-title text-center mt-3"> ${results[i].name} </h3>
                        <div class="text-center">
                            <hr>
                        </div>
                        <div class="ml-3">
                            <p class="card-body">
                                <h4>Released: <span class="badge badge-warning"> ${results[i].released} </span> </h4>
                                <h4>Ratings: <span class="badge badge-info"> ${results[i].rating} </span> </h4>
                                <h5>Number of Suggestions: <span class="badge badge-pill badge-secondary"> ${results[i].suggestions_count} </span> </h5>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card m-3">
                        <img src="${results[i+1].background_image}" alt="Game Image" class="card-img-top">
                        <h3 class="card-title text-center mt-3"> ${results[i+1].name} </h3>
                        <div class="text-center">
                            <hr>
                        </div>
                        <div class="ml-3">
                            <p class="card-body">
                                <h4>Released: <span class="badge badge-warning"> ${results[i+1].released} </span> </h4>
                                <h4>Ratings: <span class="badge badge-info"> ${results[i+1].rating} </span> </h4>
                                <h5>Number of Suggestions: <span class="badge badge-pill badge-secondary"> ${results[i+1].suggestions_count} </span> </h5>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
        loader.style["opacity"]="0"
    })
}