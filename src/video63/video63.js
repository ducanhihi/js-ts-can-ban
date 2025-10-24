console.log("video 63");

const temp = fetch("http://localhost:8000/users")
// temp.then(data => data.json())

temp
    .then(res => res.json()
        .then(data => console.log(d)))