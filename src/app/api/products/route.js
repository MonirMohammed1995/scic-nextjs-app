import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "products.json");

// GET - fetch all products
export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const products = JSON.parse(data || "[]");
    return NextResponse.json(products);
  } catch (err) {
    return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
  }
}

// POST - add a new product
export async function POST(req) {
  try {
    const newProduct = await req.json();

    // read old data
    let products = [];
    try {
      const data = await fs.readFile(filePath, "utf8");
      products = JSON.parse(data || "[]");
    } catch {
      products = [];
    }

    // add new product with id
    const productWithId = { id: Date.now(), ...newProduct };
    products.push(productWithId);

    // save file
    await fs.writeFile(filePath, JSON.stringify(products, null, 2));

    return NextResponse.json(productWithId, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
