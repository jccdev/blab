package services

import (
	"blab/api/internal/data_access"
	"blab/api/internal/shared"
)

type UserService interface {
	GetAll() ([]shared.User, error)
	Insert(user *shared.User) error
	Update(user shared.User) error
}

type UserServiceImpl struct {
	userQueries data_access.UserQueries
}

func NewUserService() UserService {
	return &UserServiceImpl{
		userQueries: data_access.NewUserQueries(),
	}
}

func (us UserServiceImpl) GetAll() ([]shared.User, error) {
	return us.userQueries.GetAll()
}

func (us UserServiceImpl) Insert(user *shared.User) error {
	return us.userQueries.Insert(user)
}

func (us UserServiceImpl) Update(user shared.User) error {
	return us.userQueries.Update(user)
}
