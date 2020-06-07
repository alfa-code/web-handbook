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
        const instance = new Sequelize(connectionString);

        const modelList = {};

        models.forEach((model) => {
            const modelInstance = model(instance);
            const modelName = modelInstance.name;

            modelList[modelName] = modelInstance;
        })

        server.method('getModels', function () {
            return modelList;
        }, { cache: { expiresIn: 2000, generateTimeout: 100 } })

        server.method('getOrm', function () {
            return instance;
        }, { cache: { expiresIn: 2000, generateTimeout: 100 } })
    }
};
