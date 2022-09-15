

CREATE TABLE IF NOT EXISTS posts (
	id serial PRIMARY KEY,
    title varchar(100) NOT NULL,
    author varchar(100) NOT NULL,
    body text
);
