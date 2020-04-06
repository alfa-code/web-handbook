FOLDER=$(yc config get folder-id)

docker push cr.yandex/${FOLDER}/platform:v80
