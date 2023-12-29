package handlers

import (
	"database/sql"

	"api/src/dbHandler"

	"github.com/gorilla/mux"
)

func SetupRoutes(router *mux.Router, db *sql.DB) {
	router.HandleFunc("/api/go/users", dbHandler.GetUsers(db)).Methods("GET")
	router.HandleFunc("/api/go/users", dbHandler.CreateUser(db)).Methods("POST")
	router.HandleFunc("/api/go/users/{id}", dbHandler.GetUser(db)).Methods("GET")
	router.HandleFunc("/api/go/users/{id}", dbHandler.UpdateUser(db)).Methods("PUT")
	router.HandleFunc("/api/go/users/{id}", dbHandler.DeleteUser(db)).Methods("DELETE")
}
