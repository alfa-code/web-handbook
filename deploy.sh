# Set the dev env
FOLDER=$(yc config get folder-id)
SA_PULLER=$(yc iam service-account get --name=${FOLDER}-sa-puller --format=json | jq -r .id)
REGISTRY=$(yc container registry get --name=main --format=json | jq -r .id)
LAST_VERSION=$(yc container image list --repository-name=$REGISTRY/web-handbook --format json | jq '.[0]' | jq .tags[0] | cut -d'"' -f2 | cut -d'v' -f2)
NEW_VERSION=$(($LAST_VERSION + 1))

echo "FOLDER is ${FOLDER}";
echo "SA_PULLER is ${SA_PULLER}";
echo "REGISTRY is ${REGISTRY}";
echo "LAST_VERSION is ${LAST_VERSION}";
echo "NEW_VERSION is ${NEW_VERSION}";

# Build the new docker image
docker build . -t cr.yandex/${REGISTRY}/web-handbook:v${NEW_VERSION}

# Push the new docker image to the remomote registry
docker push cr.yandex/${REGISTRY}/web-handbook:v${NEW_VERSION}

# Запуск для проверки
# docker run --name some-nginx -d -p 80:80 cr.yandex/crpgchanq5ana2um4jph/web-handbook:v1
