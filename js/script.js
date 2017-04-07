function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locate, err);
    } else {
        alert("Geolocation is not supported by this browser!!");
    }
}

function locate(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=f2d9f7e154f7df5540781724fc515a2e&lat=" + latitude + "&lon=" + longitude,
        dataType: "json",
        success: function(json) {
            $("#weather").html("You are Currently in: " +json.name);
        }
    });
}

function err() {
    alert("Something umexpected has happened. Please grant us the location access senpai!!");
    console.error("location acces not Granted!");
}
$(document).ready(function() {
    getGeolocation();
});
