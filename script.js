:root {
  --bg: #0d0d15;
  --bg-soft: #141827;
  --panel: rgba(20, 24, 39, 0.86);
  --panel-strong: #171c2d;
  --ink: #f4f4f8;
  --muted: #a4adbf;
  --accent: #ff4655;
  --accent-2: #ff5f70;
  --shadow: rgba(255, 70, 85, 0.4);
  --line: rgba(255, 255, 255, 0.12);
  --card-shadow: 0 32px 60px rgba(0, 0, 0, 0.38);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, #172034 0%, rgba(12, 15, 22, 0.92) 18%, #090b12 70%),
    var(--bg);
  color: var(--ink);
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
}

.page-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(16px);
  background: rgba(8, 9, 14, 0.5);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.7rem;
  background: linear-gradient(135deg, var(--accent), #ff7d5c);
  box-shadow: 0 10px 25px rgba(255, 70, 85, 0.45);
  font-family: "Orbitron", sans-serif;
  font-size: 1.05rem;
}

.brand-text {
  font-family: "Orbitron", sans-serif;
  letter-spacing: 0.12em;
  font-size: 0.8rem;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.nav-menu a {
  color: var(--muted);
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.nav-menu a:hover {
  color: var(--ink);
}

.nav-btn {
  padding: 0.8rem 1.3rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 0.32rem;
  background: transparent;
  border: 0;
  padding: 0.3rem;
  width: 2.5rem;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  border-radius: 999px;
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 5.5rem 0 4rem;
  background:
    linear-gradient(90deg, rgba(9, 11, 18, 0.82) 0%, rgba(9, 11, 18, 0.58) 35%, rgba(9, 11, 18, 0.28) 100%),
    url("https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9, 11, 18, 0.2) 0%, rgba(9, 11, 18, 0.8) 100%);
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 2rem;
}

.hero-copy {
  max-width: 640px;
}

.eyebrow {
  margin: 0 0 1rem;
  color: #ffb5bf;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.72rem;
  font-weight: 700;
}

.eyebrow.small {
  letter-spacing: 0.16em;
  font-size: 0.7rem;
}

h1, h2, h3 {
  margin: 0;
}

.hero-copy h1 {
  font-family: "Orbitron", sans-serif;
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 0.96;
  letter-spacing: -0.07em;
  margin-bottom: 1rem;
}

.hero-text {
  max-width: 540px;
  font-size: 1.08rem;
  line-height: 1.75;
  color: rgba(244, 244, 248, 0.8);
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.2rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.9rem 1.55rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  box-shadow: 0 18px 28px rgba(255, 70, 85, 0.4);
}

.button.secondary {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  padding-top: 1rem;
}

.stats-row div {
  min-width: 110px;
}

.stats-row strong {
  display: block;
  font-size: 1.8rem;
  font-weight: 800;
  line-height: 1.1;
}

.stats-row span {
  display: block;
  margin-top: 0.3rem;
  color: var(--muted);
  font-size: 0.82rem;
}

.hero-panel {
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel-card {
  width: min(100%, 380px);
  padding: 1.5rem 1.5rem 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  background: rgba(11, 13, 21, 0.8);
  backdrop-filter: blur(8px);
  box-shadow: var(--card-shadow);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tag,
.rating {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.tag {
  background: rgba(255, 70, 85, 0.12);
  color: #ffacb4;
}

.rating {
  background: rgba(255, 255, 255, 0.04);
  color: #ffd069;
}

.panel-card h3 {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
}

.panel-card p {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.panel-card ul {
  margin: 0;
  padding-left: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 2;
}

.features,
.maps,
.section-dark {
  padding: 6rem 0;
}

.section-heading {
  margin-bottom: 2.5rem;
  text-align: center;
}

.section-heading.left {
  text-align: left;
}

.section-heading h2 {
  font-family: "Orbitron", sans-serif;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.4rem;
}

.feature-card {
  padding: 2rem 1.5rem;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(19, 21, 32, 0.8);
  box-shadow: 0 20px 36px rgba(0, 0, 0, 0.12);
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, rgba(255, 70, 85, 0.2), rgba(255, 145, 110, 0.2));
  color: #ffbac1;
  font-weight: 800;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
}

.section-dark {
  background: rgba(12, 14, 22, 0.92);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.agent-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.3rem;
}

.agent-card {
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.agent-visual {
  height: 340px;
  background-size: cover;
  background-position: center;
}

.agent-one {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.58)), url("https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80");
}

.agent-two {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.58)), url("https://images.unsplash.com/photo-1528819622761-6bcf042f6d1f?auto=format&fit=crop&w=900&q=80");
}

.agent-three {
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.58)), url("https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=80");
}

.agent-info {
  padding: 1.5rem 1.2rem 1.6rem;
}

.agent-info span {
  color: #ffadb7;
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  font-weight: 800;
}

.agent-info h3 {
  margin: 0.7rem 0 0.6rem;
  font-size: 2rem;
}

.agent-info p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.map-showcase {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.map-card {
  position: relative;
  min-height: 380px;
  display: flex;
  align-items: end;
  padding: 1.5rem;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-size: cover;
  background-position: center;
}

.map-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(5, 6, 12, 0.18) 0%, rgba(5, 6, 12, 0.82) 100%);
}

.map-card > * {
  position: relative;
  z-index: 1;
}

.map-left {
  background-image: url("https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80");
}

.map-center {
  background-image: url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80");
}

.map-right {
  background-image: url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80");
}

.map-label {
  display: inline-block;
  margin-bottom: 0.8rem;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 70, 85, 0.15);
  border: 1px solid rgba(255, 70, 85, 0.28);
  color: #ffdfe3;
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  font-weight: 700;
}

.map-card h3 {
  font-size: 1.6rem;
  max-width: 12ch;
}

.cta-section {
  padding: 2rem 0 5rem;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(255, 70, 85, 0.14), rgba(151, 52, 255, 0.08));
}

.cta-inner h2 {
  font-family: "Orbitron", sans-serif;
  font-size: clamp(1.8rem, 2.8vw, 2.8rem);
  letter-spacing: -0.06em;
}

.site-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 10, 16, 0.98);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 90px;
}

.footer-inner p {
  color: var(--muted);
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--muted);
}

@media (max-width: 920px) {
  .hero-inner,
  .feature-grid,
  .agent-grid,
  .map-showcase {
    grid-template-columns: 1fr;
  }

  .hero-inner {
    display: block;
  }

  .hero-copy {
    margin-bottom: 2rem;
  }

  .cta-inner,
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 760px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 1rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    background: rgba(11, 13, 21, 0.96);
  }

  .nav-menu.open {
    display: flex;
  }

  .site-header {
    position: sticky;
  }

  .hero {
    padding-top: 4rem;
  }

  .hero-copy h1 {
    font-size: clamp(2.5rem, 13vw, 4.2rem);
  }

  .section-dark,
  .features,
  .maps {
    padding: 4.2rem 0;
  }
}

@media (max-width: 520px) {
  .stats-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .button {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
  }

  .cta-inner {
    padding: 1.5rem 1rem;
  }
}
