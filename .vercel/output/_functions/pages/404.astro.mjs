import { c as createComponent, a as createAstro } from '../chunks/astro/server_Q3tZ6B8y.mjs';
import 'piccolore';
import 'clsx';
export { r as renderers } from '../chunks/_@astro-renderers_C6qh-7QO.mjs';

const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return Astro2.redirect("/invalid?reason=notfound", 302);
}, "C:/Data utama/Aplikasi/Office/guestbook-system/src/pages/404.astro", void 0);

const $$file = "C:/Data utama/Aplikasi/Office/guestbook-system/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
