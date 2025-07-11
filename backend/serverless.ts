import type { AWS } from "@serverless/typescript";

const config: AWS = {
  service: "url-shortener",
  frameworkVersion: "4",
  plugins: ["serverless-domain-manager"],
  provider: {
    name: "aws",
    runtime: "nodejs22.x",
    region: "ap-south-1",
    environment: {
      URLS_TABLE: "Urls",
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: ["dynamodb:*"],
        Resource: { "Fn::GetAtt": ["UrlsTable", "Arn"] },
      },
    ],
  },
  functions: {
    shortenUrl: {
      handler: "src/handlers/shortenUrl.handler",
      events: [
        {
          http: {
            method: "post",
            path: "shorten",
            cors: {
              origin: "https://app.shorty.subhammani.xyz",
              headers: ["Content-Type"],
              allowCredentials: false,
            },
          },
        },
      ],
    },
    redirectUrl: {
      handler: "src/handlers/redirectUrl.handler",
      events: [
        {
          http: {
            method: "get",
            path: "{shortCode}",
            cors: {
              origin: "*",
              headers: ["Content-Type"],
              allowCredentials: false,
            },
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      UrlsTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "Urls",
          AttributeDefinitions: [
            { AttributeName: "shortCode", AttributeType: "S" },
          ],
          KeySchema: [{ AttributeName: "shortCode", KeyType: "HASH" }],
          BillingMode: "PAY_PER_REQUEST",
        },
      },
    },
  },
  package: { individually: true },
  custom: {
    customDomain: {
      domainName: "shorty.subhammani.xyz",
      basePath: "",
      stage: "dev",
      createRoute53Record: false,
      endpointType: "edge",
      certificateArn:
        "arn:aws:acm:us-east-1:059639822914:certificate/4036047f-7f6c-4b7c-8499-b296090cd848",
      certificateRegion: "us-east-1",
    },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      target: "node18",
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = config;
