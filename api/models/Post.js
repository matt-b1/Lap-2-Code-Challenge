const db = require('../dbConfig/init');

class Post {
    constructor (data) {
        this.id = data.id
        this.title = data.title
        this.author = data.author
        this.body = data.body
        this.date = data.date
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM entries WHERE entries.id = $1;`, [id]);
                let post = new Entry(postData.rows[0]);
                resolve(post);
            } catch (err) {
                reject('Entry not found')
            }
        })
    }

    static create (title, author, body) {
        return new Promise (async (resolve, reject) => {
            try {
                let postData = await db.query(`INSERT INTO entries (title, author, body) VALUES ($1, $2, $3) RETURNING *;`, [title, author, body])
                let newPost = new Entry(postData.rows[0])
                resolve(newPost);
            } catch (err) {
                reject('Error creating entry')
            }
        })
    }
}

module.exports = Post;
