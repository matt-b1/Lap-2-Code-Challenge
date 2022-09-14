DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
	id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    author_name varchar(100) NOT NULL,
    body text
);
