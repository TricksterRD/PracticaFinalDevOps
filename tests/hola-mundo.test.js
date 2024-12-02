const pageUrl = `file://${__dirname}/../index.html`;

describe('Prueba de la página Hola Mundo', () => {
    beforeAll(async () => {
        await page.goto(pageUrl);
    });

    test('El título debe ser Hola Mundo', async () => {
        const title = await page.title();
        expect(title).toBe('Hola Mundo');
    });

    test('Debe mostrar un encabezado con "Hola Mundo"', async () => {
        const text = await page.$eval('h1', el => el.textContent);
        expect(text).toBe('Hola Mundo');
    });
});
