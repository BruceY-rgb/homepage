"use client";

import { Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} 杨思行 (Sixing Yang). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/BruceY-rgb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
