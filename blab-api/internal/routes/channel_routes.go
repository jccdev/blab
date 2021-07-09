package routes

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func SetupChannelRoutes(router *httprouter.Router) {
	router.GET("/channels", getChannels)
}

func getChannels(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	fmt.Fprint(res, "channels")
}
