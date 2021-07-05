const fs = require('fs');
const axios = require('axios');

// https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const initialState = {
    app: {
        settings: {
            features: {
                htmlRules: false,
                cssRules: false
            }
        }
    },
    data: {
        htmlTagsList: {
            list: []
        },
        htmlTagsInfo: {
            isLoading: false,
            list: {}
        }
    },
    UI: {
        mobileMenu: {
            isOpened: false
        }
    }
};

const getAllHtmlTags = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: 'https://web-handbook.ru/api/htmlElements/list',
        });

        const htmlElementsList = response?.data?.list;

        initialState.data.htmlTagsList.list = htmlElementsList;

        function addHtmlData() {
            return new Promise((resolve, reject) => {
                const promises = [];

                htmlElementsList.forEach(async ({ name }, id) => {
                    promises.push(new Promise(async (resolve, reject) => {
                        try {
                            const response = await axios({
                                method: 'get',
                                url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/tags/${name}/main.json`,
                            });


                            function mapHtmlElementData(htmlElementResponce) {
                                const mappedHtmlElementData = {
                                    tagName: htmlElementResponce.tagName,
                                }

                                htmlElementResponce.structure.forEach(({ type, value }) => {
                                    mappedHtmlElementData[type] = value;
                                });

                                return mappedHtmlElementData;
                            }

                            const mappedHtmlElementData = mapHtmlElementData(response.data);

                            initialState.data.htmlTagsInfo.list[name] = mappedHtmlElementData;

                            // console.log('initialState.data.htmlTagsInfo.list[name]', initialState.data.htmlTagsInfo.list[name])

                            // {
                            //     tagName: 's',
                            //     structure: [
                            //       { type: 'categories', value: [Array] },
                            //       { type: 'tag_omission', value: [Array] },
                            //       { type: 'description', value: [Array] },
                            //       { type: 'fullDescription', value: true },
                            //       { type: 'content_model', value: 'Фразовый контент.' },
                            //       { type: 'content_attributes', value: [Object] },
                            //       { type: 'example', value: false }
                            //     ]
                            //   }

                            resolve();
                        } catch (e) {
                            initialState.data.htmlTagsInfo.list[name] = null;
                            console.log('Не удалось загрузить данные по HTML элементу', name);
                            resolve();
                        }
                    }));
                });

                Promise.all(promises).then(() => {
                    resolve();
                });
            })
        }

        addHtmlData().then((d) => {
            // console.log('457457457457', d)
            fs.writeFileSync('initialState.json', JSON.stringify(initialState, null, '    '), {});
        })
    } catch (error) {
        console.log('Не удалось загрузить список тегов: ', error);
    }
}

getAllHtmlTags();
