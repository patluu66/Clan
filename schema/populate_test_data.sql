/*   Some Test Data  */

USE night_birds_db;

/*  generate some people */

INSERT INTO people (first_name, last_name, street_address, home_phone, work_phone, mobile_phone, email) 
VALUES ('John', 'Smith', "123 Maple Lane", 415876294, 408254581, 4155589932, 'johnny71@nowhere.net');

INSERT INTO people (first_name, last_name, street_address, home_phone, work_phone, mobile_phone, email) 
VALUES ('Jane', 'White', "453 Elm Street", 5034267581, 4089978252, 5031115667, 'jane_white@nowhere.net');

INSERT INTO people (first_name, last_name, street_address, home_phone, work_phone, mobile_phone, email) 
VALUES ('Fred', 'Applebaum', "17 Throny Tree", 5034267581, 4089978252, 5031115667, 'fredstheman@idontexist.org');

INSERT INTO people (first_name, last_name, street_address, home_phone, work_phone, mobile_phone, email) 
VALUES ('Jim', 'Fredrickson', "12 Throny Tree", 4084267581, 4159978252, 4081115667, 'jimmya1@wheresisat.org');

INSERT INTO people (first_name, last_name, street_address, home_phone, work_phone, mobile_phone, email) 
VALUES ('Samantha', 'Greystone', "128 Maple Lane", 4154287381, 4158729654, null, 'sammyg@wheresisat.org');

INSERT INTO people (first_name, last_name, street_address, home_phone, work_phone, mobile_phone, email) 
VALUES ('Meredith', 'McConnel', "500 Elm Street", 4083347381, null, 408993256, 'mmcconnel@idontexist.org');


/*  genreate some pets */


INSERT INTO pets (owner_id, type, breed, name, notes)
VALUES (1, 'cat', 'Persian', 'Miss Kittens', "Wanders away sometimes...");

INSERT INTO pets (owner_id, type, breed, name, notes)
VALUES (1, 'cat', 'American Housecat', 'Sparkles', "Comes to sparky");

INSERT INTO pets (owner_id, type, breed, name, notes)
VALUES (2, 'dog', 'Mastif', 'Pickles', "Barks a lot when excited - don't worry  he's friendly");


INSERT INTO pets (owner_id, type, breed, name, notes)
VALUES (5, 'dog', 'Pekingese', 'Princess', "Very shy, sometimes nippy");


/*  
	generate rooms 
    not sure about this relationship...
    rooms would be the user sandbox...
    announcements, calenders, etc are associated with a room
    
*/

INSERT INTO rooms (room_name, creator_id, room_key) VALUES ('Maple Lane Group', 2, 'ASDHUYebafdf3240631dfhbld');

INSERT INTO rooms (room_name, creator_id, room_key) VALUES ('Elm Street & Throny Tree', 4, 'asdhla3247823ojaod');


/*  Must have some users for this to work... */

INSERT INTO room_members(room_id, person_id) VALUES(1,1);
INSERT INTO room_members(room_id, person_id) VALUES(1,2);
INSERT INTO room_members(room_id, person_id) VALUES(1,3);
INSERT INTO room_members(room_id, person_id) VALUES(2,4);
INSERT INTO room_members(room_id, person_id) VALUES(2,5);
INSERT INTO room_members(room_id, person_id) VALUES(2,6);
responses

/*  
     ---------  message test data ----------
       
*/

/*  Car with lights on */
INSERT INTO threads (title, PersonId, posted_date, body) 
VALUES ('Car - Lights On!', 2, NOW(), "There is a car with it's lights on at the corner");

/* responses */
INSERT INTO responses (ThreadId, PersonId, posted_date, response)
VALUES (1, 4, NOW(), "Oh, that's my friends - thanks for the heads up");

INSERT INTO responses (ThreadId, PersonId, posted_date, response)
VALUES (1, 2, NOW(), "No problem");


/*  skunk problem */

INSERT INTO threads (title, PersonId, posted_date, body) 
VALUES ('Skunk Afoot', 4, NOW(), "There is a skunk living in the drainage culvert - beware!");

/* responses */
INSERT INTO responses (ThreadId, PersonId, posted_date, response)
VALUES (2, 1, NOW(), "I'll stay clear");

INSERT INTO responses (ThreadId, PersonId, posted_date, response)
VALUES (2, 4, NOW(), "I've been smelling him for a bit now...");