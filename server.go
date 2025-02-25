package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
	port := flag.String("port", "8080", "Port to serve the site on")
	dir := flag.String("dir", "./public", "Directory to serve static files from")
	flag.Parse()

	fs := http.FileServer(http.Dir(*dir))
	http.Handle("/", fs)

	log.Printf("Serving Hugo site from %s on http://localhost:%s", *dir, *port)
	err := http.ListenAndServe(":"+*port, nil)
	if err != nil {
		log.Fatal("Server failed to start: ", err)
	}
}
