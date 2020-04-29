// eslint-disable-next-line
export async function createSQLRequest(pgClient, sqlCommand: string) {
    const result = await new Promise((resolve, reject) => {
        try {
            pgClient.query(sqlCommand, (err, respons) => {
                if (err) {
                    throw err;
                }
                resolve(respons);
            })
        } catch(e) {
            const errorMessage = 'Не удалось выпольнить SQL запрос.';
            console.log(errorMessage, 'Error: ', e);
            reject(errorMessage);
        }
    });
    return result;
}
