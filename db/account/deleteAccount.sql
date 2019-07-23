delete from users
where email = $1

delete from user_login
where email = $1