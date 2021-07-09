package routes

import (
	"blab/api/internal/services"
	"blab/api/internal/shared"
	"encoding/json"
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type UserRoutes struct {
	userService services.UserService
}

func SetupUserRoutes(router *httprouter.Router) {
	ur := UserRoutes{
		userService: services.NewUserService(),
	}
	router.GET("/users", ur.getUsers)
	router.POST("/users", ur.postUser)
	router.PUT("/users", ur.putUser)
}

func (ur UserRoutes) getUsers(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {

	users, err := ur.userService.GetAll()

	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	js, err := json.Marshal(users)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	res.Header().Set("Content-Type", "application/json")
	res.Write(js)
}

func (ur UserRoutes) postUser(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	var user shared.User

	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	err = ur.userService.Insert(&user)

	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	js, err := json.Marshal(user)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	res.Header().Set("Content-Type", "application/json")
	res.Write(js)
}

func (ur UserRoutes) putUser(res http.ResponseWriter, req *http.Request, _ httprouter.Params) {
	var user shared.User

	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	err = ur.userService.Update(user)

	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	js, err := json.Marshal(user)
	if err != nil {
		http.Error(res, err.Error(), http.StatusInternalServerError)
		log.Fatal(err)
	}

	res.Header().Set("Content-Type", "application/json")
	res.Write(js)
}
