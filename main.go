package main

import (
	"embed"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"runtime"

	"github.com/zserge/lorca"
)

//go:embed views/gameMasterView/public
var gmFolder embed.FS

//go:embed views/playersView/public
var playerFolder embed.FS

// TODO Consider struct patter to keep things
// organized between GM stuff and Player stuff
var views map[string]lorca.UI = make(map[string]lorca.UI)
var listeners map[string]net.Listener= make(map[string]net.Listener)


func main() {
	args := []string{}
	if runtime.GOOS == "linux" {
		args = append(args, "--class=Lorca")
	}
	var err error
	views["gm"], err = lorca.New("", "", 1920, 1080, args...)
	if err != nil {
		log.Fatal(err)
	}
	defer views["gm"].Close()
	
	// Create and bind Go object to the UI
	// c := &counter{}
	// ui.Bind("counterAdd", c.Add)
	// ui.Bind("counterValue", c.Value)


	listeners["gm"], err = net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		log.Fatal(err)
	}
	defer listeners["gm"].Close()
	go http.Serve(listeners["gm"], http.FileServer(http.FS(gmFolder)))

	listeners["player"], err = net.Listen("tcp", "127.0.0.1:0")
	if err != nil {
		log.Fatal(err)
	}
	defer listeners["player"].Close()
	go http.Serve(listeners["player"], http.FileServer(http.FS(playerFolder)))

	// During development proxy Svelte dev server to view
	// Currently build folder is not loading - ISSUE SUBMITTED TO LORCA PROJECT
	views["gm"].Load("http://localhost:5000")
	// views["gm"].Load(fmt.Sprintf("http://%s/gameMasterView/public/", listeners["gm"].Addr()))

	
	views["gm"].Bind("openPlayerScreen", func(){
		views["player"], err = lorca.New("", "", 1920, 1080, args...)
		if err != nil {
			log.Fatal(err)
		}
		// During development proxy Svelte dev server to view
		// Currently build folder is not loading - ISSUE SUBMITTED TO LORCA PROJECT
		views["player"].Load("http://localhost:5001")
		// views["player"].Load(fmt.Sprintf("http://%s/frontend/public/", ln.Addr()))
	})


	// Wait until the interrupt signal arrives or browser window is closed
	sigc := make(chan os.Signal)
	signal.Notify(sigc, os.Interrupt)
	select {
	case <-sigc:
	case <-views["gm"].Done():
	}

	log.Println("exiting...")
}