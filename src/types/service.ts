import { Shape } from 'Types/objects';

export type IService = {
    map: (IService) => any;
    create: (...args) => IService;
    update: (...args) => IService;
    delete: (...args) => IService;
    toJSON: (...args) => Shape<any>;
}

export type IAsyncService = {
    map: (IAsyncService) => any;
    create: (...args) => Promise<IAsyncService>;
    update: (...args) => Promise<IAsyncService>;
    delete: (...args) => Promise<IAsyncService>;
    toJSON: (...args) => Shape<any>;
}
