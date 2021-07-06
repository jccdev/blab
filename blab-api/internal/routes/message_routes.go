package routes

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func SetupMessageRoutes(router *httprouter.Router) {
	router.GET("/messages", getMessages)
}

func getMessages(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	fmt.Fprint(res, "messages")
}
