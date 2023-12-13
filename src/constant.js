// variable call garda harek choti config halnu parney vako vara sab lai yo file ma call garera ekchoti matra config garney ani ja ja chainxa tei use garney

//.env ko chiz constant ma halney ani ja chainxa tya export garney.

import { config } from "dotenv";

config();
export let port = process.env.PORT;
export let email = process.env.EMAIL;
export let password = process.env.PASSWORD;
export let secretKey = process.env.SECRET_KEY;
export let serverLink = process.env.SERVER_LINK;
export let databaseLink = process.env.DATABASE_LINK;