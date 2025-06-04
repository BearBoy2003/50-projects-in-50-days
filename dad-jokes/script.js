const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  fetch('https://sv443.net/jokeapi/v2/joke/Any')
    .then(res => res.json())
    .then(data => {
      let jokeText;

      if (data.type === 'single') {
        jokeText = data.joke;
      } else if (data.type === 'twopart') {
        jokeText = `${data.setup}<br>${data.delivery}`;
      }

      jokeEl.innerHTML = jokeText;
    })
}