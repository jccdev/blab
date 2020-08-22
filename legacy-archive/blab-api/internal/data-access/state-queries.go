package dataaccess

type State struct {
	Channels []Channel
}

type StateQueries struct {
}

type Channel struct {
	Name     string
	Channels []Channel
}

func (s StateQueries) Get() (State, error) {
	state := State{Channels: []Channel{{Name: "test", Channels: []Channel{}}}}

	return state, nil
	// collection := database.Client.Database("blab").Collection("users")
	// var user User
	// err := collection.FindOne(database.Ctx, bson.M{"email": "test@test.com"}).Decode(&user)
	// if err != nil {
	// 	return user, err
	// }
	// return user, nil
}
