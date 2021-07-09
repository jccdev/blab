package shared

import (
	"github.com/jmoiron/sqlx/types"
	"gopkg.in/guregu/null.v4"
)

type Message struct {
	Id           null.Int       `db:"id" json:"id"`
	Contents     null.String    `db:"contents" json:"contents"`
	ChannelId    null.Int       `db:"channel_id" json:"channelId"`
	Properties   types.JSONText `db:"properties" json:"properties"`
	CreatedOn    null.String    `db:"created_on" json:"createdOn"`
	CreatedById  null.Int       `db:"created_by_id" json:"createdById"`
	ModifiedOn   null.String    `db:"modified_on" json:"modifiedOn"`
	ModifiedById null.Int       `db:"modified_by_id" json:"modifiedById"`
	Deleted      bool           `db:"deleted" json:"deleted"`
}
