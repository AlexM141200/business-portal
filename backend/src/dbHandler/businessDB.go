package dbHandler

import (
	"api/src/pkg/models"
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	//"github.com/gorilla/mux"
)

func GetBusinesses(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT * FROM businesses")
		if err != nil {
			log.Fatal(err)
		}
		defer rows.Close()

		businesses := []models.Business{}
		for rows.Next() {
			var b models.Business
			if err := rows.Scan(&b.ID, &b.Name, &b.BusinessType, &b.StarRating); err != nil {
				log.Fatal(err)
			}
			businesses = append(businesses, b)
		}
		if err := rows.Err(); err != nil {
			log.Fatal(err)
		}

		json.NewEncoder(w).Encode(businesses)
	}
}
