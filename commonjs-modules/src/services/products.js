const productType ={
    version: 'digital',
    tax: '10%',
}

async function getFullName(codeId, productName){
    console.log( codeId + ' -- ' + productName);
}

async function getProductLabel(productName){
    console.log(productName);
}

module.exports ={
    getFullName,
    getProductLabel,
    productType
}