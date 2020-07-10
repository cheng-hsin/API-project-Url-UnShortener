const searchTrack = document.getElementById("shorten-btn");
const input = document.getElementById("search");
const list = document.getElementById("list");

function searchByTrack() {
  const shortUrl = input.value;
  fetch(`https://free-url-un-shortener.p.rapidapi.com/url?url=${shortUrl}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "free-url-un-shortener.p.rapidapi.com",
      "x-rapidapi-key": "c9e1c08594mshadea57faaf27465p1ef7d5jsn20c3296cfba6",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      list.innerHTML = `<div class="long-links-list-item">
        <center>
          <div class="short-link">ShortUrl    <a class="item" href="${data.ShortUrl}">${data.ShortUrl}</a></div>
          <div class="long-link">
            LongUrl   <a class="item" href="${data.longUrl}">${data.longUrl}</a>
          </div>
        </center>
        <br />
      </div>`;
    })
    .catch((err) => {
      console.log(err);
    });
}

searchTrack.addEventListener("click", searchByTrack);
