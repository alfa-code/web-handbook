FOLDER=$(yc config get folder-id)

docker build . -t cr.yandex/${FOLDER}/platform:v81
