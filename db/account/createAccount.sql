insert into users (
    firstName,
    lastName,
    email
) values (
    $1,
    $2,
    $3
);

insert into user_login (
    password,
    email
) values (
    $4,
    $3
)