package data_access

import "github.com/jmoiron/sqlx"

func get_id_from_sql(res *sqlx.Rows) (id int64, err error) {
	res.Next()
	err = res.Scan(&id)
	return
}
