REGISTRY=$(yc container registry get --name=main --format=json | jq -r .id)

docker build . -t cr.yandex/${REGISTRY}/platform:v81
