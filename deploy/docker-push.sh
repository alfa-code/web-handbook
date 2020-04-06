REGISTRY=$(yc container registry get --name=main --format=json | jq -r .id)

docker push cr.yandex/${REGISTRY}/platform:v81
