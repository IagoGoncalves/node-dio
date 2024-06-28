import connectToDatabase from "./utils/database.js";
// import * as database from "./utils/database.js";
// import { connectToDatabase } from "./utils/database.js"; "./utils/database.js";
import { getDataFromApi } from "./utils/api.js";

connectToDatabase('databaseName');
getDataFromApi()