REGISTRY=$(yc container registry get --name=main --format=json | jq -r .id)

yc compute instance update-container --container-image=cr.yandex/${REGISTRY}/platform:v82 \
                                     --container-name=alfa-code-platform \
                                     --name=alfa-code-platform
