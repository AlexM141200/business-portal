package handlers

import (
	"database/sql"

	"api/src/dbHandler"

	"github.com/gorilla/mux"
)

func SetupBusinessRoutes(router *mux.Router, db *sql.DB) {
	router.HandleFunc("/api/go/businesses", dbHandler.GetBusinesses(db)).Methods("GET")
	//router.HandleFunc("/api/go/businesses", dbHandler.CreateBusiness(db)).Methods("POST")
	//router.HandleFunc("/api/go/businesses/{id}", dbHandler.GetBusiness(db)).Methods("GET")
	//router.HandleFunc("/api/go/businesses/{id}", dbHandler.UpdateBusiness(db)).Methods("PUT")
	//router.HandleFunc("/api/go/businesses/{id}", dbHandler.DeleteBusiness(db)).Methods("DELETE")
}
