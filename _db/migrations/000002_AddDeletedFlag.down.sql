begin;
alter table users
drop column deleted;
alter table channels
drop column deleted;
alter table messages
drop column deleted;
commit;
