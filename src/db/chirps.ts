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

const updateTheChirp = async (chirpId: number) => {
  //the first query will create a new username if it doesn't already exist, the 2nd query updates the message and username of the chirp.
  //not finished
  Query(`UPDATE users SET name='jason' WHERE`);
  Query(``);
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
