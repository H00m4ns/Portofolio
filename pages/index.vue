<script setup lang="ts">
const name = 'James'
const githubUsername = 'H00m4ns'
const role = 'Backend Developer'
const tagline = 'Fokus di backend dengan Go (Golang), microservices, dan sistem terdistribusi.'

const links = {
  github: `https://github.com/${githubUsername}`,
  linkedin: 'https://www.linkedin.com/in/james-b-t-49a4b3266/',
  email: 'mailto:jamesbt2k3@gmail.com',
}

type Project = {
  title: string
  period?: string
  tech: string[]
  role: string
  description: string
  highlights: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Microservice Pengelolaan Absensi & Kehadiran Multi PAUD',
    period: '2024 - sekarang',
    tech: ['Go (Echo)', 'Flutter', 'MySQL/PostgreSQL', 'Wablas API'],
    role: 'Backend Engineer',
    description:
      'Sistem microservice untuk mengelola absensi dan kehadiran di banyak PAUD, dengan integrasi WhatsApp untuk notifikasi ke orang tua.',
    highlights: [
      'Merancang arsitektur microservice untuk multi-tenant PAUD.',
      'Membangun REST API dengan Echo framework (Golang).',
      'Integrasi dengan Wablas untuk notifikasi WhatsApp otomatis.',
      'Menyediakan endpoint yang stabil untuk di-consume oleh aplikasi Flutter.'
    ],
    link: 'https://github.com/H00m4ns' // ganti ke repo spesifik kalau ada
  },
  {
    title: 'Asset Management Backend',
    period: '2024',
    tech: ['Go', 'REST API', 'Database SQL'],
    role: 'Backend Engineer',
    description:
      'Backend service untuk manajemen aset organisasi, meliputi pencatatan, pergerakan, dan status aset.',
    highlights: [
      'Mendesain skema database untuk pelacakan aset dan histori pergerakan.',
      'Membangun API untuk CRUD asset, kategori, dan lokasi.',
      'Implementasi filter & pagination untuk kebutuhan dashboard internal.'
    ],
    link: 'https://github.com/H00m4ns' // ganti kalau ada repo
  },
  {
    title: 'Absensi Sorong Selatan (Backend)',
    period: '2023',
    tech: ['Go', 'REST API'],
    role: 'Backend Engineer',
    description:
      'Layanan backend untuk sistem absensi di Sorong Selatan, fokus pada reliability dan kemudahan integrasi.',
    highlights: [
      'Membangun endpoint absensi yang simpel namun robust.',
      'Menerapkan validasi dan pengelolaan status kehadiran.',
      'Menyiapkan struktur API yang siap diintegrasikan dengan berbagai frontend.'
    ],
    link: 'https://github.com/H00m4ns' // ganti kalau ada
  }
]

const backendSkills = [
  'Go (Golang)',
  'REST API design',
  'Microservices',
  'SQL Databases (MySQL/PostgreSQL)',
  'Authentication & Authorization',
  'Clean architecture & modularization'
]

const tools = [
  'Git & GitHub',
  'Docker (basic containerization)',
  'Linux environment',
  'Postman / API testing tools'
]
</script>

<template>
  <div class="page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-text">
        <p class="hero-label">Backend Developer Portfolio</p>
        <h1 class="hero-title">
          Hi, saya <span class="accent">{{ name }}</span>.
        </h1>
        <h2 class="hero-subtitle">
          {{ role }}
        </h2>
        <p class="hero-tagline">
          {{ tagline }}
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">Lihat Projek</a>
          <a :href="links.github" class="btn btn-ghost" target="_blank" rel="noreferrer">
            GitHub (@{{ githubUsername }})
          </a>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="section">
      <h3 class="section-title">Tentang Saya</h3>
      <p class="section-text">
        Saya adalah backend developer yang sekarang fokus menggunakan
        <strong>Go (Golang)</strong> untuk membangun
        <strong>microservices</strong>, API backend, dan sistem yang bisa diskalakan.
        Saya tertarik pada desain arsitektur yang rapi, performa, dan kemudahan integrasi
        dengan berbagai frontend (web maupun mobile).
      </p>
      <p class="section-text">
        Di luar coding, saya juga aktif mengelola project di GitHub di akun
        <a :href="links.github" target="_blank" rel="noreferrer">@{{ githubUsername }}</a>.
      </p>
    </section>

    <!-- Skills -->
    <section class="section two-column">
      <div>
        <h3 class="section-title">Backend Skills</h3>
        <ul class="pill-list">
          <li v-for="skill in backendSkills" :key="skill" class="pill">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div>
        <h3 class="section-title">Tools & Lainnya</h3>
        <ul class="pill-list">
          <li v-for="tool in tools" :key="tool" class="pill">
            {{ tool }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section">
      <h3 class="section-title">Projek Terpilih</h3>

      <div class="projects">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <header class="project-header">
            <div>
              <h4 class="project-title">{{ project.title }}</h4>
              <p class="project-role">
                {{ project.role }}
                <span v-if="project.period" class="project-period"> • {{ project.period }}</span>
              </p>
            </div>
            <a v-if="project.link" :href="project.link" target="_blank" rel="noreferrer" class="project-link">
              Lihat detail
            </a>
          </header>

          <p class="project-description">
            {{ project.description }}
          </p>

          <div class="project-meta">
            <div class="project-tech">
              <span class="meta-label">Tech stack:</span>
              <ul class="pill-list">
                <li v-for="t in project.tech" :key="t" class="pill pill-small">
                  {{ t }}
                </li>
              </ul>
            </div>

            <ul class="project-highlights">
              <li v-for="h in project.highlights" :key="h">
                {{ h }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Contact -->
    <section class="section">
      <h3 class="section-title">Kontak</h3>
      <p class="section-text">
        Tertarik kerja sama, butuh backend untuk project baru, atau ingin diskusi soal arsitektur?
        Kamu bisa hubungi saya lewat:
      </p>
      <ul class="contact-list">
        <li>
          <strong>Email:</strong>
          <a :href="links.email">EMAIL_KAMU@domain.com</a>
        </li>
        <li>
          <strong>GitHub:</strong>
          <a :href="links.github" target="_blank" rel="noreferrer">
            https://github.com/{{ githubUsername }}
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a :href="links.linkedin" target="_blank" rel="noreferrer">
            Profil LinkedIn (ganti URL)
          </a>
        </li>
      </ul>
    </section>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} {{ name }} — Dibangun dengan Nuxt.</p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #111827;
}

/* Hero */
.hero {
  padding: 3rem 0 2rem;
}
.hero-text {
  max-width: 680px;
}
.hero-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6b7280;
  margin-bottom: 0.75rem;
}
.hero-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}
.hero-subtitle {
  font-size: 1.3rem;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.75rem;
}
.accent {
  color: #2563eb;
}
.hero-tagline {
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
}
.btn-primary {
  background: #2563eb;
  color: white;
}
.btn-primary:hover {
  background: #1d4ed8;
}
.btn-ghost {
  border-color: #d1d5db;
  color: #374151;
  background: white;
}
.btn-ghost:hover {
  background: #f3f4f6;
}

/* Sections */
.section {
  padding: 2rem 0;
  border-top: 1px solid #e5e7eb;
}
.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}
.section-text {
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 0.5rem;
}
.two-column {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .two-column {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Pills */
.pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0.5rem 0 0;
  list-style: none;
}
.pill {
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  padding: 0.3rem 0.75rem;
  font-size: 0.85rem;
  background: #f9fafb;
}
.pill-small {
  font-size: 0.8rem;
}

/* Projects */
.projects {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1rem;
}
.project-card {
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  padding: 1.25rem 1.25rem 1rem;
  background: #ffffff;
}
.project-header {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
.project-title {
  font-size: 1.05rem;
  font-weight: 600;
}
.project-role {
  font-size: 0.9rem;
  color: #6b7280;
}
.project-period {
  color: #9ca3af;
}
.project-link {
  font-size: 0.85rem;
  color: #2563eb;
  text-decoration: none;
}
.project-link:hover {
  text-decoration: underline;
}
.project-description {
  font-size: 0.95rem;
  color: #4b5563;
  margin-bottom: 0.75rem;
}
.project-meta {
  display: grid;
  gap: 0.75rem;
}
@media (min-width: 768px) {
  .project-meta {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 2fr);
  }
}
.meta-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #9ca3af;
}
.project-highlights {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.9rem;
  color: #4b5563;
}

/* Contact */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
  display: grid;
  gap: 0.35rem;
}
.contact-list a {
  color: #2563eb;
  text-decoration: none;
}
.contact-list a:hover {
  text-decoration: underline;
}

/* Footer */
.footer {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.85rem;
  color: #9ca3af;
  text-align: center;
}
</style>
