create table ratings (id bigint not null auto_increment, facility_id bigint, mark decimal(2,1), user_id bigint, primary key (id));
create table roles (id bigint not null auto_increment, name varchar(255), primary key (id));
create table support_questions (id bigint not null auto_increment, answer varchar(255), message varchar(255), show_on_page bit, author bigint, primary key (id));
 create table user_roles (user_id bigint not null, role_id bigint not null);
 create table users (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id));
alter table ratings add constraint FKb3354ee2xxvdrbyq9f42jdayd foreign key (user_id) references users (id) ;
alter table support_questions add constraint FK7blpkbmj3n53dl9as5b43xlui foreign key (author) references users (id);
 alter table user_roles add constraint FKh8ciramu9cc9q3qcqiv4ue8a6 foreign key (role_id) references roles (id);
 alter table user_roles add constraint FKhfh9dx7w3ubf1co1vdev94g3f foreign key (user_id) references users (id);