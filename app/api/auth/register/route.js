import db from "../../../(db)/index";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            userFName,
            userLName,
            userDoB,
            userAddressLine1,
            userAddressLine2,
            userCity,
            userPostcode,
            email,
            password,
            passwordConfirm,
        } = await request.json();

        const result = await db.register({
            userFName,
            userLName,
            userDoB,
            userAddressLine1,
            userAddressLine2,
            userCity,
            userPostcode,
            email,
            emailVisibility: true,
            password,
            passwordConfirm,
        });

        return NextResponse.json(result.created);
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
