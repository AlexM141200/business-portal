package models

type Business struct {
	ID           int    `json:"id"`
	Name         string `json:"name"`
	BusinessType string `json:"businessType"`
	StarRating   int    `json:"starRating"`
}
