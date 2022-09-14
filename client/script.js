const form = document.querySelector("form")
const body = document.querySelector('body')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const options = {method : 'POST',headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(user)
    }
    fetch("http://localhost:3000/posts", options)
    .then(res => res.json())
    .then((data) => {
        const h1 = document.createElement("h2");
        h1.textContent = data.title;
        const p1 = document.createElement("p");
        p1.textContent = data.author;
        const p2 = document.createElement("p");
        p2.textContent = data.body;
        body.append(h1);
        body.append(p1);
        body.append(p2);
    })
})
