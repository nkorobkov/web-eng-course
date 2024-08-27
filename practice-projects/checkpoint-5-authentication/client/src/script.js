import 'bootstrap/dist/css/bootstrap.min.css';

async function main() {
    const home = await fetch('http://192.168.0.6:3000/home', {credentials: 'include'})
    const response = await home.json()
    console.log("received response", response)
    document.querySelector('#message').innerHTML = response.message

    response.buttons.forEach(button => {
        const br = document.querySelector('#buttonsrow');
        const bc = document.createElement('div')
        bc.classList.add('col')
        const b = document.createElement('a')
        b.classList.add('btn', 'btn-primary')
        b.innerText = button.text
        b.href = button.link;
        bc.appendChild(b)
        br.appendChild(bc)
    })
}

window.addEventListener('DOMContentLoaded', main)