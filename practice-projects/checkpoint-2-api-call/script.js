
const button = document.querySelector("#check");

button.addEventListener('click', postSun)

function postSun(){
    const input = document.querySelector("#input");
    fetch("https://geocode.maps.co/search?q="+ input.value +"&api_key=key").then(process_response)
}

function process_response(response) {
	response.json().then(function(text) {
        console.log(text[0])
        fetch("https://api.sunrise-sunset.org/json?lat="+text[0].lat+"&lng="+text[0].log).then(process_response2)

        console.log(text[0].display_name)
        document.querySelector("#data").textContent = text[0].display_name
    })
}

function process_response2(response) {
	response.json().then(function(text) {
        console.log(text)

        document.querySelector("#data").textContent += "  " + text.results.sunrise
    })
}