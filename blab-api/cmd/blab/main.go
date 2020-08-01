package main

import (
	dataaccess "blab/api/internal/data-access"
	"blab/api/internal/database"
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

func index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	uq := dataaccess.UserQueries{}

	databases, err := uq.Get()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Fprint(w, databases)
}

func main() {
	database.Setup()
	defer database.Close()
	router := httprouter.New()

	router.GET("/", index)
	handler := cors.Default().Handler(router)

	log.Fatal(http.ListenAndServe(":8080", handler))
}
