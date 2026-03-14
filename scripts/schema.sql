-- ============================================================
-- CMS Database Schema for St. Dominic Savio College
-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- Enable moddatetime extension for auto-updating updated_at
create extension if not exists moddatetime schema extensions;

-- ============================================================
-- TABLES
-- ============================================================

create table public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.sections (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  type text not null,
  title text,
  content jsonb not null default '{}',
  sort_order integer not null default 0,
  enabled boolean not null default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table public.media (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  storage_path text not null,
  public_url text not null,
  mime_type text,
  size_bytes bigint,
  alt_text text not null default '',
  created_at timestamptz default now()
);

create table public.site_settings (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value jsonb not null default '{}',
  updated_at timestamptz default now()
);

-- ============================================================
-- INDEXES
-- ============================================================

create index idx_sections_page_id on public.sections(page_id);
create index idx_sections_sort_order on public.sections(page_id, sort_order);
create index idx_site_settings_key on public.site_settings(key);

-- ============================================================
-- AUTO-UPDATE TRIGGERS
-- ============================================================

create trigger handle_pages_updated_at
  before update on public.pages
  for each row execute procedure moddatetime(updated_at);

create trigger handle_sections_updated_at
  before update on public.sections
  for each row execute procedure moddatetime(updated_at);

create trigger handle_site_settings_updated_at
  before update on public.site_settings
  for each row execute procedure moddatetime(updated_at);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table public.pages enable row level security;
alter table public.sections enable row level security;
alter table public.media enable row level security;
alter table public.site_settings enable row level security;

-- Public can read all tables
create policy "Public read pages" on public.pages for select using (true);
create policy "Public read sections" on public.sections for select using (true);
create policy "Public read media" on public.media for select using (true);
create policy "Public read site_settings" on public.site_settings for select using (true);

-- Authenticated users (admins) can do everything
create policy "Admin insert pages" on public.pages for insert to authenticated with check (true);
create policy "Admin update pages" on public.pages for update to authenticated using (true);
create policy "Admin delete pages" on public.pages for delete to authenticated using (true);

create policy "Admin insert sections" on public.sections for insert to authenticated with check (true);
create policy "Admin update sections" on public.sections for update to authenticated using (true);
create policy "Admin delete sections" on public.sections for delete to authenticated using (true);

create policy "Admin insert media" on public.media for insert to authenticated with check (true);
create policy "Admin update media" on public.media for update to authenticated using (true);
create policy "Admin delete media" on public.media for delete to authenticated using (true);

create policy "Admin insert site_settings" on public.site_settings for insert to authenticated with check (true);
create policy "Admin update site_settings" on public.site_settings for update to authenticated using (true);
create policy "Admin delete site_settings" on public.site_settings for delete to authenticated using (true);

-- ============================================================
-- STORAGE BUCKET
-- ============================================================

insert into storage.buckets (id, name, public) values ('media', 'media', true)
on conflict (id) do nothing;

-- Public can read media files
create policy "Public read media files" on storage.objects for select using (bucket_id = 'media');

-- Authenticated users can upload/update/delete media files
create policy "Admin upload media files" on storage.objects for insert to authenticated with check (bucket_id = 'media');
create policy "Admin update media files" on storage.objects for update to authenticated using (bucket_id = 'media');
create policy "Admin delete media files" on storage.objects for delete to authenticated using (bucket_id = 'media');
