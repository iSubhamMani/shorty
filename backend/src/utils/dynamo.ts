import AWS from "aws-sdk";

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE = process.env.URLS_TABLE || "Urls";

export async function putUrl(shortCode: string, longUrl: string) {
  await dynamo
    .put({
      TableName: TABLE,
      Item: {
        shortCode,
        longUrl,
        createdAt: new Date().toISOString(),
      },
    })
    .promise();
}

export async function getUrl(shortCode: string): Promise<string | null> {
  const result = await dynamo
    .get({
      TableName: TABLE,
      Key: { shortCode },
    })
    .promise();

  return result?.Item?.longUrl || null;
}
