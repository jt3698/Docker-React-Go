FROM golang:1.16 as base

FROM base as dev

RUN curl -sSfL https://raw.githubusercontent.com/CosmicWolfe/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

WORKDIR /app/api
RUN go get -u github.com/gin-gonic/gin

CMD ["air"]