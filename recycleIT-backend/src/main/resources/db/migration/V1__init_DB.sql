CREATE table roles
(
id int8 generated by default as identity,
name varchar(255),
primary key (id)
);
create table user_roles (
user_id int8 not null,
 role_id int8 not null
 );
create table users (
id int8 generated by default as identity,
email varchar(255), password varchar(255),
username varchar(255),
primary key (id)
);
alter table if exists user_roles add constraint roles foreign key (role_id) references roles;
alter table if exists user_roles add constraint users foreign key (user_id) references users on delete cascade;

create table support_questions(
    id int8 generated by default as identity,
    author int8,
    message varchar(255),
    answer varchar(255),
    show_on_page boolean,
    primary key (id)
)