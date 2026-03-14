import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function PUT(request: NextRequest) {
  const { sections } = await request.json();
  if (!Array.isArray(sections)) {
    return NextResponse.json({ error: 'sections array required' }, { status: 400 });
  }

  const supabase = await createClient();

  for (const { id, sort_order } of sections) {
    const { error } = await supabase
      .from('sections')
      .update({ sort_order })
      .eq('id', id);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
