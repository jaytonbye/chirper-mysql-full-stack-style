import * as mysql from "mysql";

// I believe this is the credential to access the database, it will be used whenever I use the Query function which is defined below?
export const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "chirprapp",
  password: "fakepassword",
  database: "chirper",
});

//I believe this means that query is a function that accepts a string, and an optional array called values that can be made of strings and numbers? I don't really understand what is happening in the function.
export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {};
