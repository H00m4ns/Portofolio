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
  // support multiple links per project (frontend/backend/repo/demo etc.)
  links?: Record<string, string>
}

const projects: Project[] = [
  {
    title: 'Microservice Pengelolaan Absensi & Kehadiran Multi PAUD',
    period: '2025',
    tech: ['Go (Echo)', 'Flutter', 'Maria DB', 'RESTful API', 'Wablas API'],
    role: 'Backend Engineer',
    description:
      'Sistem microservice untuk mengelola absensi dan kehadiran di banyak PAUD, dengan integrasi WhatsApp untuk notifikasi ke orang tua. Dirancang untuk deployment containerized menggunakan Docker sehingga mudah dipindahkan antar environment (dev/staging/production).',
    highlights: [
      'Merancang arsitektur microservice untuk multi-tenant PAUD dengan boundary service yang jelas.',
      'Membangun REST API menggunakan Echo (Golang) dengan fokus pada performa dan observability.',
      'Integrasi dengan Wablas untuk notifikasi WhatsApp otomatis dan pipeline pesan terjamin.',
      'Containerization & deployment: menyertakan Dockerfile dan docker-compose untuk local dev, serta konfigurasi image untuk registry supaya deployment konsisten.',
      'Siap untuk orkestrasi: image container mudah dipakai pada Kubernetes atau platform container lain untuk autoscaling.',
      'Endpoint stabil dan versi API yang jelas agar mudah di-consume oleh aplikasi Flutter.'
    ],
    links: {
      backend: 'https://github.com/H00m4ns/skripsi_backend',
      frontend: 'https://github.com/H00m4ns/skripsi_frontend'
    }
  },
  {
    title: 'Asset Management Backend',
    period: '2024',
    tech: ['Go', 'REST API', 'Maria DB'],
    role: 'Backend Engineer',
    description:
      'Backend service untuk manajemen aset organisasi, meliputi pencatatan, pergerakan, dan status aset.',
    highlights: [
      'Mendesain skema database untuk pelacakan aset dan histori pergerakan.',
      'Membangun API untuk CRUD asset, kategori, dan lokasi.',
      'Implementasi filter & pagination untuk kebutuhan dashboard internal.'
    ],
    links: {
      backend: 'https://github.com/H00m4ns'
    }
  },
  {
    title: 'Absensi Sorong Selatan (Backend)',
    period: '2025 - Sekarang',
    tech: ['Go', 'RESTful API', 'Maria DB', 'Session-based Auth', 'Timezone Handling (RFC 3339)'],
    role: 'Backend Engineer',
    description:
      'Layanan backend untuk sistem absensi di Sorong Selatan yang menekankan keamanan sesi, akurasi waktu, dan pengalaman pengguna lintas zona waktu. Sistem menyediakan session-based login untuk autentikasi yang stabil pada perangkat mobile dan web, serta mekanisme pencatatan waktu (timestamp) yang menangani perbedaan zona waktu pengguna sehingga catatan kehadiran konsisten dan dapat diaudit.',
    highlights: [
      'Session-based authentication: implementasi sesi dengan secure, httpOnly cookies dan store sisi server untuk menjaga sesi pengguna tetap valid tanpa bergantung pada token stateless semata.',
      'Session lifecycle & security: dukungan session expiry, refresh, dan revocation untuk keamanan (rotasi sesi saat logout atau perubahan credential).',
      'Timezone-aware attendance: semua event attendance dicatat dalam UTC dan disimpan bersama offset/zona pengguna—tampilan waktu disesuaikan ke zona lokal pengguna saat ditampilkan.',
      'Normalisasi & reconciliation: proses normalisasi timestamp untuk laporan harian dan mekanisme rekonsiliasi untuk perbedaan zona (mis. absensi yang melintasi tengah malam di zona berbeda).',
      'Rate limiting & anti-abuse: proteksi untuk mencegah spoofing lokasi/waktu dengan kombinasi IP heuristics dan signed client timestamps.',
      'Observability & audit: logging dan audit trail untuk setiap sesi dan perubahan kehadiran, memudahkan pelacakan permasalahan aduan orang tua atau admin.'
    ],
    links: {
      backend: 'https://github.com/Voxtmault/iris'
    }
  },
  {
    title: 'Socifi',
    period: '2025',
    tech: ['Move', 'React.js + dApp kit', 'Node.js / Express', 'Maria DB'],
    role: 'Fullstack Engineer',
    description:
      'Socifi adalah platform microblogging (mini-Twitter) yang menggabungkan interaksi sosial dengan ekonomi token berbasis Sui. Pengguna dapat membuat posting singkat, memberikan like, dan mengomentari konten — setiap aksi diberi imbalan Sui coin untuk mendorong kontribusi berkualitas dan keterlibatan komunitas. Sistem reward didesain transparan dan efisien, sementara backend diarahkan untuk throughput tinggi dan integrasi on-chain sederhana.',
    highlights: [
      'Reward berbasis aksi: pengguna mendapatkan Sui coin untuk membuat post, like, dan comment — mendorong keterlibatan organik.',
      'Integrasi on-chain Sui: distribusi reward dicatat di layer Sui untuk transparansi dan auditability.',
      'Sistem reputasi & anti-spam: mekanisme weighted rewards dan rate-limiting untuk mencegah abuse dan menjaga kualitas feed.',
      'Optimistic UI & real-time feed: pengalaman interaktif dengan optimistic updates untuk like/comment agar terasa responsif.',
      'Arsitektur skalabel: backend microservices (Go) + caching untuk mendukung throughput tinggi dan latensi rendah.',
      'Monetisasi & utility token: Sui coin dapat digunakan untuk fitur premium atau ditukar, membuka peluang ekonomi dalam platform.'
    ],
    links: {
      backend: 'https://github.com/Voxtmault/iris'
    }
  }
]

// small helper to make link labels nicer in the template
function capitalize(s?: string) {
  if (!s) return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const frontendSkills = [
  'JavaScript (ES6+)',
  'Vue.js (Nuxt.js)',
  'HTML5 & CSS3',
  'Tailwind CSS',
  'Responsive design',
  'State management (Vuex/Pinia)',
  'API consumption (Axios/Fetch)'
]

const currentLearning = [
  'Laravel (PHP) & React.js',
  'Kubernetes basics',
  'gRPC',
  'Message brokers (RabbitMQ, Kafka)',
  'Cloud services (AWS/GCP basics)'
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
  'Jira',
  'Prometheus & Loki & Grafana',
  'Docker (basic containerization)',
  'Linux environment',
  'Postman / API testing tools',
  'Swagger',
  'Github Actions (CI/CD basics)'
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
        <h3 class="section-title">Frontend Skills</h3>
        <ul class="pill-list">
          <li v-for="skill in frontendSkills" :key="skill" class="pill">
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
      <div>
        <h3 class="section-title">Sedang Dipelajari</h3>
        <ul class="pill-list">
          <li v-for="item in currentLearning" :key="item" class="pill">
            {{ item }}
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
            <div v-if="project.links" class="project-links">
              <a
                v-for="(url, key) in project.links"
                :key="key"
                :href="url"
                target="_blank"
                rel="noreferrer"
                class="project-link"
              >
                {{ capitalize(key) }}
              </a>
            </div>
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
          <a :href="links.email">jamesbt2k3@gmail.com</a>
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
            https://www.linkedin.com/in/james-b-t-49a4b3266/
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
.project-links {
  display: flex;
  gap: 0.5rem;
  align-items: center;
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
