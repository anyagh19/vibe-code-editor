# 🖥️ VibeCoder

**VibeCoder** is a modern, web-based IDE built with **Next.js** that provides a fast, interactive development experience directly in your browser. It uses **Monaco Editor** for code editing, **WebContainers** to run code in-browser, and integrates **AI-powered code suggestions** using local **Ollama models** (like `gpt-oss` or `codellama`).

---

## ✨ Features

- ⚡ **Web-based IDE** — No installation needed, run and edit projects directly in the browser  
- 💻 **Monaco Editor** — Fully-featured code editing experience with syntax highlighting and IntelliSense  
- 📦 **WebContainer-powered runtime** — Execute code securely in the browser  
- 🤖 **AI Code Suggestions** — Context-aware completions using locally hosted Ollama models  
- 🎨 **Beautiful UI** — Built with Radix UI, TailwindCSS, and Shadcn components  
- 🌙 **Theme Support** — Light / dark theme toggle  
- 🔐 **Authentication** — Integrated using NextAuth with Prisma  
- 💾 **Persistent Projects** — Save and load projects from your account  

---

## 🧠 Architecture Overview

- **Frontend:** Next.js 15 + React 19 + TailwindCSS  
- **Editor:** Monaco Editor (`@monaco-editor/react`)  
- **Terminal:** xterm.js with multiple add-ons (fit, search, links)  
- **Runtime:** WebContainers (`@webcontainer/api`)  
- **AI Engine:** Ollama local LLM server (`http://localhost:11434/api/generate`)  
- **Database:** Prisma ORM + any supported DB (PostgreSQL/MySQL/SQLite)  
- **Auth:** NextAuth with Prisma adapter  

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/anyagh19/vibe-code-editor.git
cd vibecoder
