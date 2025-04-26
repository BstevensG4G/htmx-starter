package user

import (
	"net/http"
	"time"

	"github.com/BstevensG4Gy/htmx-starter/api/types"
	"github.com/labstack/echo/v4"
)

func GetUser(c echo.Context) error {
	u := &types.User{
		Id:    c.Param("id"),
		Name:  "Zach",
		Email: "email@email.com",
	}
	// simulate network request
	time.Sleep(3 * time.Second)
	return c.JSON(http.StatusOK, u)
}
