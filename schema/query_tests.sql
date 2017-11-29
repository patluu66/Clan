
/*  see all the responses to a thread using the thread id */
-- SELECT * FROM threads  LEFT JOIN responses On threads.id = responses.thread_id WHERE threads.id =2 ;

/*  see the body of thread 2 */
-- SELECT threads.body FROM threads WHERE threads.id = 2;


/*  see the pets asscoiated with a person */
-- SELECT * FROM pets WHERE owner_id=1;

/* select all the mebers of a room */
-- SELECT * FROM room_members RIGHT JOIN people ON people.id=room_members.person_id WHERE room_id=2;