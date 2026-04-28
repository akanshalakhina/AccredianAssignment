import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 🔹 Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { ok: false, error: "Name and Email are required" },
        { status: 400 }
      );
    }

    // 🔹 Connect to MongoDB
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("accredian");

    // 🔹 Insert data
    const result = await db.collection("leads").insertOne({
      name: body.name,
      email: body.email,
      company: body.company || "",
      size: body.size || "",
      message: body.message || "",
      createdAt: new Date(),
    });

    await client.close();

    return NextResponse.json({
      ok: true,
      message: "Lead saved successfully",
      id: result.insertedId,
    });

  } catch (error: any) {
    console.error("Error:", error);

    return NextResponse.json(
      { ok: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("accredian");

    const leads = await db.collection("leads").find().toArray();

    await client.close();

    return NextResponse.json({
      ok: true,
      count: leads.length,
      leads,
    });

  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}