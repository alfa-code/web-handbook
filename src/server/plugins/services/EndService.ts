import { IAsyncService } from 'Types/service';

export type IEndService = IAsyncService;


export async function EndService(data?, fields?): Promise<IEndService> {
    return {
        ...data,
        fields,
        async map(fn) {
            return await fn(EndService(this.data, this.fields))
        },
        async create(fields) {
            return await EndService(this.data, fields);
        },
        async update(fields) {
            return await EndService(this.data, fields);
        },
        async delete() {
            return await EndService(this.data, this.fields);
        },
        toJSON() {
            return data;
        },
        async error(error) {
            const errors = Array.isArray(error) ? error : [error];
            return await EndService({ errors: [...this.error, ...errors] })
        }
    }
}

EndService.success = async function () {
    return await EndService({ success: true })
}

EndService.error = async function (error) {
    const errors = Array.isArray(error) ? error : [error];
    return await EndService({ success: false, errors })
}
