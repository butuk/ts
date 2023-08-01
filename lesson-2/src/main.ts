/*
function getJson(url, options = {}) {
}

{
    res: true,
    data: T,
}

{
    res: false,
    status: 'err',
// }
let a = getJson<TProduct[]>('https://faceprog.ru/reactcourseapi/products/index.php');
//getJson<TProduct[]>('https://faceprog.ru/reactcourseapi/products/index.php?id=100')
*/

type TProduct = {
    id : number,
    title: string,
    price: number,
    rest: number,
}

type TSuccess<T> = {
    res: true,
    data: T,
}
type TError = {
    res: false,
    error: Error,
}

type TResponse<T> = TSuccess<T> | TError;

async function getJSON<T>(url : string, options: object = {}) : Promise<TResponse<T>>{
    try {
        const response = await fetch(url,options);
        const data = await response.json();
        return {res: true, data}
    }
    catch (e) {
        return {res: false, error: e instanceof Error ? e : new Error('something' + String(e))}
    }
}
(async function (){
    let catalog = await getJSON<TProduct[]>('https://faceprog.ru/reactcourseapi/products/index.php');
    if (catalog.res) {
        console.log(catalog.data);
    } else {
        console.log(catalog.error);
    }
})();



