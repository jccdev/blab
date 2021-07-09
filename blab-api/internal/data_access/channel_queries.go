package data_access

import (
	"blab/api/internal/database"
	"blab/api/internal/shared"
)

type ChannelQueries interface {
	GetAll() ([]shared.Channel, error)
	Insert(user *shared.Channel) error
	Update(user shared.Channel) error
}

type ChannelQueriesImpl struct {
}

func NewChannelQueries() ChannelQueries {
	return &ChannelQueriesImpl{}
}

func (cq ChannelQueriesImpl) GetAll() ([]shared.Channel, error) {
	channels := []shared.Channel{}
	err := database.Db.Select(&channels, "select * from channels")
	return channels, err
}

func (cq ChannelQueriesImpl) Insert(channel *shared.Channel) error {
	res, err := database.Db.NamedQuery(`
		insert into channels (name, properties, created_on, created_by_id, modified_on, modified_by_id, deleted)
		values (:name, :properties, :created_on, :created_by_id, :modified_on, :modified_by_id, :deleted)
		returning id;
	`, channel)

	if err == nil {
		id, err := get_id_from_sql(res)
		if err == nil {
			channel.Id.SetValid(id)
		}
	}

	return err
}

func (cq ChannelQueriesImpl) Update(channel shared.Channel) error {
	_, err := database.Db.NamedExec(`
		update channels
		set
			name = :name,
			properties = :properties,
			created_on = :created_on,
			created_by_id = :created_by_id,
			modified_on = :modified_on,
			modified_by_id = :modified_by_id,
			deleted = :deleted
		where
			id = :id;
	`, channel)

	return err
}
