"use client";
import { useEffect } from "react";

export default function ScriptLoader() {
  useEffect(() => {
    const scripts = [
      "js/designesia.js",
      "js/custom-marquee.js",
      "js/custom-swiper-1.js",
    ];
    let i = 0;
    function loadNext() {
      if (i >= scripts.length) return;
      const s = document.createElement("script");
      s.src = scripts[i];
      s.onload = () => { i++; loadNext(); };
      s.onerror = () => { i++; loadNext(); };
      document.body.appendChild(s);
    }
    loadNext();
  }, []);
  return null;
}
