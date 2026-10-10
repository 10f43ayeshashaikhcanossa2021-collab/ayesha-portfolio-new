const fs = require('fs');

const photoBase64 = fs.readFileSync('photo_base64.txt', 'utf8').trim();

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Shaikh Ayesha Lukman | AI &amp; ML Student &amp; Full Stack Developer</title>
  <meta name="description" content="Personal portfolio of Shaikh Ayesha Lukman, Computer Science (AI &amp; ML) student and full stack developer based in Mumbai.">
  <meta property="og:title" content="Shaikh Ayesha Lukman | AI &amp; ML Student &amp; Full Stack Developer">
  <meta property="og:description" content="Personal portfolio of Shaikh Ayesha Lukman, Computer Science (AI &amp; ML) student and full stack developer based in Mumbai.">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">

  <!-- Google Fonts: Bricolage Grotesque (800) and Figtree (400, 500, 600, 700) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

  <style>
    /* CSS Variables & Theme Definitions */
    :root {
      --bg: #f7f3ff;
      --bg-surface: #ffffff;
      --bg-surface-elevated: #f0e9fc;
      --bg-surface-subtle: #fbf9ff;
      --text-primary: #21183c;
      --text-secondary: #5f527a;
      --text-muted: #8c7fA5;
      --border: rgba(122, 90, 245, 0.16);
      --border-hover: #7a5af5;
      --accent-violet: #7a5af5;
      --accent-violet-rgb: 122, 90, 245;
      --accent-coral: #e8714f;
      --accent-coral-rgb: 232, 113, 79;
      --plum-deep: #2a163e;
      --lavender-soft: #ede4fc;
      --nav-bg: rgba(247, 243, 255, 0.82);
      --card-shadow: 0 10px 30px -8px rgba(122, 90, 245, 0.08);
      --chip-bg: rgba(122, 90, 245, 0.08);
      --chip-text: #4a3480;
      --canvas-node-rgb: 122, 90, 245;
      --canvas-link-rgb: 154, 128, 248;
    }

    [data-theme="dark"] {
      --bg: #17112b;
      --bg-surface: #20183b;
      --bg-surface-elevated: #2b214e;
      --bg-surface-subtle: #1c1535;
      --text-primary: #f5f0ff;
      --text-secondary: #baa9d8;
      --text-muted: #8878a8;
      --border: rgba(185, 164, 255, 0.18);
      --border-hover: #b9a4ff;
      --accent-violet: #b9a4ff;
      --accent-violet-rgb: 185, 164, 255;
      --accent-coral: #ff9a78;
      --accent-coral-rgb: 255, 154, 120;
      --plum-deep: #120b24;
      --lavender-soft: #302454;
      --nav-bg: rgba(23, 17, 43, 0.85);
      --card-shadow: 0 14px 36px -12px rgba(0, 0, 0, 0.55);
      --chip-bg: rgba(185, 164, 255, 0.12);
      --chip-text: #ded2ff;
      --canvas-node-rgb: 185, 164, 255;
      --canvas-link-rgb: 164, 140, 240;
    }

    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --bg: #17112b;
        --bg-surface: #20183b;
        --bg-surface-elevated: #2b214e;
        --bg-surface-subtle: #1c1535;
        --text-primary: #f5f0ff;
        --text-secondary: #baa9d8;
        --text-muted: #8878a8;
        --border: rgba(185, 164, 255, 0.18);
        --border-hover: #b9a4ff;
        --accent-violet: #b9a4ff;
        --accent-violet-rgb: 185, 164, 255;
        --accent-coral: #ff9a78;
        --accent-coral-rgb: 255, 154, 120;
        --plum-deep: #120b24;
        --lavender-soft: #302454;
        --nav-bg: rgba(23, 17, 43, 0.85);
        --card-shadow: 0 14px 36px -12px rgba(0, 0, 0, 0.55);
        --chip-bg: rgba(185, 164, 255, 0.12);
        --chip-text: #ded2ff;
        --canvas-node-rgb: 185, 164, 255;
        --canvas-link-rgb: 164, 140, 240;
      }
    }

    /* Reset & Base Setup */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      scroll-padding-top: 5rem;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      background-color: var(--bg);
      color: var(--text-primary);
      font-family: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      transition: background-color 0.3s ease, color 0.3s ease;
      overflow-x: hidden;
      padding-top: env(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-bottom);
      padding-left: env(safe-area-inset-left);
      padding-right: env(safe-area-inset-right);
    }

    /* Typography */
    h1, h2, h3, h4, .brand-font {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      color: var(--text-primary);
    }

    p {
      color: var(--text-secondary);
      font-size: 1.0625rem;
      line-height: 1.65;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* Accessible Focus Styles */
    :focus-visible {
      outline: 2px solid var(--accent-violet);
      outline-offset: 3px;
    }

    /* Container Utility */
    .container {
      width: 100%;
      max-width: 1160px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    /* Fixed Navigation */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: var(--nav-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }

    .nav-inner {
      height: 4.25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 1.75rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      display: flex;
      align-items: center;
      gap: 2px;
      color: var(--text-primary);
      text-decoration: none;
    }

    .logo-dot {
      color: var(--accent-coral);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .nav-link {
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--text-secondary);
      position: relative;
      padding: 0.25rem 0;
      transition: color 0.2s ease;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background: var(--accent-violet);
      transition: width 0.25s ease;
      border-radius: 2px;
    }

    .nav-link:hover {
      color: var(--text-primary);
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 1.25rem;
    }

    .theme-toggle-btn {
      width: 2.625rem;
      height: 2.625rem;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: var(--bg-surface);
      color: var(--text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }

    .theme-toggle-btn:hover {
      border-color: var(--accent-violet);
      transform: scale(1.06);
    }

    .theme-toggle-btn svg {
      width: 1.2rem;
      height: 1.2rem;
      transition: transform 0.4s ease;
    }

    .theme-toggle-btn:hover svg {
      transform: rotate(20deg);
    }

    /* Hero Section */
    .hero {
      position: relative;
      min-height: 100vh;
      min-height: 100dvh;
      display: flex;
      align-items: center;
      padding-top: 5rem;
      padding-bottom: 3rem;
      overflow: hidden;
    }

    #heroCanvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1.25fr 0.85fr;
      align-items: center;
      gap: 3.5rem;
      width: 100%;
    }

    .hero-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .hero-kicker {
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--accent-violet);
      margin-bottom: 0.5rem;
      letter-spacing: -0.01em;
    }

    .hero-name {
      font-size: clamp(2.75rem, 7.5vw, 6.75rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 0.98;
      margin-bottom: 1.25rem;
      color: var(--text-primary);
    }

    .typewriter-box {
      display: flex;
      align-items: center;
      font-size: clamp(1.2rem, 3vw, 1.85rem);
      font-weight: 700;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      min-height: 2.4rem;
    }

    .typewriter-text {
      color: var(--accent-coral);
      margin-left: 0.5rem;
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .typewriter-cursor {
      display: inline-block;
      width: 3px;
      height: 1.3em;
      background-color: var(--accent-coral);
      margin-left: 4px;
      animation: blink 0.9s infinite;
      vertical-align: middle;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .hero-bio {
      font-size: 1.125rem;
      max-width: 540px;
      margin-bottom: 2.25rem;
      color: var(--text-secondary);
    }

    .hero-cta-group {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.25rem;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.625rem;
      padding: 0.875rem 1.75rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 0.75rem;
      transition: all 0.25s ease;
      cursor: pointer;
      text-decoration: none;
      line-height: 1.2;
    }

    .btn-primary {
      background: var(--accent-violet);
      color: #ffffff;
      border: 1px solid var(--accent-violet);
      box-shadow: 0 6px 20px -4px rgba(var(--accent-violet-rgb), 0.45);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px -4px rgba(var(--accent-violet-rgb), 0.6);
      filter: brightness(1.05);
    }

    .btn-secondary {
      background: var(--bg-surface);
      color: var(--text-primary);
      border: 1px solid var(--border);
    }

    .btn-secondary:hover {
      border-color: var(--accent-coral);
      color: var(--accent-coral);
      transform: translateY(-2px);
      box-shadow: 0 6px 20px -4px rgba(var(--accent-coral-rgb), 0.2);
    }

    /* Hero Photo Rings */
    .hero-right {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .photo-wrapper {
      position: relative;
      width: clamp(260px, 34vw, 380px);
      height: clamp(260px, 34vw, 380px);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .photo-container {
      position: relative;
      width: 82%;
      height: 82%;
      border-radius: 50%;
      overflow: hidden;
      z-index: 2;
      box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.28);
      animation: photoPop 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .photo-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Rotating Rings */
    .ring-dashed {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 2px dashed var(--accent-violet);
      opacity: 0.55;
      animation: rotateClockwise 32s linear infinite;
      pointer-events: none;
    }

    .ring-thin {
      position: absolute;
      inset: -12px;
      border-radius: 50%;
      border: 1.5px solid var(--accent-coral);
      opacity: 0.45;
      animation: rotateCounter 24s linear infinite;
      pointer-events: none;
    }

    .ring-thin::before {
      content: '';
      position: absolute;
      top: 15%;
      right: 10%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--accent-coral);
      box-shadow: 0 0 12px var(--accent-coral);
    }

    .ring-thin::after {
      content: '';
      position: absolute;
      bottom: 20%;
      left: 12%;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--accent-violet);
      box-shadow: 0 0 10px var(--accent-violet);
    }

    @keyframes rotateClockwise {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes rotateCounter {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }

    @keyframes photoPop {
      0% {
        opacity: 0;
        transform: scale(0.82) rotate(-8deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }

    /* Staggered Load Animation */
    .stagger-1 { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
    .stagger-2 { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both; }
    .stagger-3 { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
    .stagger-4 { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both; }
    .stagger-5 { animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both; }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(22px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Generic Section Styles */
    section {
      padding: 6.5rem 0;
      position: relative;
    }

    .section-title {
      font-size: clamp(2.2rem, 4.5vw, 3.25rem);
      margin-bottom: 1.25rem;
      letter-spacing: -0.035em;
    }

    .section-subtitle {
      font-size: 1.125rem;
      max-width: 620px;
      margin-bottom: 3rem;
      color: var(--text-secondary);
    }

    /* About Section */
    .about-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 3.5rem;
      align-items: start;
    }

    .about-bio-text {
      font-size: 1.125rem;
      line-height: 1.75;
      margin-bottom: 2.25rem;
      color: var(--text-secondary);
    }

    /* Timeline */
    .timeline-card {
      background: var(--bg-surface);
      border: 1px solid var(--border);
      border-radius: 1.25rem;
      padding: 1.75rem;
      position: relative;
      box-shadow: var(--card-shadow);
      transition: border-color 0.25s ease;
    }

    .timeline-card:hover {
      border-color: var(--border-hover);
    }

    .timeline-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.8125rem;
      font-weight: 700;
      color: var(--accent-violet);
      margin-bottom: 0.75rem;
    }

    .timeline-role {
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }

    .timeline-company {
      font-size: 0.9375rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
      display: block;
    }

    .timeline-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .timeline-bullets li {
      position: relative;
      padding-left: 1.25rem;
      font-size: 0.9375rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .timeline-bullets li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.6em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent-violet);
    }

    /* 2x2 Stats Grid with Asymmetric Radii */
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    .stat-card {
      background: var(--bg-surface);
      border: 1px solid var(--border);
      padding: 2rem 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: var(--card-shadow);
      transition: transform 0.25s ease, border-color 0.25s ease;
    }

    .stat-card:hover {
      transform: translateY(-3px);
      border-color: var(--border-hover);
    }

    /* Varied border radii - anti-template styling */
    .stat-card-1 {
      border-radius: 2.5rem 0.75rem 0.75rem 0.75rem;
    }

    .stat-card-2 {
      border-radius: 0.75rem 2.5rem 0.75rem 0.75rem;
    }

    .stat-card-3 {
      border-radius: 0.75rem 0.75rem 0.75rem 2.5rem;
    }

    .stat-card-4 {
      border-radius: 0.75rem 0.75rem 2.5rem 0.75rem;
    }

    .stat-number-wrap {
      display: flex;
      align-items: baseline;
      gap: 0.25rem;
      margin-bottom: 0.5rem;
    }

    .stat-number {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 800;
      font-size: 2.85rem;
      line-height: 1;
      color: var(--text-primary);
    }

    .stat-suffix {
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      color: var(--accent-violet);
    }

    .stat-label {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-secondary);
      line-height: 1.4;
    }

    .stat-sublabel {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-top: 0.25rem;
    }

    /* Projects Section */
    .projects-stack {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;
    }

    .project-card {
      width: 100%;
      text-align: left;
      background: var(--bg-surface);
      border: 1px solid var(--border);
      border-radius: 1.25rem;
      padding: 2rem 2.25rem;
      box-shadow: var(--card-shadow);
      cursor: pointer;
      display: block;
      color: inherit;
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease;
    }

    .project-card:hover {
      transform: translateX(8px);
      border-color: var(--border-hover);
      box-shadow: 0 14px 35px -10px rgba(var(--accent-violet-rgb), 0.2);
    }

    .project-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1.5rem;
    }

    .project-title-area {
      flex: 1;
    }

    .project-meta-kicker {
      font-size: 0.8125rem;
      font-weight: 700;
      color: var(--accent-coral);
      margin-bottom: 0.35rem;
      display: block;
    }

    .project-title {
      font-size: clamp(1.4rem, 2.8vw, 1.85rem);
      font-weight: 800;
      margin-bottom: 0.5rem;
    }

    .project-summary {
      font-size: 1.05rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .expand-toggle-icon {
      width: 2.75rem;
      height: 2.75rem;
      flex-shrink: 0;
      border-radius: 50%;
      background: var(--chip-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--accent-violet);
      font-size: 1.75rem;
      font-weight: 400;
      line-height: 1;
      transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.25s ease, color 0.25s ease;
    }

    .project-card:hover .expand-toggle-icon {
      background: var(--accent-violet);
      color: #ffffff;
    }

    .project-card[aria-expanded="true"] .expand-toggle-icon {
      transform: rotate(45deg);
      background: var(--accent-violet);
      color: #ffffff;
    }

    /* Accordion Expand Container */
    .project-expand-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .project-card[aria-expanded="true"] .project-expand-wrapper {
      grid-template-rows: 1fr;
    }

    .project-expand-inner {
      overflow: hidden;
    }

    .project-expanded-content {
      padding-top: 1.75rem;
      margin-top: 1.5rem;
      border-top: 1px solid var(--border);
    }

    .project-description {
      font-size: 1.025rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .project-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.8125rem;
      font-weight: 600;
      background: var(--chip-bg);
      color: var(--chip-text);
      border: 1px solid transparent;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: default;
    }

    .chip:hover {
      transform: translateY(-2px);
      background: var(--accent-violet);
      color: #ffffff;
      border-color: var(--accent-violet);
    }

    /* Skills Section - Six Panels */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .skill-panel {
      background: var(--bg-surface);
      border: 1px solid var(--border);
      border-radius: 1.125rem;
      padding: 1.75rem;
      box-shadow: var(--card-shadow);
      transition: border-color 0.25s ease, transform 0.25s ease;
    }

    .skill-panel:hover {
      border-color: var(--border-hover);
      transform: translateY(-2px);
    }

    .skill-panel-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
    }

    .skill-icon-badge {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 0.625rem;
      background: var(--lavender-soft);
      color: var(--accent-violet);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .skill-icon-badge svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    .skill-panel-title {
      font-size: 1.2rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .skill-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    /* Achievements Section */
    .achievements-list {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
    }

    .achievement-row {
      background: var(--bg-surface);
      border: 1px solid var(--border);
      border-radius: 1rem;
      padding: 1.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      box-shadow: var(--card-shadow);
      transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease;
    }

    .achievement-row:hover {
      transform: translateX(8px);
      border-color: var(--border-hover);
    }

    .achievement-title {
      font-size: clamp(1.2rem, 2.5vw, 1.65rem);
      font-weight: 800;
      color: var(--text-primary);
      letter-spacing: -0.03em;
      transition: color 0.2s ease;
    }

    .achievement-row:hover .achievement-title {
      color: var(--accent-violet);
    }

    .achievement-event {
      font-size: 0.9375rem;
      font-weight: 600;
      color: var(--text-muted);
      text-align: right;
      flex-shrink: 0;
    }

    /* Contact Section */
    .contact-card {
      background: var(--bg-surface);
      border: 1px solid var(--border);
      border-radius: 2rem;
      padding: clamp(2.5rem, 6vw, 4.5rem) clamp(1.75rem, 5vw, 3.5rem);
      box-shadow: var(--card-shadow);
      position: relative;
      overflow: hidden;
    }

    .contact-card::before {
      content: '';
      position: absolute;
      top: -30%;
      right: -10%;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(var(--accent-violet-rgb), 0.15) 0%, transparent 70%);
      pointer-events: none;
    }

    .contact-headline {
      font-size: clamp(2.75rem, 6.5vw, 4.75rem);
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 1.05;
      margin-bottom: 1.25rem;
    }

    .contact-subtext {
      font-size: clamp(1.05rem, 2.2vw, 1.25rem);
      max-width: 600px;
      margin-bottom: 2.75rem;
      color: var(--text-secondary);
    }

    .contact-buttons-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .contact-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.95rem 1.6rem;
      border-radius: 0.85rem;
      font-size: 0.95rem;
      font-weight: 600;
      background: var(--bg-surface-elevated);
      color: var(--text-primary);
      border: 1px solid var(--border);
      transition: all 0.25s ease;
      text-decoration: none;
    }

    .contact-btn:hover {
      border-color: var(--accent-violet);
      color: var(--accent-violet);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px -6px rgba(var(--accent-violet-rgb), 0.25);
    }

    .contact-btn-primary {
      background: var(--accent-violet);
      color: #ffffff;
      border-color: var(--accent-violet);
      box-shadow: 0 8px 24px -6px rgba(var(--accent-violet-rgb), 0.4);
    }

    .contact-btn-primary:hover {
      color: #ffffff;
      filter: brightness(1.08);
      box-shadow: 0 12px 28px -6px rgba(var(--accent-violet-rgb), 0.55);
    }

    .contact-btn svg {
      width: 1.2rem;
      height: 1.2rem;
      flex-shrink: 0;
    }

    /* Footer */
    footer {
      padding: 3rem 0;
      border-top: 1px solid var(--border);
      background: var(--bg);
    }

    .footer-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.5rem;
      font-size: 0.875rem;
      color: var(--text-muted);
    }

    /* Reveal Animations on Scroll */
    .fade-up {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .fade-up.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Responsive Queries */
    @media (max-width: 900px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 2.75rem;
        text-align: center;
      }

      .hero-left {
        align-items: center;
      }

      .hero-cta-group {
        justify-content: center;
      }

      .about-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }

      .nav-links {
        display: none;
      }

      .nav-links.show-mobile {
        display: flex;
      }
    }

    @media (max-width: 640px) {
      section {
        padding: 4.5rem 0;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .hero-right {
        order: -1;
      }

      .project-card {
        padding: 1.5rem;
      }

      .project-header {
        align-items: center;
      }

      .achievement-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 1.25rem 1.5rem;
      }

      .achievement-event {
        text-align: left;
      }

      .contact-buttons-grid {
        flex-direction: column;
      }

      .contact-btn {
        width: 100%;
        justify-content: center;
      }
    }

    /* Respect Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }

      .fade-up {
        opacity: 1 !important;
        transform: none !important;
      }

      #heroCanvas {
        display: none;
      }

      .ring-dashed, .ring-thin {
        animation: none !important;
      }

      .typewriter-cursor {
        animation: none !important;
        opacity: 1;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar" role="navigation" aria-label="Main Navigation">
    <div class="container nav-inner">
      <a href="#" class="logo" aria-label="Shaikh Ayesha Lukman Homepage">
        Ayesha<span class="logo-dot">.</span>
      </a>

      <div class="nav-links">
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Work</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#achievements" class="nav-link">Wins</a>
      </div>

      <div class="nav-right">
        <a href="#contact" class="btn btn-secondary" style="padding: 0.55rem 1.2rem; font-size: 0.875rem;">Contact</a>
        <button id="themeToggle" class="theme-toggle-btn" aria-label="Toggle dark and light theme" title="Toggle theme">
          <svg id="moonIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
          <svg id="sunIcon" style="display:none;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="hero" id="hero">
    <canvas id="heroCanvas" aria-hidden="true"></canvas>

    <div class="container hero-content">
      <div class="hero-left">
        <span class="hero-kicker stagger-1">Hi, I'm</span>
        <h1 class="hero-name stagger-2">
          Shaikh<br>Ayesha Lukman
        </h1>
        <div class="typewriter-box stagger-3" aria-live="polite">
          <span>I build as a</span>
          <span id="typewriterText" class="typewriter-text">AI &amp; ML Student</span>
          <span class="typewriter-cursor" aria-hidden="true"></span>
        </div>
        <p class="hero-bio stagger-4">
          Computer Science (AI &amp; ML) student and full stack developer based in Mumbai. Crafting intelligent systems, robust web architectures, and seamless digital experiences.
        </p>
        <div class="hero-cta-group stagger-5">
          <a href="#projects" class="btn btn-primary">
            See my projects
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a href="mailto:ayeshalk2025@gmail.com" class="btn btn-secondary">
            Email me
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <div class="hero-right">
        <div class="photo-wrapper">
          <div class="ring-dashed" aria-hidden="true"></div>
          <div class="ring-thin" aria-hidden="true"></div>
          <div class="photo-container">
            <img src="${photoBase64}" alt="Shaikh Ayesha Lukman - Computer Science Student &amp; Full Stack Developer" width="480" height="480" loading="eager">
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- About Section -->
  <section id="about">
    <div class="container">
      <div class="about-grid">
        <div class="fade-up">
          <h2 class="section-title">About Me</h2>
          <p class="about-bio-text">
            I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, located in Mumbai. Driven by a passion for building software that solves concrete problems, I bridge backend systems, data pipelines, and responsive frontend interfaces into polished products.
          </p>

          <!-- ABWcurious Timeline Entry -->
          <div class="timeline-card">
            <span class="timeline-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Work Experience
            </span>
            <h3 class="timeline-role">Software Development Intern</h3>
            <span class="timeline-company">ABWcurious</span>
            <ul class="timeline-bullets">
              <li>Architected and implemented responsive web modules and scalable full-stack features, enhancing user experience and feature accessibility.</li>
              <li>Engineered optimized data workflows and backend routines, minimizing latency and elevating overall system throughput.</li>
            </ul>
          </div>
        </div>

        <!-- 2x2 Stats Panel with Asymmetric Radii -->
        <div class="stats-grid fade-up">
          <div class="stat-card stat-card-1">
            <div class="stat-number-wrap">
              <span class="stat-number" data-target="9.34" data-decimals="2">0</span>
            </div>
            <span class="stat-label">Academic CGPA</span>
            <span class="stat-sublabel">CS (AI &amp; ML) Distinction</span>
          </div>

          <div class="stat-card stat-card-2">
            <div class="stat-number-wrap">
              <span class="stat-suffix" style="font-size: 1.85rem; margin-right: 2px;">Top</span>
              <span class="stat-number" data-target="40" data-decimals="0">0</span>
            </div>
            <span class="stat-label">KLEOS 4.0</span>
            <span class="stat-sublabel">National Hackathon Finalist</span>
          </div>

          <div class="stat-card stat-card-3">
            <div class="stat-number-wrap">
              <span class="stat-suffix" style="font-size: 1.85rem; margin-right: 2px;">Top</span>
              <span class="stat-number" data-target="15" data-decimals="0">0</span>
            </div>
            <span class="stat-label">Frontend Battle</span>
            <span class="stat-sublabel">IIT Bhubaneswar</span>
          </div>

          <div class="stat-card stat-card-4">
            <div class="stat-number-wrap">
              <span class="stat-number" data-target="2" data-decimals="0">0</span>
              <span class="stat-suffix">+</span>
            </div>
            <span class="stat-label">Products Built</span>
            <span class="stat-sublabel">Production Full-Stack ERPs</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects">
    <div class="container">
      <div class="fade-up">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
          Full stack applications built with robust backend logic, responsive design, and practical industry workflows. Click any project to expand its technical overview.
        </p>
      </div>

      <div class="projects-stack">
        <!-- Project 1: Restaurant360 ERP -->
        <button class="project-card fade-up" aria-expanded="false" aria-controls="p1-desc" id="p1-btn">
          <div class="project-header">
            <div class="project-title-area">
              <span class="project-meta-kicker">Hospitality &amp; Enterprise Resource Planning</span>
              <h3 class="project-title">Restaurant360 ERP</h3>
              <p class="project-summary">
                End-to-end multi-station restaurant management platform with live table billing, kitchen order tickets (KOT), real-time inventory tracking, and revenue analytics.
              </p>
            </div>
            <div class="expand-toggle-icon" aria-hidden="true">+</div>
          </div>
          <div class="project-expand-wrapper" id="p1-desc">
            <div class="project-expand-inner">
              <div class="project-expanded-content">
                <p class="project-description">
                  Restaurant360 ERP is built to eliminate operational bottlenecks in fast-paced dining environments. It features automated billing with multi-tax configurations, direct real-time sync with kitchen display stations, recipe-level raw ingredient deduction to prevent stock leakage, and role-based access control for cashiers, stewards, and managers. Complete with daily sales audit reports and peak-hour revenue analysis.
                </p>
                <div class="project-chips">
                  <span class="chip">Python</span>
                  <span class="chip">Full Stack Web</span>
                  <span class="chip">PostgreSQL</span>
                  <span class="chip">RESTful APIs</span>
                  <span class="chip">Inventory Optimization</span>
                  <span class="chip">Role-Based Access</span>
                </div>
              </div>
            </div>
          </div>
        </button>

        <!-- Project 2: BuildWise -->
        <button class="project-card fade-up" aria-expanded="false" aria-controls="p2-desc" id="p2-btn">
          <div class="project-header">
            <div class="project-title-area">
              <span class="project-meta-kicker">Construction Intelligence &amp; Supply Chain</span>
              <h3 class="project-title">BuildWise</h3>
              <p class="project-summary">
                Intelligent civil construction workflow and materials procurement management system with automated milestone tracking and budget forecast audits.
              </p>
            </div>
            <div class="expand-toggle-icon" aria-hidden="true">+</div>
          </div>
          <div class="project-expand-wrapper" id="p2-desc">
            <div class="project-expand-inner">
              <div class="project-expanded-content">
                <p class="project-description">
                  BuildWise solves supply chain friction on construction projects by centralizing site requisitions, vendor bidding, material consumption tracking (cement, steel, masonry), and contractor labor logs. It features proactive budget overrun alerts, phase-wise Gantt milestones, and automated expenditure reconciliations with downloadable PDF audit sheets.
                </p>
                <div class="project-chips">
                  <span class="chip">Full Stack Architecture</span>
                  <span class="chip">JavaScript / TypeScript</span>
                  <span class="chip">Database Design</span>
                  <span class="chip">Resource Allocation</span>
                  <span class="chip">Audit Reporting</span>
                  <span class="chip">Responsive UI</span>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills">
    <div class="container">
      <div class="fade-up">
        <h2 class="section-title">Technical Skills</h2>
        <p class="section-subtitle">
          Core technical competencies, developer tooling, and frameworks developed through academic excellence and hands-on projects.
        </p>
      </div>

      <div class="skills-grid">
        <!-- 1. Programming -->
        <div class="skill-panel fade-up">
          <div class="skill-panel-header">
            <div class="skill-icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 class="skill-panel-title">Programming</h3>
          </div>
          <div class="skill-chips">
            <span class="chip">Python</span>
            <span class="chip">C++</span>
            <span class="chip">Java</span>
            <span class="chip">JavaScript</span>
            <span class="chip">TypeScript</span>
            <span class="chip">SQL</span>
          </div>
        </div>

        <!-- 2. Frontend -->
        <div class="skill-panel fade-up">
          <div class="skill-panel-header">
            <div class="skill-icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 class="skill-panel-title">Frontend</h3>
          </div>
          <div class="skill-chips">
            <span class="chip">HTML5</span>
            <span class="chip">CSS3</span>
            <span class="chip">JavaScript (ES6+)</span>
            <span class="chip">React</span>
            <span class="chip">Tailwind CSS</span>
            <span class="chip">Responsive Web</span>
          </div>
        </div>

        <!-- 3. Backend -->
        <div class="skill-panel fade-up">
          <div class="skill-panel-header">
            <div class="skill-icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3 class="skill-panel-title">Backend</h3>
          </div>
          <div class="skill-chips">
            <span class="chip">Node.js</span>
            <span class="chip">Express.js</span>
            <span class="chip">Python (FastAPI / Django)</span>
            <span class="chip">RESTful APIs</span>
            <span class="chip">Authentication &amp; JWT</span>
          </div>
        </div>

        <!-- 4. Databases -->
        <div class="skill-panel fade-up">
          <div class="skill-panel-header">
            <div class="skill-icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3 class="skill-panel-title">Databases</h3>
          </div>
          <div class="skill-chips">
            <span class="chip">PostgreSQL</span>
            <span class="chip">MySQL</span>
            <span class="chip">MongoDB</span>
            <span class="chip">Firebase Firestore</span>
            <span class="chip">SQLite</span>
          </div>
        </div>

        <!-- 5. Machine Learning -->
        <div class="skill-panel fade-up">
          <div class="skill-panel-header">
            <div class="skill-icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <h3 class="skill-panel-title">Machine Learning</h3>
          </div>
          <div class="skill-chips">
            <span class="chip">Scikit-Learn</span>
            <span class="chip">TensorFlow</span>
            <span class="chip">NumPy</span>
            <span class="chip">Pandas</span>
            <span class="chip">Model Evaluation</span>
            <span class="chip">Data Preprocessing</span>
          </div>
        </div>

        <!-- 6. Tools -->
        <div class="skill-panel fade-up">
          <div class="skill-panel-header">
            <div class="skill-icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 class="skill-panel-title">Tools</h3>
          </div>
          <div class="skill-chips">
            <span class="chip">Git</span>
            <span class="chip">GitHub</span>
            <span class="chip">Docker</span>
            <span class="chip">Postman</span>
            <span class="chip">Linux / Bash</span>
            <span class="chip">VS Code</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Achievements Section -->
  <section id="achievements">
    <div class="container">
      <div class="fade-up">
        <h2 class="section-title">Honors &amp; Wins</h2>
        <p class="section-subtitle">
          Milestones across hackathons, engineering competitions, and academic performance.
        </p>
      </div>

      <div class="achievements-list">
        <!-- Row 1 -->
        <div class="achievement-row fade-up">
          <h3 class="achievement-title">Top 40 Finalist</h3>
          <span class="achievement-event">KLEOS 4.0 Hackathon</span>
        </div>

        <!-- Row 2 -->
        <div class="achievement-row fade-up">
          <h3 class="achievement-title">Top 15 Finalist</h3>
          <span class="achievement-event">Frontend Battle · IIT Bhubaneswar</span>
        </div>

        <!-- Row 3 -->
        <div class="achievement-row fade-up">
          <h3 class="achievement-title">Academic Distinction (9.34 CGPA)</h3>
          <span class="achievement-event">Computer Science (AI &amp; ML)</span>
        </div>

        <!-- Row 4 -->
        <div class="achievement-row fade-up">
          <h3 class="achievement-title">Full Stack Innovator</h3>
          <span class="achievement-event">Product Development &amp; Tech Sprints</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <div class="container">
      <div class="contact-card fade-up">
        <h2 class="contact-headline">Let's build something.</h2>
        <p class="contact-subtext">
          I am currently open to internship opportunities, full stack engineering roles, and AI/ML project collaborations. Feel free to reach out directly.
        </p>

        <div class="contact-buttons-grid">
          <!-- Email Button -->
          <a href="mailto:ayeshalk2025@gmail.com" class="contact-btn contact-btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Email Me
          </a>

          <!-- LinkedIn Button -->
          <a href="https://www.linkedin.com/in/ayesha-lukman-972987375/" target="_blank" rel="noopener noreferrer" class="contact-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            LinkedIn
          </a>

          <!-- GitHub Button -->
          <a href="https://github.com/10f43ayeshashaikhcanossa2021-collab" target="_blank" rel="noopener noreferrer" class="contact-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container footer-inner">
      <div>
        &copy; <span id="currentYear">2026</span> Shaikh Ayesha Lukman. All rights reserved.
      </div>
      <div>
        Mumbai, India &middot; Computer Science (AI &amp; ML)
      </div>
    </div>
  </footer>

  <!-- Inline Script (Zero External JS Libraries) -->
  <script>
    (function () {
      'use strict';

      // Set current year
      var yearEl = document.getElementById('currentYear');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // Theme Management (Light / Dark mode with system sync & localStorage)
      var root = document.documentElement;
      var themeToggle = document.getElementById('themeToggle');
      var moonIcon = document.getElementById('moonIcon');
      var sunIcon = document.getElementById('sunIcon');

      function getPreferredTheme() {
        try {
          var saved = localStorage.getItem('ayesha_portfolio_theme');
          if (saved === 'dark' || saved === 'light') return saved;
        } catch (e) {}
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        if (theme === 'dark') {
          if (moonIcon) moonIcon.style.display = 'none';
          if (sunIcon) sunIcon.style.display = 'block';
        } else {
          if (moonIcon) moonIcon.style.display = 'block';
          if (sunIcon) sunIcon.style.display = 'none';
        }
      }

      var currentTheme = getPreferredTheme();
      applyTheme(currentTheme);

      if (themeToggle) {
        themeToggle.addEventListener('click', function () {
          var active = root.getAttribute('data-theme') || 'light';
          var next = active === 'dark' ? 'light' : 'dark';
          applyTheme(next);
          try {
            localStorage.setItem('ayesha_portfolio_theme', next);
          } catch (e) {}
        });
      }

      // Typewriter Effect
      var words = ["AI & ML Student", "Full Stack Developer", "Python Developer"];
      var wordIndex = 0;
      var charIndex = 0;
      var isDeleting = false;
      var typewriterEl = document.getElementById('typewriterText');
      var typingDelay = 110;
      var erasingDelay = 65;
      var nextWordDelay = 1800;

      function typeLoop() {
        if (!typewriterEl) return;
        var currentWord = words[wordIndex];

        if (isDeleting) {
          typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }

        var speed = isDeleting ? erasingDelay : typingDelay;

        if (!isDeleting && charIndex === currentWord.length) {
          speed = nextWordDelay;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          speed = 400;
        }

        setTimeout(typeLoop, speed);
      }
      setTimeout(typeLoop, 800);

      // Accordion Projects Interaction
      var projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach(function (card) {
        card.addEventListener('click', function () {
          var expanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', !expanded);
        });

        // Accessible keyboard trigger
        card.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            var expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
          }
        });
      });

      // Interactive Canvas Neural Network
      var canvas = document.getElementById('heroCanvas');
      if (canvas) {
        var ctx = canvas.getContext('2d');
        var nodes = [];
        var animationFrameId = null;
        var isCanvasVisible = true;
        var mouse = { x: null, y: null, radius: 140 };

        function resizeCanvas() {
          var dpr = window.devicePixelRatio || 1;
          var rect = canvas.parentElement.getBoundingClientRect();
          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;
          canvas.style.width = rect.width + 'px';
          canvas.style.height = rect.height + 'px';
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          initNodes(rect.width, rect.height);
        }

        function initNodes(width, height) {
          nodes = [];
          // Scale node count to viewport size
          var count = Math.max(28, Math.min(75, Math.floor((width * height) / 19000)));
          for (var i = 0; i < count; i++) {
            nodes.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() - 0.5) * 0.75,
              vy: (Math.random() - 0.5) * 0.75,
              radius: Math.random() * 2 + 1.8,
              baseVx: 0,
              baseVy: 0
            });
          }
        }

        function updateAndDraw() {
          if (!isCanvasVisible) return;
          var rect = canvas.getBoundingClientRect();
          var width = rect.width;
          var height = rect.height;

          ctx.clearRect(0, 0, width, height);

          // Get colors based on theme
          var isDark = root.getAttribute('data-theme') === 'dark';
          var nodeRgb = isDark ? '185, 164, 255' : '122, 90, 245';
          var lineRgb = isDark ? '165, 142, 245' : '122, 90, 245';

          // Update & draw nodes
          for (var i = 0; i < nodes.length; i++) {
            var n = nodes[i];

            // Cursor push / repulsion physics
            if (mouse.x !== null && mouse.y !== null) {
              var dx = n.x - mouse.x;
              var dy = n.y - mouse.y;
              var dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < mouse.radius && dist > 0) {
                var force = (mouse.radius - dist) / mouse.radius;
                var angle = Math.atan2(dy, dx);
                n.x += Math.cos(angle) * force * 4.5;
                n.y += Math.sin(angle) * force * 4.5;
              }
            }

            // Normal motion
            n.x += n.vx;
            n.y += n.vy;

            // Bounce on boundary
            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;

            // Draw node circle
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + nodeRgb + ', 0.65)';
            ctx.fill();

            // Connect nearby nodes
            for (var j = i + 1; j < nodes.length; j++) {
              var n2 = nodes[j];
              var diffX = n.x - n2.x;
              var diffY = n.y - n2.y;
              var d = Math.sqrt(diffX * diffX + diffY * diffY);

              if (d < 125) {
                var alpha = (1 - d / 125) * 0.28;
                ctx.beginPath();
                ctx.moveTo(n.x, n.y);
                ctx.lineTo(n2.x, n2.y);
                ctx.strokeStyle = 'rgba(' + lineRgb + ', ' + alpha + ')';
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }

            // Link to cursor if nearby
            if (mouse.x !== null && mouse.y !== null) {
              var mDiffX = n.x - mouse.x;
              var mDiffY = n.y - mouse.y;
              var mDist = Math.sqrt(mDiffX * mDiffX + mDiffY * mDiffY);

              if (mDist < mouse.radius) {
                var mAlpha = (1 - mDist / mouse.radius) * 0.65;
                ctx.beginPath();
                ctx.moveTo(n.x, n.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = 'rgba(' + (isDark ? '255, 154, 120' : '232, 113, 79') + ', ' + mAlpha + ')';
                ctx.lineWidth = 1.35;
                ctx.stroke();
              }
            }
          }

          animationFrameId = requestAnimationFrame(updateAndDraw);
        }

        // Mouse listeners
        var heroSec = document.getElementById('hero');
        if (heroSec) {
          heroSec.addEventListener('mousemove', function (e) {
            var rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
          });

          heroSec.addEventListener('mouseleave', function () {
            mouse.x = null;
            mouse.y = null;
          });
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Pause animation when hero is off-screen
        if ('IntersectionObserver' in window) {
          var heroObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              isCanvasVisible = entry.isIntersecting;
              if (isCanvasVisible) {
                if (!animationFrameId) animationFrameId = requestAnimationFrame(updateAndDraw);
              } else {
                if (animationFrameId) {
                  cancelAnimationFrame(animationFrameId);
                  animationFrameId = null;
                }
              }
            });
          }, { threshold: 0.05 });

          if (heroSec) heroObserver.observe(heroSec);
        } else {
          animationFrameId = requestAnimationFrame(updateAndDraw);
        }
      }

      // Intersection Observer for Scroll Reveals
      var fadeElements = document.querySelectorAll('.fade-up');
      if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, {
          root: null,
          threshold: 0.1,
          rootMargin: '0px 0px -40px 0px'
        });

        fadeElements.forEach(function (el) {
          revealObserver.observe(el);
        });
      } else {
        fadeElements.forEach(function (el) {
          el.classList.add('visible');
        });
      }

      // Stats Count-Up Animation
      var statNumbers = document.querySelectorAll('.stat-number');
      var statsAnimated = false;

      function runCountUp() {
        if (statsAnimated) return;
        statsAnimated = true;

        statNumbers.forEach(function (el) {
          var target = parseFloat(el.getAttribute('data-target') || '0');
          var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
          var duration = 1600;
          var startTime = null;

          function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            var easeProgress = 1 - (1 - progress) * (1 - progress);
            var currentVal = easeProgress * target;

            el.textContent = decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal).toString();

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toString();
            }
          }

          requestAnimationFrame(step);
        });
      }

      var statsContainer = document.querySelector('.stats-grid');
      if (statsContainer && 'IntersectionObserver' in window) {
        var statsObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runCountUp();
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });

        statsObserver.observe(statsContainer);
      } else {
        runCountUp();
      }

    })();
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully wrote index.html with embedded base64 image! Size:', html.length);
