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
        },
        htmlAttributesList: {
            list: []
        },
        attributesInfo: {
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
    return new Promise(async (res, rej) => {
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


                                async function mapHtmlElementData(htmlElementResponce) {
                                    const mappedHtmlElementData = {
                                        tagName: htmlElementResponce.tagName,
                                    }

                                    htmlElementResponce.structure.forEach(({ type, value }) => {
                                        mappedHtmlElementData[type] = value;
                                    });

                                    if (mappedHtmlElementData.fullDescription) {
                                        const response = await axios({
                                            method: 'get',
                                            url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/tags/${name}/description.md`,
                                        });

                                        mappedHtmlElementData.additionalDescription = {
                                            isDataLoaded: true,
                                            data: response.data
                                        }
                                    }

                                    return mappedHtmlElementData;
                                }

                                const mappedHtmlElementData = await mapHtmlElementData(response.data);

                                initialState.data.htmlTagsInfo.list[name] = mappedHtmlElementData;

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

            addHtmlData().then(async () => {
                const attributesList = await getAttributesData();
                console.log('attributesList:', attributesList)

                initialState.data.htmlAttributesList.list = attributesList;

                const attributesData = await loadAttribetesInfo(attributesList)
                console.log('attributesData:', attributesData)

                initialState.data.attributesInfo.list = attributesData;

                fs.writeFileSync('initialState.json', JSON.stringify(initialState, null, '    '), {});
                res(initialState);
            })
        } catch (error) {
            console.log('Не удалось загрузить список тегов: ', error);
            rej('Что то пошло не так');
        }
    })
}

getAllHtmlTags()

async function getAttributesData() {
    return new Promise(async (res, rej) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes-list/list.json',
            });

            const attributesList = response.data;

            res(attributesList);
        } catch(e) {
            console.log('Не удалось загрузить список атрибутов: ', error);
            rej('Что то пошло не так');
        }
    })
}

// async function prepareInitialState() {
//     const initialState = await getAllHtmlTags();
//     // console.log(12,  JSON.stringify(initialState, null, '    '))
// }

// getAllHtmlTags()

async function loadAttribetesInfo(attributesList) {
    return new Promise((r, j) => {
        // const attributesList = [
        //     {
        //         "type": "global",
        //         "name": "accesskey"
        //     },
        //     {
        //         "type": "other",
        //         "name": "target"
        //     },
        // ]
        const promises = [];
        attributesList.forEach((item) => {
            promises.push(new Promise(async (res, rej) => {
                console.log(`https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes/${item.name}/main.json`)
                try {
                    const response = await axios({
                        method: 'get',
                        url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes/${item.name}/main.json`
                    });

                    res({
                        name: item.name,
                        data: response.data
                    });
                } catch (e) {
                    res({
                        name: item.name,
                        data: null
                    });
                }
            }))
        });

        function mapStructure({ structure }) {
            const mapped = {};
            structure.forEach((element) => {
                mapped[element.type] = element.value;
            });

            return mapped;
        }

        const targetValue = {};

        Promise.all(promises).then((data) => {
            // resolve();
            const newPromises = [];
            data.forEach((item) => {
                newPromises.push(new Promise(async (res, rej) => {
                    if (item && item.data) {
                        const mapped = mapStructure(item.data);
        
                        if (mapped.fullDescription) {
                            try {
                                const response = await axios({
                                    method: 'get',
                                    url: `https://raw.githubusercontent.com/alfa-code/web-handbook-materials/main/materials/html/attributes/${item.name}/description.md`
                                });
                                // console.log('response.data', response.data)
                                mapped.additionalDescription = response.data;
                            } catch (e) {
                                console.log('eeee', e);
                            }
        
                            // mapped.additionalDescription = response.data;
                        }
        
                        // console.log('mapped', mapped)
        
                        targetValue[item.name] = mapped;
                        res();
                    } else {
                        targetValue[item.name] = null;
                        res();
                    }
                }))
            });

            Promise.all(newPromises).then(() => {
                r(targetValue);
            });
        });
    })
}
