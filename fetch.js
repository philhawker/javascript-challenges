const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(postsPromise);

// - Then turn that into json
postsPromise.then(data => data).then(data => data.json())
    .then(data => {
        data.array.foreach((item) => {
            console.log(item.title);
        });
    })
    .catch((err) => {
        console.log(err);
    });
console.log()