begin;
alter table users
add column deleted boolean not null default false;
alter table channels
add column deleted boolean not null default false;
alter table messages
add column deleted boolean not null default false;
commit;
