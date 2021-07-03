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
}
