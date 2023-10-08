// Hamburger Menu Function

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//  Email Address Function

const scriptURL = 'https://script.google.com/macros/s/AKfycbwIZAgUuvWUXYuKnuRbBKj-Hu7et8K0AA_vj7akoc4H3XyvQjCg3Wj4Ix6fC-cro90y/exec '
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            msg.innerHTML = "Message Sent Successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

// Dark Mode Function

var icon = document.getElementById("icons");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "assets/sun.png";
    } else {
        icon.src = "assets/moon.png";
    }
}




