create table users (
    user_id serial primary key,
    firstName varChar(50),
    lastName varChar(50),
    email varChar(50)
);

create table user_login (
    login_id serial primary key,
    password text,
    email varChar(50)
);

create table vehicle (
    vehicle_id serial primary key,
    make varChar(50),
    model varChar(50),
    year int,
    miles int,
    owner int references users(user_id)
);

create table miles_log (
    miles_id serial primary key,
    distance int,
    highway_miles int,
    city_miles int,
    vehicle int references vehicle(vehicle_id)
);

create table service_records (
    service_id serial primary key,
    price int,
    miles_driven int,
    part_name VARCHAR(50),
    -- date_of_service date,
    vehicle_id int references vehicle(vehicle_id)
)