var map = L.map('map').setView([42, -72], 13);

let dummyData = [
    {
        name: "nyc",
        lng:-73.96820068359375,
        lat: 40.772221877329024
        
    },
    {
        name: "la",
        lng:-118.125,
        lat:34.016241889667015
    }
]



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let bndsArray = []

dummyData.forEach(function(city){
    var marker = L.marker([city.lat,city.lng]).addTo(map);
    bndsArray.push([city.lat,city.lng])
});


map.fitBounds(bndsArray)