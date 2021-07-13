import fs from "fs";
import util from "util";

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

export const create = async (userId) => {
  const newInviter = {
    userId,
    invitesCreated: 0,
    grantedAt: new Date(),
  };
  await set(newInviter);

  return newInviter;
};

export const get = async (userId) => {
  // TODO Handle error can't load file.
  const result = await readFile("./src/inviterData.json");

  // TODO Handle error can't parse.
  const inviters = JSON.parse(result.toString());
  const existingInviter = inviters.find((i) => i.userId === userId);

  return existingInviter;
};

export const index = async () => {
  const result = await readFile("./src/inviterData.json");
  return JSON.parse(result.toString());
};

export const set = async (updatedInviter) => {
  const inviters = await index();
  let existingInviter = inviters.find(
    (i) => i.userId === updatedInviter.userId
  );

  if (existingInviter) Object.assign(existingInviter, updatedInviter);
  else inviters.push(updatedInviter);

  const stringified = JSON.stringify(inviters);
  await writeFile("./src/inviterData.json", stringified);
};
