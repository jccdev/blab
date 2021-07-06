package main

import (
	"blab/api/internal/database"
	"blab/api/internal/routes"
	"fmt"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/rs/cors"
)

func index(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	fmt.Fprint(res, "Welcome to blab!")
}

func main() {
	database.Setup()
	defer database.Close()

	router := httprouter.New()

	router.GET("/", index)
	routes.SetupUserRoutes(router)
	routes.SetupMessageRoutes(router)
	routes.SetupChannelRoutes(router)

	handler := cors.Default().Handler(router)

	log.Fatal(http.ListenAndServe(":8080", handler))
}
