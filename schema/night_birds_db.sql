
DROP DATABASE IF EXISTS night_birds_db;

/* create the database */
CREATE DATABASE night_birds_db;

USE night_birds_db;

/* Create the people Table */
CREATE TABLE people
(
	id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	street_address VARCHAR(255) NOT NULL,
	home_phone BIGINT,
  work_phone BIGINT,
  mobile_phone BIGINT,
  email VARCHAR(255)

);

/*  create a pets table */
CREATE TABLE pets
(
	id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
  owner_id int NOT NULL, FOREIGN KEY (owner_id) REFERENCES people(id),
  type VARCHAR(255) NOT NULL,
  breed VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  notes TEXT NOT NULL

);

/*

		Create the rooms
        Any user can create a room.
        WHen they do, they have ownership over the members and
        can invite users with the room key (some unique string)


*/
CREATE TABLE rooms
(
	id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
  creator_id INT NOT NULL, FOREIGN KEY (creator_id) REFERENCES people(id),
	room_name VARCHAR(255) NOT NULL,
  room_key VARCHAR(255) NOT NULL

);


/*

	Create the room members

*/
CREATE TABLE room_members
(
	id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
	room_id INT NOT NULL, FOREIGN KEY (room_id) REFERENCES rooms(id),
  person_id INT NOT NULL, FOREIGN KEY (person_id) REFERENCES people(id)

);


/*
	Create the Threads Table
    Threads are 'topics' in a room

*/
CREATE TABLE threads (

  id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id),
	title VARCHAR(255) NOT NULL,
	owner_id int NOT NULL, FOREIGN KEY (owner_id) REFERENCES people(id),
  posted_date DATETIME NOT NULL,
  body TEXT NOT NULL



);

/*

	 Create the Responses
     Responses are the replys to a main thread

*/
CREATE TABLE responses (

    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    thread_id int NOT NULL, FOREIGN KEY (thread_id) REFERENCES threads(id),
    owner_id int NOT NULL, FOREIGN KEY (owner_id) REFERENCES people(id),
    posted_date DATETIME NOT NULL,
    response TEXT NOT NULL



);
