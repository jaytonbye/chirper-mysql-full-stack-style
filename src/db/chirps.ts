import { Query } from "./config";

const all = async () => Query("SELECT * FROM chirps");

export default {
  all,
};
