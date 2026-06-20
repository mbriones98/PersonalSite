// Prerender the entire site to static files. Required for static hosting
// (GitHub Pages). The app has no server-side load functions, endpoints, or
// form actions, so every route can be rendered to plain HTML at build time.
export const prerender = true;

// No client-side router fallback is needed: this is a single-route site.
