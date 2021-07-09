package database

import (
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var (
	Db *sqlx.DB
)

// Setup _db client and context
func Setup() {
	// this Pings the database trying to connect
	// use sqlx.Open() for sql.Open() semantics
	var err error
	Db, err = sqlx.Connect("postgres", os.Getenv("BLAB_DB"))

	if err != nil {
		log.Fatalln(err)
	}
}

// Close _db client and context
func Close() {
	Db.Close()
}
