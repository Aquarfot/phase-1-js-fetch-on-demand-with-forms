const init = () => {
  let inputForm = document.querySelector("form")
  inputForm.addEventListener('submit', (event) => {
    inputForm.preventDefault()
    const input = document.querySelector('input#searchByID')

    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4')
      const summary = document.querySelector('section#movieDetails p')
  
      title.innerText = data.title
      summary.innerText = data.summary
    })
    })
}

document.addEventListener('DOMContentLoaded', init);