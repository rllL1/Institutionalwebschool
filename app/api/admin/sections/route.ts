import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET sections for a page
export async function GET(request: NextRequest) {
  const pageId = request.nextUrl.searchParams.get('pageId');
  if (!pageId) return NextResponse.json({ error: 'pageId required' }, { status: 400 });

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('sections')
    .select('*')
    .eq('page_id', pageId)
    .order('sort_order', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST create a new section
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { page_id, type, title, content, sort_order } = body;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('sections')
    .insert({ page_id, type, title, content: content ?? {}, sort_order: sort_order ?? 0, enabled: true })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// PUT update a section
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { id, ...updates } = body;
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('sections')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE a section
export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  const supabase = await createClient();
  const { error } = await supabase.from('sections').delete().eq('id', id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
