"use strict";
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
async function getJSON(url, options = {}) {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return { res: true, data };
    }
    catch (e) {
        return { res: false, error: e instanceof Error ? e : new Error('something' + String(e)) };
    }
}
(async function () {
    let catalog = await getJSON('https://faceprog.ru/reactcourseapi/products/index.php');
    if (catalog.res) {
        console.log(catalog.data);
    }
    else {
        console.log(catalog.error);
    }
})();
