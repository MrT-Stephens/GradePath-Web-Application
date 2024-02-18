import db from "../../../(db)/index";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
    try {
        const {
            userFName,
            userLName,
            userDoB,
            userAddressLine1,
            userAddressLine2,
            userCity,
            userPostcode
        } = await request.json();

        const result = await db.updateUser(request.cookies, {
            userFName,
            userLName,
            userDoB,
            userAddressLine1,
            userAddressLine2,
            userCity,
            userPostcode
        });

        return NextResponse.json(result);
    } catch (err) {
        return new Response(
            JSON.stringify({ error: err.message || err.toString() }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}
