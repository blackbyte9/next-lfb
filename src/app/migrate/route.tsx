
import { migrateBooks, seedBooks } from "@/lib/books/migrate";
import { db } from "@/lib/db/database";
import { notEqual } from "assert";
import { NextResponse } from "next/server";

export async function GET() {
    let ret: string;

    try {
        const mret = await migrateBooks();
        ret = String(mret);
        if(ret != "Ok") {
            console.error('Migration with error ' + ret);
            return NextResponse.json({ error: ret }, { status: 500 });
        }
        await seedBooks();

    } catch (error) {
        console.error('Catch error ' + error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
    return NextResponse.json("Success");
}