package services

import (
	"blab/api/internal/data_access"
	"blab/api/internal/shared"
)

type ChannelService interface {
	GetAll() ([]shared.Channel, error)
	Insert(user *shared.Channel) error
	Update(user shared.Channel) error
}

type ChannelServiceImpl struct {
	channelQueries data_access.ChannelQueries
}
