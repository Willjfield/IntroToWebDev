const API_KEY = 'd08bd17521244c1c9c9200308220607';

function getData(query) {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q="${query}"&aqi=no`;
    console.log(URL)
    axios.get(URL).then(function (response) {
        console.log(response)
        document.getElementById("loading-msg").style.display = "none";

        let temp = response.data.current.temp_f;
        let resultContainer = document.getElementById("weather-results");
        resultContainer.innerText = `It is ${temp} degrees out`;


    }).catch(function (error) {
        alert(error);
    });
}

let submitButton = document.getElementById("sumbit-button");

let timesClicked = 0;

submitButton.addEventListener("click", function () {
    let userInput = document.getElementById("user-input");
    console.log(userInput.value);
   // let resultContainer = document.getElementById("weather-results");
    getData(userInput.value);

});

//CLICK EXAMPLE:
// let timesClicked = 0;

// submitButton.addEventListener("click",function(){
//     timesClicked++;
//     let resultContainer = document.getElementById("weather-results");
//    // let txt = document.createTextNode(`You clicked ${timesClicked} times`);
//     resultContainer.innerText = `You clicked ${timesClicked} times`
// });
