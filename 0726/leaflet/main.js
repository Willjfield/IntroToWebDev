var map = L.map('map').setView([42, -72], 13);

let dummyData = [
    {
        name: "nyc",
        lng: -73.96820068359375,
        lat: 40.772221877329024

    },
    {
        name: "la",
        lng: -118.125,
        lat: 34.016241889667015
    }
]



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let bndsArray = []

dummyData.forEach(function (city) {
    var marker = L.marker([city.lat, city.lng]).addTo(map);
    bndsArray.push([city.lat, city.lng])
});


map.fitBounds(bndsArray)



let allResults = [];
let radius = 1;

function processFullResults(){
    //Add all the results to the map
}

function recursiveGet(min_id, totalResults) {

    let url = `https://api.inaturalist.org/v1/observations?id_above=${min_id}&lat=40.78885994449482&lng=-74.1577148&radius=${radius}&order=asc&order_by=id&per_page=200`

    axios.get(url).then((rsp) => {


        allResults = allResults.concat(rsp.data.results);
        console.log(allResults)
        console.log(rsp.data.results)
        setTimeout(() => {
            if (allResults.length < totalResults || typeof rsp.data.results === 'undefined') {
                recursiveGet((rsp.data.results[rsp.data.results.length - 1].id), totalResults);
            }else{
                console.log('DONE!')
                processFullResults();
            }
        }, 100);


        console.log(url);
        console.log(`${totalResults - allResults.length} more needed!`)
        console.log(allResults)
    })
}

function getNumResults() {
    let url = `https://api.inaturalist.org/v1/observations?lat=40.78885994449482&lng=-74.1577148&radius=${radius}&order=asc&order_by=id&per_page=1`
    axios.get(url).then((rsp) => {
        let total = rsp.data.total_results;
        console.log(total)
        recursiveGet(+rsp.data.results[0].id - 1, total);


    })
}

getNumResults()