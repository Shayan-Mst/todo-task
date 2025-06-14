import { NextResponse } from 'next/server';
import fs from 'fs';

import path from 'path';


const filePath = path.join(process.cwd(),'src/app', 'data.json');

export async function DELETE(req,context) {
  
  const id = context.params.id;

  try {

    console.log(id)
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const todos = JSON.parse(fileData);

    const updatedTodos = todos.filter((todo) => todo.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(updatedTodos, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 });
  }
}
