import { Client } from "@elastic/elasticsearch";

function newClient(options:any): Client {
  return new Client(options);
}
async function testConnection(client: Client): Promise<string> {
  const log = {
    success: "Elasticsearch cluster is up and running!",
    fail: "Elasticsearch cluster is down.",
    error: "Error connecting to Elasticsearch: ",
  };
  try {
    const pingResult = await client.ping();
    if (pingResult) {
      console.log(log.success);
      return log.success;
    } else {
      console.log(log.fail);
      return log.fail;
    }
  } catch (error) {
    console.error(log.error, error);
    return `${log.error}${error}`;
  }
}

export default {
  newClient,
  testConnection,
};
