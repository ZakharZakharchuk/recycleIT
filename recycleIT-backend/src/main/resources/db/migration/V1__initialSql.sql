create table if not exists users (
        id int8 not null
        primary key,
        nickname varchar(255) not null,
        mail varchar(255) not null
);