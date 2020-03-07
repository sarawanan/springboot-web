-- noinspection SqlNoDataSourceInspectionForFile

create table if not exists person
(
    id         int(11)     not null auto_increment primary key,
    first_name varchar(30) not null,
    last_name  varchar(30) not null,
    age        int         not null
);
