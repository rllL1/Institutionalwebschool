-- ============================================================
-- Seed data: populate pages, sections, and footer settings
-- Run AFTER schema.sql in Supabase SQL Editor
-- Safe to re-run: clears existing sections first, upserts pages
-- ============================================================

-- ============================================================
-- PAGES (upsert — skip if already exists)
-- ============================================================

insert into public.pages (slug, title, description) values
  ('home', 'Home', 'Welcome to St. Dominic Savio College'),
  ('college', 'The College', 'About St. Dominic Savio College'),
  ('administration', 'Administration', 'Meet our dedicated leaders and coordinators'),
  ('academics', 'Academics', 'Discover our comprehensive academic programs'),
  ('campus-life', 'Campus Life', 'Experience a vibrant and faith-centered campus life')
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description;

-- ============================================================
-- Clear existing sections for these pages (so re-running is safe)
-- ============================================================

delete from public.sections where page_id in (
  select id from public.pages where slug in ('home', 'administration', 'academics', 'campus-life')
);

-- ============================================================
-- SECTIONS: HOME PAGE
-- ============================================================

-- Home: Hero Video
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'home'), 'hero_video', 'Hero Video', '{
    "videoSrc": "/videos/savio.mp4",
    "posterImage": "/images/doc_speech.jpg",
    "title": "",
    "subtitle": "",
    "description": ""
  }', 0);

-- Home: Events Carousel
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'home'), 'events_carousel', 'Life at SDSC', '{
    "heading": "Life at SDSC",
    "events": [
      { "src": "/images/gball_home.jpg", "title": "Grand Ball 2025", "date": "April 5, 2025" },
      { "src": "/images/mrmssdsc_home.jpg", "title": "Mr & Ms SDSC", "date": "Feb 15, 2025" },
      { "src": "/images/pres_home.jpg", "title": "Visit of The Philippine President", "date": "March 25, 2025" },
      { "src": "/images/rosary_home.jpg", "title": "Living Rosary", "date": "October 14, 2024" },
      { "src": "/images/sportf_home.JPG", "title": "Sportfest", "date": "November 24, 2025" }
    ]
  }', 1);

-- Home: Feature List (Why Choose Us?)
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'home'), 'feature_list', 'Why Choose Us?', '{
    "heading": "Why Choose Us?",
    "sideImage": "/images/55.jpg",
    "features": [
      { "icon": "EDU", "title": "Quality Education", "description": "CHED & DepEd recognized programs with consistently high board-exam pass rates." },
      { "icon": "APP", "title": "Holistic Approach", "description": "Salesian preventive system nurturing mind, heart, and soul." },
      { "icon": "LAB", "title": "Modern Facilities", "description": "Updated labs, library, and smart classrooms on a safe, green campus." },
      { "icon": "SUP", "title": "Student Support", "description": "Scholarships, counselling, and career placement services." }
    ]
  }', 2);

-- ============================================================
-- SECTIONS: ADMINISTRATION PAGE
-- ============================================================

-- Administration: Hero
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'administration'), 'hero', 'Hero Banner', '{
    "title": "Administration",
    "subtitle": "St. Dominic Savio College — Ibaan",
    "description": "Meet the dedicated leaders and coordinators who guide our institution toward excellence, integrity, and service.",
    "backgroundImage": "/images/doc_speech.jpg"
  }', 0);

-- Administration: Leadership Hierarchy
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'administration'), 'leadership_hierarchy', 'Organizational Structure', '{
    "heading": "Organizational Structure",
    "subtitle": "Our leadership team is committed to fostering an environment of academic excellence and Salesian values.",
    "tiers": [
      {
        "tier": 1,
        "members": [
          { "name": "Rev. Fr. Jose M. Santos, SDB", "role": "College President", "description": "Provides overall leadership and vision for St. Dominic Savio College, guiding the institution in its mission of faith-based education and excellence.", "photo": "/images/doc.jpg" }
        ]
      },
      {
        "tier": 2,
        "members": [
          { "name": "Dr. Maria Luisa R. Cruz", "role": "Vice President for Academics", "description": "Oversees academic programs, curriculum development, faculty performance, and ensures instructional quality across all colleges.", "photo": "/images/pres_home.jpg" },
          { "name": "Mr. Eduardo P. Reyes, CPA", "role": "Vice President for Finance & Administration", "description": "Manages institutional finances, budgeting, auditing, facilities maintenance, and administrative operations.", "photo": "/images/mrmssdsc_home.jpg" }
        ]
      },
      {
        "tier": 3,
        "members": [
          { "name": "Atty. Ramon G. Dela Cruz", "role": "Legal Counsel", "description": "Provides legal advice on institutional matters, contracts, compliance, and governance.", "photo": "/images/doc_speech.jpg" },
          { "name": "Ms. Corazon J. Mendoza", "role": "Registrar", "description": "Handles student admissions, records management, examinations scheduling, and official institutional documentation.", "photo": "/images/homepage2.jpg" },
          { "name": "Mr. Bonifacio L. Santos", "role": "Head of Student Affairs", "description": "Champions student welfare, discipline, guidance programs, and co-curricular activities.", "photo": "/images/gball_home.jpg" }
        ]
      }
    ]
  }', 1);

-- Administration: Departments (Image Cards)
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'administration'), 'image_cards', 'Departments & Coordinators', '{
    "heading": "Departments & Coordinators",
    "subtitle": "Each department is led by experienced coordinators dedicated to academic quality and student success.",
    "cards": [
      { "title": "College of Nursing & Health Sciences", "description": "Develops compassionate and competent healthcare professionals through rigorous clinical training and evidence-based practice.", "image": "/images/rosary_home.jpg" },
      { "title": "College of Arts, Science & Education", "description": "Fosters critical thinking and lifelong learning through quality liberal arts and teacher education programs.", "image": "/images/homapage3.png" },
      { "title": "College of Engineering & Computer Studies", "description": "Equips students with technical expertise in information technology, computer science, and engineering disciplines.", "image": "/images/background.png" },
      { "title": "College of Business Administration & Accountancy", "description": "Prepares future business leaders and accountants with strong ethical foundations and professional competencies.", "image": "/images/sportf_home.JPG" },
      { "title": "Basic Education Department", "description": "Provides a holistic foundational education for Grade School, Junior High School, and Senior High School learners.", "image": "/images/pres_home.jpg" },
      { "title": "School of Law", "description": "Cultivates legal professionals grounded in justice, ethics, and a deep understanding of Philippine law.", "image": "/images/mrmssdsc_home.jpg" }
    ]
  }', 2);

-- ============================================================
-- SECTIONS: ACADEMICS PAGE
-- ============================================================

-- Academics: Hero
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'academics'), 'hero', 'Hero Banner', '{
    "title": "Academics",
    "subtitle": "St. Dominic Savio College — Ibaan",
    "description": "Discover our comprehensive academic programs designed to nurture excellence, critical thinking, and holistic development at every level.",
    "backgroundImage": "/images/background.png"
  }', 0);

-- Academics: Two Pathways (two_column_cards)
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'academics'), 'two_column_cards', 'Academic Pathways', '{
    "heading": "",
    "subtitle": "",
    "cards": [
      { "title": "Basic Education", "body": "Grade School through Senior High School — foundational learning rooted in Savian values.", "color": "green" },
      { "title": "College Programs", "body": "Undergraduate and professional degree programs across five academic departments.", "color": "green" }
    ]
  }', 1);

-- Academics: College Programs Directory (cards_grid)
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'academics'), 'cards_grid', 'College Programs', '{
    "heading": "College Programs",
    "subtitle": "Five departments offering career-focused undergraduate and professional degrees.",
    "cards": [
      { "title": "College of Nursing / Health Sciences", "description": "BS in Nursing, BS in Psychology" },
      { "title": "College of Arts, Science, and Education", "description": "Bachelor of Secondary Education, Bachelor of Elementary Education, BA in English" },
      { "title": "College of Engineering & Computer Studies", "description": "BS in Information Technology, BS in Computer Science, BS in Information Systems, 2-yr IT, 2-yr ACT" },
      { "title": "College of Business Administration & Accountancy", "description": "BS in Business Administration, BS in Accountancy, BS in Management Accounting" },
      { "title": "School of Law", "description": "Juris Doctor (JD)" }
    ]
  }', 2);

-- Academics: Basic Education Directory (cards_grid)
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'academics'), 'cards_grid', 'Basic Education', '{
    "heading": "Basic Education",
    "subtitle": "Quality K-12 programs building strong foundations rooted in Savian values.",
    "cards": [
      { "title": "Senior High School", "description": "STEM, ABM, HUMSS" },
      { "title": "Junior High School", "description": "Grades 7 – 10 Core Curriculum" },
      { "title": "Grade School", "description": "Grades 1 – 6 Foundational Program" }
    ]
  }', 3);

-- ============================================================
-- SECTIONS: CAMPUS LIFE PAGE
-- ============================================================

-- Campus Life: Hero
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'campus-life'), 'hero', 'Hero Banner', '{
    "title": "Campus Life",
    "subtitle": "St. Dominic Savio College — Ibaan",
    "description": "Experience a vibrant and faith-centered campus life through memorable events, world-class facilities, and a community rooted in Salesian joy.",
    "backgroundImage": "/images/sportf_home.JPG"
  }', 0);

-- Campus Life: Events (cards_grid)
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'campus-life'), 'cards_grid', 'Events', '{
    "heading": "Events",
    "subtitle": "From spiritual gatherings to sporting competitions, SDSC life is filled with meaningful experiences that shape character and build community.",
    "cards": [
      { "title": "Foundation Day Celebration", "description": "A grand celebration of the founding of St. Dominic Savio College featuring cultural performances, thanksgiving Mass, and alumni reunions.", "image": "/images/rosary_home.jpg", "badge": "Annual Event" },
      { "title": "Sportsfest", "description": "Inter-department sports competition showcasing basketball, volleyball, badminton, and track & field events for students of all levels.", "image": "/images/sportf_home.JPG", "badge": "Sports" },
      { "title": "Recognition Day", "description": "Annual honors ceremony celebrating academic excellence, leadership, and outstanding contributions of students to the SDSC community.", "image": "/images/gball_home.jpg", "badge": "Academic" },
      { "title": "Cultural Night", "description": "A night filled with music, dance, and literary arts showcasing the diverse talents and rich heritage of Batangueno students.", "image": "/images/mrmssdsc_home.jpg", "badge": "Culture" },
      { "title": "Retreat & Recollection", "description": "A Salesian-inspired spiritual renewal program for students to deepen their faith, reflect on values, and strengthen their relationship with God.", "image": "/images/pres_home.jpg", "badge": "Spiritual" },
      { "title": "Research Congress", "description": "Annual showcase of student and faculty research outputs promoting a culture of inquiry, innovation, and academic excellence.", "image": "/images/homepage2.jpg", "badge": "Academic" }
    ]
  }', 1);

-- Campus Life: Facilities (image_cards)
insert into public.sections (page_id, type, title, content, sort_order) values
  ((select id from public.pages where slug = 'campus-life'), 'image_cards', 'Campus Facilities', '{
    "heading": "Campus Facilities",
    "subtitle": "Our modern campus is designed to support learning, wellness, and community life with facilities built for student success.",
    "cards": [
      { "title": "Library & Learning Resource Center", "description": "Stocked with thousands of books, journals, e-resources, and quiet study spaces designed to support academic research and independent learning.", "image": "/images/homapage3.png" },
      { "title": "Science & Computer Laboratories", "description": "Fully equipped laboratories for hands-on scientific experiments, IT training, nursing simulation, and engineering design projects.", "image": "/images/background.png" },
      { "title": "Sports Complex & Gym", "description": "Indoor and outdoor sports facilities including basketball courts, volleyball courts, badminton courts, and a fitness gym for active student life.", "image": "/images/sportf_home.JPG" },
      { "title": "Chapel", "description": "A serene chapel at the heart of the campus for daily Mass, prayer, and spiritual reflection in the Salesian tradition of holiness and joy.", "image": "/images/rosary_home.jpg" },
      { "title": "Cafeteria & Canteen", "description": "A clean and spacious dining area offering affordable, nutritious meals and snacks for students and faculty throughout the school day.", "image": "/images/gball_home.jpg" },
      { "title": "Student Health Center", "description": "A dedicated health clinic providing first aid, medical consultations, counseling services, and wellness programs for the SDSC community.", "image": "/images/pres_home.jpg" }
    ]
  }', 2);

-- ============================================================
-- SITE SETTINGS: FOOTER (upsert)
-- ============================================================

insert into public.site_settings (key, value) values
  ('footer', '{
    "about": "St. Dominic Savio College is committed to providing quality education and holistic development of students since 1993.",
    "quickLinks": [
      { "label": "Academics", "href": "/academics" },
      { "label": "Admission", "href": "/admission" },
      { "label": "Events", "href": "/events" },
      { "label": "Contact", "href": "/contact" }
    ],
    "socialLinks": [
      { "label": "Facebook", "href": "#" },
      { "label": "Instagram", "href": "#" },
      { "label": "Twitter", "href": "#" },
      { "label": "LinkedIn", "href": "#" }
    ],
    "contact": { "email": "info@sdsc.edu", "phone": "+1 (555) 123-4567", "hours": "Mon-Fri: 9AM-5PM" },
    "copyright": "2026 St. Dominic Savio College. All rights reserved."
  }')
on conflict (key) do update set value = excluded.value;
