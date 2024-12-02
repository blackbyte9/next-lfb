import { db } from "../db/database";
import { tBook } from "./data_definition";

export async function createBook(book : tBook) {
    const query = `
            INSERT INTO books(isbn, name)
    VALUES(?, ?) 
            `
    db.run(query, [book.isbn, book.name], function (err) {
        if (err) {
            console.log(err);
        }
    });
}
