const API_KEY = 'd08bd17521244c1c9c9200308220607';
const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=New York&aqi=no`;

axios.get(URL).then((resp) => {
    let loading = document.getElementById('loading-message');
    let results = document.getElementById('loading-message');
    loading.style.display = "none";
    results.style.display = "block";
    results.innerText = resp.data.current.condition.text;
    console.log(resp.data.current);
}).catch((e) => {
    let loading = document.getElementById('loading-message');
    let error = document.getElementById('error');
    console.error(e)
    loading.style.display = "none";
    error.style.display = "block";
})