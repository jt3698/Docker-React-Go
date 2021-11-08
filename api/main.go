package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	firebase "firebase.google.com/go"

	"google.golang.org/api/option"

	"github.com/gin-gonic/gin"
)

type VerifyIdTokenRequest struct {
	IdToken     string
	TestMessage string
}

func InitializeFirebaseApp() (*firebase.App, error) {
	opt := option.WithCredentialsFile("secrets/docker-react-go-firebase-adminsdk-gxyap-c0a7ac3c07.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)
	if err != nil {
		return nil, fmt.Errorf("error initializing app: %v", err)
	}
	return app, nil
}

func main() {
	firebaseApp, err := InitializeFirebaseApp()
	if err != nil {
		log.Fatalf("error initializing firebase app ", err.Error())
	}
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.POST("/verifyIdToken", func(c *gin.Context) {
		fmt.Println("verifyIdToken api called")
		var req VerifyIdTokenRequest
		if err := c.ShouldBindJSON(&req); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		fmt.Println("verifyIdToken req good, msg ", req.TestMessage)

		client, err := firebaseApp.Auth(context.Background())
		if err != nil {
			log.Fatalf("error getting Auth client: %v\n", err)
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		token, err := client.VerifyIDToken(context.Background(), req.IdToken)
		if err != nil {
			log.Fatalf("error verifying ID token: %v\n", err)
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		log.Printf("Verified ID token: %v\n", token)
		log.Printf("UID: %s", token.UID)

		c.JSON(200, gin.H{
			"UID": token.UID,
		})
	})

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
