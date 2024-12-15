// checkEnvVars(); // check environmental variables

import { json } from "@remix-run/react";
import { checkEnvVars, checkStatus } from "./errorHandling";

export const getStrapiData = async (contentKey: string) => {
  checkEnvVars()

  try {
    const response = await fetch(`${process.env.STRAPI_URL_BASE}/api/${contentKey}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    checkStatus(response); // check the status

    const data = await response.json(); // get the json response

    if (data?.error) { // error check
      throw new Response("Error loading data from strapi", { status: 500 });
    }

    return json(data?.data); // return the data
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Response("Error loading data from Strapi", { status: 500 });
  }
}
