begin;
create table users (
		id serial not null,
		user_name varchar(250),
		email varchar(500),
		properties jsonb,
		created_on timestamp with time zone,
		created_by_id int,
		modified_on timestamp with time zone,
		modified_by_id int,
		primary key(id),
		constraint fk_users_users_created_by_id foreign key(created_by_id) references users(id),
		constraint fk_users_users_modified_by_id foreign key(modified_by_id) references users(id)
);

create table channels (
		id serial not null,
		name varchar(250),
		properties jsonb,
		created_on timestamp with time zone,
		created_by_id int,
		modified_on timestamp with time zone,
		modified_by_id int,
		primary key(id),
		constraint fk_channels_users_created_by_id foreign key(created_by_id) references users(id),
		constraint fk_channels_users_modified_by_id foreign key(modified_by_id) references users(id)
);

create table messages (
		id serial not null,
		contents text,
		channel_id int,
		properties jsonb,
		created_on timestamp with time zone,
		created_by_id int,
		modified_on timestamp with time zone,
		modified_by_id int,
		primary key(id),
		constraint fk_messages_channels_channel_id foreign key(channel_id) references channels(id),
		constraint fk_messages_users_created_by_id foreign key(created_by_id) references users(id),
		constraint fk_messages_users_modified_by_id foreign key(modified_by_id) references users(id)
);
commit;
