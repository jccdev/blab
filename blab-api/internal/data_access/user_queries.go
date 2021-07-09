package data_access

import (
	"blab/api/internal/database"
	"blab/api/internal/shared"
)

type UserQueries interface {
	GetAll() ([]shared.User, error)
	Insert(user *shared.User) error
	Update(user shared.User) error
}

type UserQueriesImpl struct {
}

func NewUserQueries() UserQueries {
	return &UserQueriesImpl{}
}

func (uq UserQueriesImpl) GetAll() ([]shared.User, error) {
	users := []shared.User{}
	err := database.Db.Select(&users, "select * from users")
	return users, err
}

func (uq UserQueriesImpl) Insert(user *shared.User) error {
	res, err := database.Db.NamedQuery(`
		insert into users (user_name, email, properties, created_on, created_by_id, modified_on, modified_by_id, deleted)
		values (:user_name, :email, :properties, :created_on, :created_by_id, :modified_on, :modified_by_id, :deleted)
		returning id;
	`, user)

	if err == nil {
		id, err := get_id_from_sql(res)
		if err == nil {
			user.Id.SetValid(id)
		}
	}

	return err
}

func (uq UserQueriesImpl) Update(user shared.User) error {
	_, err := database.Db.NamedExec(`
		update users
		set
			user_name = :user_name,
			email = :email,
			properties = :properties,
			created_on = :created_on,
			created_by_id = :created_by_id,
			modified_on = :modified_on,
			modified_by_id = :modified_by_id,
			deleted = :deleted
		where
			id = :id;
	`, user)

	return err
}
