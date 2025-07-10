import { APIGatewayProxyHandler } from "aws-lambda";
import { nanoid } from "nanoid";
import { putUrl } from "../utils/dynamo";

export const handler: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  const longUrl = body.longUrl;

  if (!longUrl)
    return { statusCode: 400, body: "Missing longUrl in request body." };

  const shortCode = nanoid(7);
  await putUrl(shortCode, longUrl);

  return {
    statusCode: 200,
    body: JSON.stringify({
      shortUrl: `https://${event.headers.Host}/${shortCode}`,
    }),
  };
};
