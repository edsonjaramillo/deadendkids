import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { path } = await req.json();
  if (!path) return NextResponse.json({ revalidated: false, message: 'No path provided.' });

  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, message: `${path} revalidated.` });
  } catch (error) {
    if (!path) return NextResponse.json({ revalidated: false, message: 'Error Occured' });
  }
}
