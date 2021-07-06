package shared

import (
	"github.com/jmoiron/sqlx/types"
	"gopkg.in/guregu/null.v4"
)

type User struct {
	Id           null.Int       `db:"id" json:"id"`
	UserName     null.String    `db:"user_name" json:"userName"`
	Email        null.String    `db:"email" json:"email"`
	Properties   types.JSONText `db:"properties" json:"properties"`
	CreatedOn    null.String    `db:"created_on" json:"createdOn"`
	CreatedById  null.Int       `db:"created_by_id" json:"createdById"`
	ModifiedOn   null.String    `db:"modified_on" json:"modifiedOn"`
	ModifiedById null.Int       `db:"modified_by_id" json:"modifiedById"`
	Deleted      bool           `db:"deleted" json:"deleted"`
}
