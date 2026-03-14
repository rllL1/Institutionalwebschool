import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File | null;
  if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });

  const adminSupabase = createAdminClient();

  // Generate unique path
  const ext = file.name.split('.').pop() || 'bin';
  const storagePath = `uploads/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const arrayBuffer = await file.arrayBuffer();
  const { error: uploadError } = await adminSupabase.storage
    .from('media')
    .upload(storagePath, arrayBuffer, {
      contentType: file.type,
      upsert: false,
    });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data: urlData } = adminSupabase.storage
    .from('media')
    .getPublicUrl(storagePath);

  // Record in media table
  const supabase = await createClient();
  const { data: mediaRow, error: dbError } = await supabase
    .from('media')
    .insert({
      file_name: file.name,
      storage_path: storagePath,
      public_url: urlData.publicUrl,
      mime_type: file.type,
      size_bytes: file.size,
      alt_text: '',
    })
    .select()
    .single();

  if (dbError) return NextResponse.json({ error: dbError.message }, { status: 500 });
  return NextResponse.json(mediaRow);
}
