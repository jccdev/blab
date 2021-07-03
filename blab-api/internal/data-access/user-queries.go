package dataaccess

import (
	"blab/api/internal/database"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type UserQueries struct {
}

type User struct {
	ID       primitive.ObjectID
	Email    string
	UserName string
}

func (u UserQueries) Get() (User, error) {
	collection := database.Client.Database("blab").Collection("users")
	var user User
	err := collection.FindOne(database.Ctx, bson.M{"email": "test@test.com"}).Decode(&user)
	if err != nil {
		return user, err
	}
	return user, nil
}
