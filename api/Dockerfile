FROM ubuntu:18.04 as builder

RUN apt-get update && apt-get install -y curl zip unzip

RUN curl -LO https://github.com/protocolbuffers/protobuf/releases/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip
RUN unzip protoc-3.15.8-linux-x86_64.zip -d /root/protoc

FROM golang:1.16 as base

FROM base as dev

RUN curl -sSfL https://raw.githubusercontent.com/CosmicWolfe/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin
RUN curl -LO https://github.com/grpc/grpc-web/releases/download/1.3.0/protoc-gen-grpc-web-1.3.0-linux-x86_64
RUN mv protoc-gen-grpc-web-1.3.0-linux-x86_64 /bin/protoc-gen-grpc-web
RUN chmod +x /bin/protoc-gen-grpc-web

WORKDIR /app/api

COPY --from=builder /root/protoc /
RUN export PATH="$PATH:/protoc/bin"
RUN export PATH="$PATH:/bin"

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1

RUN export PATH="$PATH:$(go env GOPATH)/bin"

COPY go.mod .
COPY go.sum .

# Get dependencies - will also be cached if we won't change mod/sum
RUN go mod download
# COPY the source code as the last step
COPY . .

CMD ["air"]