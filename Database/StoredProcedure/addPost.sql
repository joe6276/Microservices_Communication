CREATE PROCEDURE addPost(@id VARCHAR(50) ,@title VARCHAR(300))
AS​
BEGIN

INSERT INTO post_table(id,title) VALUES(@id,@title)

END