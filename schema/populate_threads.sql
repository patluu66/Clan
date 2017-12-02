USE tester;

/*  Car with lights on */
INSERT INTO threads (title, PersonId, createdAt, updatedAt, body) 
VALUES ('Car - Lights On!', 2, NOW(), NOW(),"There is a car with it's lights on at the corner");

/* responses */
INSERT INTO responses (ThreadId, PersonId, createdAt, updatedAt, response)
VALUES (1, 4, NOW(), NOW(), "Oh, that's my friends - thanks for the heads up");

INSERT INTO responses (ThreadId, PersonId, createdAt, updatedAt, response)
VALUES (1, 2, NOW(),NOW(),  "No problem");


/*  skunk problem */

INSERT INTO threads (title, PersonId, createdAt, updatedAt,  body) 
VALUES ('Skunk Afoot', 4, NOW(), NOW(),"There is a skunk living in the drainage culvert - beware!");

/* responses */
INSERT INTO responses (ThreadId, PersonId, createdAt, updatedAt, response)
VALUES (2, 1, NOW(), NOW(), "I'll stay clear");

INSERT INTO responses (ThreadId, PersonId, createdAt,  updatedAt,response)
VALUES (2, 4, NOW(), NOW(), "I've been smelling him for a bit now...");