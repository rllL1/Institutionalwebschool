-- ============================================
-- SDSC CMS - Supabase Database Setup
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================

-- 1. Pages table
CREATE TABLE IF NOT EXISTS public.pages (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        TEXT UNIQUE NOT NULL,
  title       TEXT NOT NULL,
  description TEXT,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

-- 2. Sections table
CREATE TABLE IF NOT EXISTS public.sections (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id     UUID NOT NULL REFERENCES public.pages(id) ON DELETE CASCADE,
  type        TEXT NOT NULL,
  title       TEXT,
  content     JSONB NOT NULL DEFAULT '{}'::jsonb,
  sort_order  INT NOT NULL DEFAULT 0,
  enabled     BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_sections_page_id ON public.sections(page_id);
CREATE INDEX IF NOT EXISTS idx_sections_sort_order ON public.sections(page_id, sort_order);

-- 3. Media table
CREATE TABLE IF NOT EXISTS public.media (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name     TEXT NOT NULL,
  storage_path  TEXT NOT NULL,
  public_url    TEXT NOT NULL,
  mime_type     TEXT,
  size_bytes    INT,
  alt_text      TEXT DEFAULT '',
  created_at    TIMESTAMPTZ DEFAULT now()
);

-- 4. Site settings table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key        TEXT UNIQUE NOT NULL,
  value      JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Auto-update trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS tr_pages_updated ON public.pages;
CREATE TRIGGER tr_pages_updated BEFORE UPDATE ON public.pages FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS tr_sections_updated ON public.sections;
CREATE TRIGGER tr_sections_updated BEFORE UPDATE ON public.sections FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS tr_settings_updated ON public.site_settings;
CREATE TRIGGER tr_settings_updated BEFORE UPDATE ON public.site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- 6. Row-Level Security
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Public read
CREATE POLICY "Public read pages"    ON public.pages         FOR SELECT USING (true);
CREATE POLICY "Public read sections" ON public.sections      FOR SELECT USING (true);
CREATE POLICY "Public read media"    ON public.media         FOR SELECT USING (true);
CREATE POLICY "Public read settings" ON public.site_settings FOR SELECT USING (true);

-- Admin write
CREATE POLICY "Admin insert pages"    ON public.pages         FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update pages"    ON public.pages         FOR UPDATE USING  (auth.role() = 'authenticated');
CREATE POLICY "Admin delete pages"    ON public.pages         FOR DELETE USING  (auth.role() = 'authenticated');

CREATE POLICY "Admin insert sections" ON public.sections      FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update sections" ON public.sections      FOR UPDATE USING  (auth.role() = 'authenticated');
CREATE POLICY "Admin delete sections" ON public.sections      FOR DELETE USING  (auth.role() = 'authenticated');

CREATE POLICY "Admin insert media"    ON public.media         FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin update media"    ON public.media         FOR UPDATE USING  (auth.role() = 'authenticated');
CREATE POLICY "Admin delete media"    ON public.media         FOR DELETE USING  (auth.role() = 'authenticated');

CREATE POLICY "Admin update settings" ON public.site_settings FOR UPDATE USING  (auth.role() = 'authenticated');
CREATE POLICY "Admin insert settings" ON public.site_settings FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- 7. Storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Public read media bucket" ON storage.objects FOR SELECT USING (bucket_id = 'media');
CREATE POLICY "Auth upload media" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');
CREATE POLICY "Auth update media" ON storage.objects FOR UPDATE USING (bucket_id = 'media' AND auth.role() = 'authenticated');
CREATE POLICY "Auth delete media" ON storage.objects FOR DELETE USING (bucket_id = 'media' AND auth.role() = 'authenticated');

-- 8. Seed initial pages
INSERT INTO public.pages (slug, title, description) VALUES
  ('home',           'Home',           'Main landing page'),
  ('college',        'The College',    'College overview, history, vision & mission'),
  ('administration', 'Administration', 'Leadership and departments')
ON CONFLICT (slug) DO NOTHING;

-- 9. Seed footer settings
INSERT INTO public.site_settings (key, value) VALUES (
  'footer',
  '{
    "about": "St. Dominic Savio College is committed to providing quality education and holistic development of students since 1993.",
    "quickLinks": [
      {"label": "Academics", "href": "/academics"},
      {"label": "Admission", "href": "/admission"},
      {"label": "Events", "href": "/events"},
      {"label": "Contact", "href": "/contact"}
    ],
    "socialLinks": [
      {"label": "Facebook", "href": "#"},
      {"label": "Instagram", "href": "#"},
      {"label": "Twitter", "href": "#"},
      {"label": "LinkedIn", "href": "#"}
    ],
    "contact": {
      "email": "info@sdsc.edu",
      "phone": "+1 (555) 123-4567",
      "hours": "Mon-Fri: 9AM-5PM"
    },
    "copyright": "2026 St. Dominic Savio College. All rights reserved."
  }'::jsonb
) ON CONFLICT (key) DO NOTHING;
