const posts = [
    { title: 'Post One', body: 'This Is Post One' },
    { title: 'Post Two', body: 'This Is Post Two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(() => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({ title: 'Post Three', body: 'This Is Post Three' }, getPosts);