/**
 * It's going to load the Enviroment Variables
 */
const dotenv = require('dotenv');

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });
