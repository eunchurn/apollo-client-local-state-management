import { ApolloClient, InMemoryCache } from "@apollo/client";
import Papa from "papaparse";
import { isEmpty } from "lodash";
import { GetAllDataDocument, Data } from "generated/graphql";
import { resolvers } from "./resolvers";

/**
 * It fetches a CSV file, decodes it, and returns the decoded string
 * @param {string} path - The path to the CSV file.
 * @returns A promise that resolves to a string
 */
async function fetchCsv(path: string) {
  const response = await fetch(path);
  const reader = response.body?.getReader();
  const decoder = new TextDecoder("utf-8");
  if (!reader) throw new Error("No reader found");
  const result = await reader.read();
  return decoder.decode(result.value);
}

/**
 * It takes a string of CSV data, and returns a promise that resolves to an array of objects
 * @param {string} rawCsv - string - the raw CSV data
 * @returns A promise that resolves to an array of data objects.
 */
function parseCsv(rawCsv: string): Promise<Data[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(rawCsv, {
      header: true,
      complete(results: Papa.ParseResult<Data>) {
        if (isEmpty(results.data)) return reject("empty");
        return resolve(results.data);
      },
    });
  });
}

/**
 * GetData fetches a CSV file from a given path, parses it, and returns the parsed data.
 * @param {string} path - The path to the CSV file.
 * @returns An array of objects.
 */
async function getData(path: string) {
  const rawCsv = await fetchCsv(path);
  const parsedData = await parseCsv(rawCsv);
  return parsedData;
}

const cache = new InMemoryCache();

getData("TechCrunchcontinentalUSA.csv").then((data) => {
  cache.writeQuery({ query: GetAllDataDocument, data: { getAllData: data } });
});

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  resolvers,
});
