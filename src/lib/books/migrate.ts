import { delimiter } from "path";
import { db } from "../db/database";
import Papa from "papaparse";
import { promises as fs } from 'fs';
import { createBook } from "./crud_db";

export async function migrateBooks(): Promise<string> {
    let ret = "Ok";

    db.serialize(() => {
        db.run(
            `
            CREATE TABLE IF NOT EXISTS books (
                isbn TEXT PRIMARY KEY,
                name TEXT NOT NULL             
            ); 
            `,
            (err: Error) => {
                if (err) {
                    console.error(err.message);
                    ret = err.message;
                }
                console.log("books table created successfully.");
            }
        );
    });
    return "Ok";
};

export async function seedBooks(): Promise<string> {
    const file = await fs.readFile(process.cwd() + "/data/books.txt", 'utf8');
    Papa.parse(file, {
        delimiter: ";",
        header: false,
        skipEmptyLines: true,
        complete: function (results: { data: any; }) {
            console.log(results.data)
            results.data.forEach((book: any[]) => {
                createBook({
                    isbn: book[0],
                    name: book[1]
                })
            });
            
        },
    })

    return "Ok";
};