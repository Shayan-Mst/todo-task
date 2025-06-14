// app/api/todos/route.js
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';

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





export async function DELETE(req, context) {
  const id = context.params.id;

  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const todos = JSON.parse(fileData);

    const updatedTodos = todos.filter((todo, index) => index.toString() !== id);

    fs.writeFileSync(filePath, JSON.stringify(updatedTodos, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}

