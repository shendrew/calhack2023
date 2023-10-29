CREATE TABLE users (
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    userID INTEGER,
    PRIMARY KEY (userid)
);

CREATE TABLE timestats (
    userID INTEGER,
    startTime TIMESTAMP,
    endTime TIMESTAMP,
    avgFluc TIME, 
    duration TIME
);