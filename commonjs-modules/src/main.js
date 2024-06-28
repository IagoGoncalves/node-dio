const {getFullName, getProductLabel} = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');

async function main(){
    getFullName('3', 'Iago');
    getProductLabel('jaca')

    console.log(config.production);
    console.log(products.productType.version);
    console.log(database.connectToDatabase('databaseName'));
}

main()