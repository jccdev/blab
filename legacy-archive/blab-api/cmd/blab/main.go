package main

import (
	dataaccess "blab/api/internal/data-access"
	"blab/api/internal/database"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/rs/cors"
)

// func db() {

// 	var err error
// 	database.Client, err = mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
// 	if err != nil {
// 		log.Fatal(err)
// 	}

// 	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
// 	defer cancel()
// 	err = database.Client.Connect(ctx)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	defer database.Client.Disconnect(ctx)
// }

// USER Qureies
func index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	uq := dataaccess.UserQueries{}

	databases, err := uq.Get()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Fprint(w, databases)
}

func getState(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	stateQueries := dataaccess.StateQueries{}

	state, _ := stateQueries.Get()
	js, err := json.Marshal(state)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	res.Header().Set("Content-Type", "application/json")
	res.Write(js)
}

func postState(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	decoder := json.NewDecoder(req.Body)
	var state dataaccess.State
	err := decoder.Decode(&state)
	if err != nil {
		log.Fatal(err)
	}
	log.Println(state)
}

func main() {
	database.Setup()
	defer database.Close()
	router := httprouter.New()

	router.GET("/", index)
	router.GET("/state", getState)
	router.POST("/state", postState)

	handler := cors.Default().Handler(router)

	log.Fatal(http.ListenAndServe(":8080", handler))
}
