import os
from zipfile import ZipFile

project_files = {
    "vbes-website/pages/index.js": """<your index.js code here>""",
    "vbes-website/styles/globals.css": """@tailwind base;\n@tailwind components;\n@tailwind utilities;""",
    "vbes-website/tailwind.config.js": """module.exports = {\n  content: ["./pages/**/*.{js,ts,jsx,tsx}"],\n  theme: { extend: {} },\n  plugins: [],\n}""",
    "vbes-website/package.json": """{\n  "name": "vbes-website",\n  "version": "1.0.0",\n  "scripts": {\n    "dev": "next dev",\n    "build": "next build",\n    "start": "next start"\n  },\n  "dependencies": {\n    "next": "latest",\n    "react": "latest",\n    "react-dom": "latest"\n  },\n  "devDependencies": {\n    "autoprefixer": "^10.4.0",\n    "postcss": "^8.4.5",\n    "tailwindcss": "^3.0.0"\n  }\n}""",
    "vbes-website/postcss.config.js": """module.exports = {\n  plugins: {\n    tailwindcss: {},\n    autoprefixer: {},\n  },\n}""",
    "vbes-website/next.config.js": """const nextConfig = {}\n\nmodule.exports = nextConfig"""
}

with ZipFile("vbes-website.zip", 'w') as zipf:
    for filepath, content in project_files.items():
        zipf.writestr(filepath, content)

print("ZIP file created: vbes-website.zip")
