import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Q3tZ6B8y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, S as SITE } from '../chunks/BaseLayout_DeDit4aO.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_C6qh-7QO.mjs';

const $$Success = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${SITE.appName} \u2013 Berhasil`, "description": "Data kunjungan Anda telah berhasil dikirim.", "bodyClass": "min-h-screen bg-gray-50 flex items-center justify-center px-4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full max-w-[480px] text-center"> <!-- Icon Sukses --> <div class="mb-6 flex justify-center"> <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center"> <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> </div> </div> <!-- Pesan --> <h1 class="text-2xl font-bold text-slate-800 mb-2">Data Berhasil Dikirim!</h1> <p class="text-gray-500 text-sm leading-relaxed mb-4">
Terima kasih telah mengisi buku tamu.<br> </p> <p class="text-[10px] text-center text-slate-400 mt-12 uppercase tracking-widest font-medium">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE.copyright} </p> </main> ` })}`;
}, "C:/Data utama/Aplikasi/Office/guestbook-system/src/pages/success.astro", void 0);

const $$file = "C:/Data utama/Aplikasi/Office/guestbook-system/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
