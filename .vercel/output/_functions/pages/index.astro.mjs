import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Q3tZ6B8y.mjs';
import 'piccolore';
import { $ as $$BaseLayout, S as SITE } from '../chunks/BaseLayout_DeDit4aO.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DoA6idut.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_C6qh-7QO.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE.appName, "description": `Sistem Buku Tamu Digital berbasis QR Code untuk keperluan kunjungan ${SITE.company}.`, "bodyClass": "min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center px-4 py-12" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full max-w-[440px]"> <!-- Card --> <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"> <!-- Header di bagian atas card --> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": SITE.appName })} <div class="h-1 bg-slate-100"></div> <div class="p-6"> <h2 class="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Cara Penggunaan</h2> <ol class="space-y-4"> <li class="flex gap-4 items-start"> <span class="w-7 h-7 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span> <div> <p class="text-sm font-medium text-slate-700">Scan QR Code</p> <p class="text-xs text-slate-400 mt-0.5">Tersedia di petugas security</p> </div> </li> <li class="flex gap-4 items-start"> <span class="w-7 h-7 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span> <div> <p class="text-sm font-medium text-slate-700">Isi Formulir</p> <p class="text-xs text-slate-400 mt-0.5">Lengkapi data kunjungan dengan benar</p> </div> </li> <li class="flex gap-4 items-start"> <span class="w-7 h-7 rounded-full bg-primary-light text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span> <div> <p class="text-sm font-medium text-slate-700">Kirim Data</p> <p class="text-xs text-slate-400 mt-0.5">Tekan tombol <strong class="text-slate-600">Kirim Data</strong> untuk menyimpan</p> </div> </li> </ol> </div> </div> <p class="text-[10px] text-center text-slate-400 mt-6 uppercase tracking-widest font-medium">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE.copyright} </p> </main> ` })}`;
}, "C:/Data utama/Aplikasi/Office/guestbook-system/src/pages/index.astro", void 0);

const $$file = "C:/Data utama/Aplikasi/Office/guestbook-system/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
