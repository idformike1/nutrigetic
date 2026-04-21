"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import posts from "../../cms/blog/posts";

/**
 * Deep-Scan Navigation (Command Palette)
 * Nutrigetic Specialized Search Interface
 */

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Cmd+K or Ctrl+K trigger
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      // Escape to close
      if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle, close]);

  const filteredPosts = query === "" 
    ? [] 
    : posts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase())).slice(0, 6);

  // Keyboard Navigation through results
  const handleResultKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev + 1) % filteredPosts.length);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev - 1 + filteredPosts.length) % filteredPosts.length);
    } else if (e.key === "Enter" && filteredPosts[selectedIndex]) {
      navigateToPost(filteredPosts[selectedIndex].slug);
    }
  };

  const navigateToPost = (slug) => {
    router.push(`/blog/${slug}`);
    close();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      {/* Glassmorphism Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1f3d2b]/40 backdrop-blur-md transition-opacity duration-300"
        onClick={close}
      />

      {/* Command Surface */}
      <div className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-[0_32px_128px_-12px_rgba(31,61,43,0.3)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="relative flex items-center border-b border-gray-100">
          <span className="absolute left-6 text-[#1f3d2b]/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input
            autoFocus
            className="w-full pl-16 pr-6 py-7 text-xl text-[#1f3d2b] bg-transparent outline-none placeholder:text-[#1f3d2b]/20"
            placeholder="Deep-Scan Insights (Search articles...)"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            onKeyDown={handleResultKeyDown}
          />
          <div className="absolute right-6 flex gap-1">
            <kbd className="px-2 py-1 bg-[#f8f6f2] text-[#1f3d2b]/40 rounded text-[10px] font-bold border border-gray-100 italic">ESC</kbd>
          </div>
        </div>

        {/* Results Stream */}
        {filteredPosts.length > 0 ? (
          <div className="max-h-[480px] overflow-y-auto p-3">
            <div className="px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-black text-[#1f3d2b]/20">
              Matches Found ({filteredPosts.length})
            </div>
            {filteredPosts.map((post, i) => (
              <button
                key={post.id}
                className={`w-full text-left p-5 rounded-[16px] transition-all flex items-center justify-between group ${
                  selectedIndex === i ? "bg-[#f8f6f2]" : "hover:bg-[#f8f6f2]/50"
                }`}
                onClick={() => navigateToPost(post.slug)}
                onMouseEnter={() => setSelectedIndex(i)}
              >
                <div className="flex flex-col">
                  <span className={`font-bold transition-colors duration-200 ${
                    selectedIndex === i ? "text-[#f97316]" : "text-[#1f3d2b]"
                  }`}>
                    {post.title}
                  </span>
                  <span className="text-xs text-[#1f3d2b]/40 mt-1 uppercase tracking-widest font-medium">
                    {post.date}
                  </span>
                </div>
                {selectedIndex === i && (
                  <span className="text-[#f97316] text-sm font-black animate-in fade-in slide-in-from-left-2">
                    Enter ↵
                  </span>
                )}
              </button>
            ))}
          </div>
        ) : query !== "" && (
          <div className="p-16 text-center">
            <div className="text-4xl mb-4 opacity-20">empty-scan</div>
            <p className="text-[#1f3d2b]/40 font-medium">No clinical insights found for "{query}"</p>
          </div>
        )}
        
        {/* Footer info */}
        <div className="bg-[#f8f6f2]/50 p-4 border-t border-gray-100 flex justify-between items-center px-8">
          <div className="flex gap-4 items-center">
            <div className="flex gap-1">
              <kbd className="px-1.5 py-0.5 bg-white text-[10px] rounded border border-gray-100">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white text-[10px] rounded border border-gray-100">↓</kbd>
            </div>
            <span className="text-[10px] text-[#1f3d2b]/30 font-bold uppercase tracking-widest">Navigate</span>
          </div>
          <div className="flex gap-2 items-center">
             <kbd className="px-1.5 py-0.5 bg-white text-[10px] rounded border border-gray-100">↵</kbd>
             <span className="text-[10px] text-[#1f3d2b]/30 font-bold uppercase tracking-widest">Select</span>
          </div>
        </div>
      </div>
    </div>
  );
}
