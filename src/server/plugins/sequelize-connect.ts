import { ModelType, Sequelize } from 'sequelize';

type PluginOptions = {
    connectionString?: string;
    models: ((Sequelize) => ModelType)[];
};

export const SequelizeConnectPlugin = {
    name: 'SequelizeConnectPlugin',
    version: '1.0.0',
    register: async function (server, options) {
        const {
            connectionString = process.env.DATABASE_URL,
            models = []
        }: PluginOptions = options;

        // Подключаемся к БД
        const sequelizeInstance = new Sequelize(connectionString);

        const modelList = {};

        models.forEach((model) => {
            const modelInstance = model(sequelizeInstance);
            const modelName = modelInstance.name;

            modelList[modelName] = modelInstance;
        })

        const sequelizeInstanceModels = sequelizeInstance.models;

        for (const key in sequelizeInstanceModels) {
            // console.log('key 111', key)
            // @ts-ignore
            // console.log('111', sequelizeInstanceModels[key].associate)
            // @ts-ignore
            if (sequelizeInstanceModels[key].associate) {
                // @ts-ignore
                sequelizeInstanceModels[key].associate(sequelizeInstance, sequelizeInstanceModels[key]);
            }
        }

        // console.log('instance11', sequelizeInstance)

        server.method('getModels', function () {
            return modelList;
        }, { cache: { generateTimeout: 100 } })

        server.method('getOrm', function () {
            return sequelizeInstance;
        }, { cache: { generateTimeout: 100 } })
    }
};
