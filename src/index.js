const mainFunction = (event) => {
    event.preventDefault();
    const input = document.getElementById("searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector("section#movieDetails h4").innerText = data.title
        document.querySelector("section#movieDetails p").innerText = data.summary
})
}


const init = () => {
    const inputForm = document.querySelector('form') // grabbing the parent form element

    inputForm.addEventListener('submit', mainFunction)
}

document.addEventListener('DOMContentLoaded', init);



// Add event listeners to capture form data and override a form's default behavior

// Fetch data based on what the user types into that form

// Display that data on the page
