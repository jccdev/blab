package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	Client *mongo.Client
	Ctx    context.Context
	cancel context.CancelFunc
)

// Setup db client and context
func Setup() {
	var err error
	Client, err = mongo.NewClient(options.Client().ApplyURI("mongodb://127.0.0.1:27017"))
	if err != nil {
		log.Fatal(err)
	}

	Ctx, cancel = context.WithCancel(context.Background())
	err = Client.Connect(Ctx)
	if err != nil {
		log.Fatal(err)
	}
}

// Close db client and context
func Close() {
	log.Println("in close")
	cancel()
	Client.Disconnect(Ctx)
}
