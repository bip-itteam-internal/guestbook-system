import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, b as renderTemplate, a as createAstro } from './astro/server_Q3tZ6B8y.mjs';
import 'piccolore';
import { S as SITE } from './BaseLayout_DeDit4aO.mjs';
import { $ as $$Image } from './_astro_assets_D5DOp3si.mjs';

const headerBg = new Proxy({"src":"/_astro/image.BWVgQu_I.png","width":2560,"height":1440,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Data utama/Aplikasi/Office/guestbook-system/src/assets/image.png";
							}
							
							return target[name];
						}
					});

const logoImage = new Proxy({"src":"/_astro/logo.CYLyq7_X.png","width":1787,"height":2153,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Data utama/Aplikasi/Office/guestbook-system/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$LogoBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LogoBox;
  const { size = "w-12 h-12", class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    size,
    "bg-white/10 backdrop-blur-[2px] border border-white/20 rounded-xl flex items-center justify-center p-2 shadow-xl transition-transform hover:scale-105 duration-300",
    className
  ], "class:list")}> ${renderComponent($$result, "Image", $$Image, { "src": logoImage, "alt": SITE.company, "class": "w-full h-full object-contain", "loading": "eager" })} </div>`;
}, "C:/Data utama/Aplikasi/Office/guestbook-system/src/components/LogoBox.astro", void 0);

const $$Astro = createAstro();
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden"> <div class="absolute inset-0 z-0"> ${renderComponent($$result, "Image", $$Image, { "src": headerBg, "alt": "Header Background", "class": "w-full h-full object-cover", "loading": "eager" })} <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div> </div> <div class="relative z-10 px-6 py-5"> <div class="flex items-center gap-4 justify-center"> <div class="shrink-0"> ${renderComponent($$result, "LogoBox", $$LogoBox, { "size": "w-12 h-12" })} </div> <div class="flex flex-col"> <h3 class="text-[18px] font-bold text-white tracking-tight leading-tight drop-shadow-md"> ${title} </h3> <p class="text-[10px] font-semibold text-primary-light/90 tracking-widest uppercase opacity-90"> ${SITE.company} </p> </div> </div> <div class="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white/10"></div> </div> </div>`;
}, "C:/Data utama/Aplikasi/Office/guestbook-system/src/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
