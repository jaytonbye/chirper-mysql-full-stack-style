import { Query } from "./config";

const all = async () =>
  Query("SELECT * FROM chirps JOIN users on users.id=chirps.userid");

const individualChirp = async (chirpId: number) => {
  return Query(`SELECT * FROM chirps WHERE chirps.id=${chirpId}`);
};

interface IChirp {
  username: string;
  message: string;
}

const createTheChirp = async (chirp: IChirp) => {
  return Promise.all([
    Query(
      `INSERT INTO users (name, email, password) VALUES("${chirp.username}", "placeholder@something", "placeholder");`
    ),
    Query(`INSERT INTO chirps (userid, content) VALUES (8,"${chirp.message}")`),
  ]);
};

const updateTheChirp = async (chirpId: number, chirp: IChirp) => {
  //so far we are only updating the message, not the username
  return Promise.all([
    Query(`UPDATE chirps SET content="${chirp.message}" WHERE id="${chirpId}"`),
  ]);
};

const deleteTheChirp = async (chirpId: number) => {
  return Query(`DELETE FROM chirps WHERE id=${chirpId};`);
};

export default {
  all,
  individualChirp,
  createTheChirp,
  updateTheChirp,
  deleteTheChirp,
};
