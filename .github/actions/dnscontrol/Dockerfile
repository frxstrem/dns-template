FROM stackexchange/dnscontrol:v3.0.0@sha256:75bc898662afdcad0f5ab86b34d86ed9d8022e8efecf3a0ae381271aaba5ee8c

RUN apk add --no-cache bash

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
