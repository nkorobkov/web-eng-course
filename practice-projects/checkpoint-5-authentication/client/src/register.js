import "bootstrap/dist/css/bootstrap.min.css";

async function main() {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);
  if (urlParams.get("lastfailed")) {
    document.querySelector("#message").innerHTML = "User with this username already exists";
    document.querySelector("#message").classList.remove("visually-hidden");
  }
  document.querySelector("#form").addEventListener("submit", handleFormSubmit);
  console.log("added listener");
}

async function handleFormSubmit(event) {
  console.log(event);
  event.preventDefault();

  const form = new FormData(event.target);
  console.log(form, form.get("username"));

  const success = await fetch("http://192.168.0.6:3000/register", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json' // Specify JSON content
    },
    body: JSON.stringify({
      username: form.get("username"),
      usersecret: form.get("usersecret"),
    }),
    credentials: 'include'
  });

  const t = await success.json();
  console.log("just called register");
  console.log(t);
  setTimeout(() => {
    if (t) {
      window.location.replace("/");
    } else {
      window.location.href = `${window.location.pathname}?lastfailed=true`;
    }
  }, 2);
}

window.addEventListener("DOMContentLoaded", main);
