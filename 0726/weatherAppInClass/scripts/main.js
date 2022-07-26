const API_KEY = 'd08bd17521244c1c9c9200308220607';

const mediaQuery = window.matchMedia('(max-width: 500px)')
window.addEventListener('resize',function(){
// Check if the media query is true
if (mediaQuery.matches) {
    // Then trigger an alert
    console.log('Media Query Matched!')
  }
})

let agent = navigator.userAgent;
console.log(agent.includes('Mac'))


function getData(query) {
    const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q="${query}"&aqi=no`;

    $("#loading").show();

    axios.get(URL).then(function (response) {
        $("#loading").hide();
        let temp = response.data.current.temp_f;
        $("#weather-results").text(`It is ${temp} degrees out`);
        $("#weather-results").css("opacity", 0);
        $("#weather-results").show();
        $("#weather-results").animate({
            opacity:1
        },1500)

    }).catch(function (error) {
        alert(error);
    });
}

$("#submit-button").on("click",function () {
    let userInput = document.getElementById("user-input");
    getData(userInput.value);

})
//let submitButton = document.getElementById("sumbit-button");

//let timesClicked = 0;

// submitButton.addEventListener("click", function () {
//     let userInput = document.getElementById("user-input");
//     console.log(userInput.value);
//    // let resultContainer = document.getElementById("weather-results");
//     getData(userInput.value);

// });

//CLICK EXAMPLE:
// let timesClicked = 0;

// submitButton.addEventListener("click",function(){
//     timesClicked++;
//     let resultContainer = document.getElementById("weather-results");
//    // let txt = document.createTextNode(`You clicked ${timesClicked} times`);
//     resultContainer.innerText = `You clicked ${timesClicked} times`
// });
