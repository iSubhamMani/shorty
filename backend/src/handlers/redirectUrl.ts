import { APIGatewayProxyHandler } from "aws-lambda";
import { getUrl, putUrl } from "../utils/dynamo";

export const handler: APIGatewayProxyHandler = async (event) => {
  const shortCode = event.pathParameters?.shortCode;
  if (!shortCode)
    return { statusCode: 400, body: "Missing shortCode in request path." };

  const longUrl = await getUrl(shortCode);
  if (!longUrl) return { statusCode: 404, body: "URL not found." };
  return {
    statusCode: 301,
    headers: {
      Location: longUrl,
    },
    body: "",
  };
};
