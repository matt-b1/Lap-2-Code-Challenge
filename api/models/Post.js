const db = require('../dbConfig/init');

class Post {
    constructor (data) {
        this.id = data.id
        this.title = data.title
        this.author = data.author
        this.body = data.body
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE posts.id = $1;`, [id]);
                let post = new Post(postData.rows[0]);
                resolve(post);
            } catch (err) {
                reject('Post not found')
            }
        })
    }

    static create ({title, author, body}) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO posts (title, author, body) VALUES ($1, $2, $3) RETURNING *;`, [title, author, body])
                let newPost = new Post(postData.rows[0])
                resolve(newPost);
            } catch (err) {
                reject('Error creating posts')
            }
        })
    }
}

module.exports = Post;
