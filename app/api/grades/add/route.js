import db from "../../../(db)/index";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { gradeCourseName, gradeMark, gradeLevelofStudy } =
            await request.json();

        const result = await db.addUserGrade(request.cookies, {
            gradeCourseName,
            gradeMark,
            gradeLevelofStudy
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
