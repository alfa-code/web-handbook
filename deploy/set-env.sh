FOLDER=$(yc config get folder-id)
SA_PULLER=$(yc iam service-account get --name=${FOLDER}-sa-puller --format=json | jq -r .id)
REGISTRY=$(yc container registry get --name=main --format=json | jq -r .id)

# yc container image list --format=json

echo "FOLDER is ${FOLDER}";
echo "SA_PULLER is ${SA_PULLER}";
echo "REGISTRY is ${REGISTRY}";


