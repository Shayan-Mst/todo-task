// app/api/todos/route.js
import { writeFile, readFile } from 'fs/promises';
import path from 'path';


const filePath = path.join(process.cwd(),'src/app', 'data.json');

export async function GET() {
  const data = await readFile(filePath, 'utf-8');
  return new Response(data, {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const body = await req.json();

  const currentData = JSON.parse(await readFile(filePath, 'utf-8'));

  if (currentData.length >= 5) {
    return new Response(
      JSON.stringify({ error: 'Exceed maximum todo add' }),
      { status: 400 }
    );
  }

  const newTodo = {
    id: crypto.randomUUID(), // ✅ Generate unique ID
    ...body,
  };

  currentData.push(newTodo); // اضافه کردن کار جدید با شناسه

  await writeFile(filePath, JSON.stringify(currentData, null, 2));

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}






