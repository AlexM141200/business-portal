package dbHandler

import (
	"database/sql"
	"log"
	"os"
)

func InitDB() (*sql.DB, error) {
	db, err := sql.Open("postgres", os.Getenv("DATABASE_URL"))
	if err != nil {
		return nil, err
	}

	// create User table if not exists
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, name TEXT, email TEXT)")
	if err != nil {
		log.Fatal(err)
	}

	// create Business Table if not exists
	_, err = db.Exec("CREATE TABLE IF NOT EXISTS businesses (id SERIAL PRIMARY KEY, name TEXT, businessType TEXT, starRating INT)")
	if err != nil {
		log.Fatal(err)
	}

	return db, nil

}
