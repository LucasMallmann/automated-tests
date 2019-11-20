/**
 * It's going to load the Enviroment Variables
 */

import dotenv from 'dotenv';

dotenv.config({ path: process.env === 'test' ? '.env.test' : '.env' });
