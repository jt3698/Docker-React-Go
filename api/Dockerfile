FROM golang:1.16 as base

FROM base as dev

RUN curl -sSfL https://raw.githubusercontent.com/CosmicWolfe/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin

WORKDIR /app/api

COPY go.mod .
COPY go.sum .

# Get dependencies - will also be cached if we won't change mod/sum
RUN go mod download
# COPY the source code as the last step
COPY . .

CMD ["air"]