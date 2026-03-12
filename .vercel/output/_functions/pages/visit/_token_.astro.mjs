import { c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderScript, b as renderTemplate, a as createAstro, r as renderComponent } from '../../chunks/astro/server_Q3tZ6B8y.mjs';
import 'piccolore';
import { S as SITE, $ as $$BaseLayout } from '../../chunks/BaseLayout_DeDit4aO.mjs';
import 'clsx';
import { $ as $$PageHeader } from '../../chunks/PageHeader_DoA6idut.mjs';
import { e as escape_html, s as slot, b as bind_props, f as fallback, a as attr, c as attr_class, d as clsx } from '../../chunks/_@astro-renderers_C6qh-7QO.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_C6qh-7QO.mjs';

const $$Astro$1 = createAstro();
const $$SplashScreen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SplashScreen;
  const { revealId, duration = 1e3 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="splash" aria-hidden="true"${addAttribute(revealId, "data-reveal")}${addAttribute(duration, "data-duration")} class="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-4 animate-splash-fade-in"> <div class="text-center animate-splash-up delay-100 px-6"> <h1 class="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight leading-snug">
Selamat Datang di <br> <span class="text-primary mt-1 inline-block">${SITE.company}</span> </h1> <!-- Animasi titik loncat (bounce dots) --> <div class="mt-6 flex items-center justify-center gap-2"> <div class="w-2 h-2 rounded-full bg-primary/40 animate-bounce" style="animation-delay: 0ms"></div> <div class="w-2 h-2 rounded-full bg-primary/70 animate-bounce" style="animation-delay: 150ms"></div> <div class="w-2 h-2 rounded-full bg-primary animate-bounce" style="animation-delay: 300ms"></div> </div> </div> </div> ${renderScript($$result, "C:/Data utama/Aplikasi/Office/guestbook-system/src/components/SplashScreen.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Data utama/Aplikasi/Office/guestbook-system/src/components/SplashScreen.astro", void 0);

function FormSection($$renderer, $$props) {
	let title = $$props['title'];

	$$renderer.push(`<section class="space-y-4"><div class="flex items-center gap-2"><div class="w-1 h-4 bg-primary rounded-full"></div> <h5 class="font-medium text-[12px] text-slate-800 uppercase tracking-widest">${escape_html(title)}</h5></div> <div class="flex flex-col gap-5"><!--[-->`);
	slot($$renderer, $$props, 'default', {});
	$$renderer.push(`<!--]--></div></section>`);
	bind_props($$props, { title });
}

function FormField($$renderer, $$props) {
	let inputClass;
	let id = $$props['id'];
	let label = $$props['label'];
	let type = fallback($$props['type'], 'text');
	let placeholder = fallback($$props['placeholder'], '');
	let required = fallback($$props['required'], false);
	let disabled = fallback($$props['disabled'], false);
	let uppercase = fallback($$props['uppercase'], false);
	let icon = fallback($$props['icon'], undefined);
	let helperText = fallback($$props['helperText'], undefined);
	let value = fallback($$props['value'], '');
	let error = fallback($$props['error'], '');

	inputClass = disabled
		? 'w-full h-11 px-3.5 border border-slate-200 rounded-xl text-sm text-slate-400 bg-slate-50 cursor-not-allowed'
		: `w-full h-11 px-3.5 border rounded-xl text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all ${uppercase ? 'uppercase ' : ''}${error
			? 'border-red-400 bg-red-50/30'
			: 'border-slate-200 focus:border-primary'}`;

	$$renderer.push(`<div class="flex flex-col gap-1.5"><label${attr('for', id)} class="text-sm font-medium text-slate-500 tracking-wider flex items-center">`);

	if (icon === 'calendar') {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--> `);

	if (icon === 'clock') {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--> ${escape_html(label)} `);

	if (required) {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<span class="text-red-400">*</span>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--></label> <input${attr('id', id)}${attr('name', id)}${attr('type', type)}${attr('placeholder', placeholder)}${attr('disabled', disabled, true)}${attr_class(clsx(inputClass))} autocomplete="off"${attr('value', value)}/> `);

	if (helperText) {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<p class="text-[10px] text-slate-400 leading-tight">${escape_html(helperText)}</p>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--> `);

	if (!disabled && error) {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<p class="text-xs text-red-500" aria-live="polite">${escape_html(error)}</p>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--></div>`);

	bind_props($$props, {
		id,
		label,
		type,
		placeholder,
		required,
		disabled,
		uppercase,
		icon,
		helperText,
		value,
		error
	});
}

function VisitTypeSelector($$renderer, $$props) {
	let selectedType = fallback($$props['selectedType'], "personal");

	$$renderer.push(`<div class="flex flex-col gap-2"><div class="grid grid-cols-2 gap-2.5"><label class="flex items-center gap-2.5 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer transition-all has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:shadow-sm"><input type="radio" name="category" value="personal" class="accent-primary"${attr('checked', selectedType === "personal", true)}/> <div><p class="text-sm font-semibold text-slate-800">Personal</p> <p class="text-xs text-slate-400">1 orang</p></div></label> <label class="flex items-center gap-2.5 border border-slate-200 rounded-xl px-4 py-3 cursor-pointer transition-all has-[:checked]:border-primary has-[:checked]:bg-primary-light has-[:checked]:shadow-sm"><input type="radio" name="category" value="group" class="accent-primary"${attr('checked', selectedType === "group", true)}/> <div><p class="text-sm font-semibold text-slate-800">Rombongan</p> <p class="text-xs text-slate-400">Perwakilan</p></div></label></div> `);

	if (selectedType === "group") {
		$$renderer.push('<!--[-->');
		$$renderer.push(`<div class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 text-xs text-amber-700 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"></path></svg> <span class="leading-none">Untuk rombongan, cukup satu orang yang mengisi sebagai perwakilan.</span></div>`);
	} else {
		$$renderer.push('<!--[!-->');
	}

	$$renderer.push(`<!--]--></div>`);
	bind_props($$props, { selectedType });
}

function formatSlug(text) {
  if (!text) return void 0;
  return text.replace(/-/g, " ");
}

function LocationInfo($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let formattedSecurity, formattedOffice;
		let standby_security = fallback($$props['standby_security'], undefined);
		let visiting_office = fallback($$props['visiting_office'], undefined);

		formattedSecurity = formatSlug(standby_security);
		formattedOffice = formatSlug(visiting_office);

		if (formattedSecurity || formattedOffice) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<div class="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-sm"><div class="flex flex-col gap-2 text-gray-600">`);

			if (formattedOffice) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg> <span class="font-medium text-gray-800">${escape_html(formattedOffice)}</span></div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> `);

			if (formattedSecurity) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg> <span class="font-medium text-gray-800">${escape_html(formattedSecurity)} (Security)</span></div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--></div></div>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]-->`);
		bind_props($$props, { standby_security, visiting_office });
	});
}

const API_BASE = "http://10.10.10.121:6969";
async function request(path, options = {}) {
  const url = `${API_BASE}${path}`;
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Astro-Guestbook/1.0",
        ...options.headers
      }
    });
    if (!response.ok) {
      const errorText = await response.text().catch(() => "No error body");
      console.error(`API Error: ${response.status} - ${url}`, errorText);
      throw new Error(`API Request failed with status ${response.status}`);
    }
    return response.json();
  } catch (err) {
    if (err instanceof Error && !err.message.includes("status")) {
      console.error(`Network or Parsing Error: ${url}`, err.message);
    }
    throw err;
  }
}
const api = {
  get: (path, options) => request(path, { ...options, method: "GET" }),
  post: (path, body, options) => request(path, { ...options, method: "POST", body: JSON.stringify(body) })
};

const guestbookApi = {
  validateToken: (token) => api.post("/public/guestbook?validate=token", { token }),
  submitGuest: (payload) => api.post("/public/guestbook", payload)
};

function GuestForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let token = $$props['token'];
		let standby_security = fallback($$props['standby_security'], undefined);
		let visiting_office = fallback($$props['visiting_office'], undefined);

		// Data State
		let category = "personal";

		let number_of_people = "";
		let full_name = "";
		let phone_number = "";
		let visit_from = "";
		let plate_number = "";
		let visit_purpose = "";
		let meeting_with = "";

		// Error State Map
		let errors = {};

		// Form Submission State
		let isSubmitting = false;

		let $$settled = true;
		let $$inner_renderer;

		function $$render_inner($$renderer) {
			$$renderer.push(`<form class="flex flex-col gap-6 p-6" novalidate="">`);
			LocationInfo($$renderer, { standby_security, visiting_office });
			$$renderer.push(`<!----> `);

			FormSection($$renderer, {
				title: 'Jenis Kunjungan',
				children: ($$renderer) => {
					VisitTypeSelector($$renderer, {
						get selectedType() {
							return category;
						},

						set selectedType($$value) {
							category = $$value;
							$$settled = false;
						}
					});

					$$renderer.push(`<!----> `);

					if (category === "group") {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<div class="animate-splash-up">`);

						FormField($$renderer, {
							id: 'number_of_people',
							label: 'Total Jumlah Orang',
							type: 'number',
							placeholder: 'Contoh: 5',
							required: true,
							error: errors.number_of_people,
							get value() {
								return number_of_people;
							},

							set value($$value) {
								number_of_people = $$value;
								$$settled = false;
							}
						});

						$$renderer.push(`<!----></div>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]-->`);
				},
				$$slots: { default: true }
			});

			$$renderer.push(`<!----> `);

			FormSection($$renderer, {
				title: 'Data Pengunjung',
				children: ($$renderer) => {
					FormField($$renderer, {
						id: 'full_name',
						label: 'Nama Lengkap',
						placeholder: 'Contoh: Budi Santoso',
						required: true,
						error: errors.full_name,
						get value() {
							return full_name;
						},

						set value($$value) {
							full_name = $$value;
							$$settled = false;
						}
					});

					$$renderer.push(`<!----> `);

					FormField($$renderer, {
						id: 'phone_number',
						label: 'Nomor HP',
						type: 'tel',
						placeholder: 'Contoh: 08123456789',
						required: true,
						error: errors.phone_number,
						get value() {
							return phone_number;
						},

						set value($$value) {
							phone_number = $$value;
							$$settled = false;
						}
					});

					$$renderer.push(`<!----> `);

					FormField($$renderer, {
						id: 'visit_from',
						label: 'Instansi / Perusahaan / Alamat',
						placeholder: 'Contoh: PT Maju Bersama / Jl. Melati No. 1',
						required: true,
						error: errors.visit_from,
						get value() {
							return visit_from;
						},

						set value($$value) {
							visit_from = $$value;
							$$settled = false;
						}
					});

					$$renderer.push(`<!----> `);

					FormField($$renderer, {
						id: 'plate_number',
						label: 'Plat Nomor Kendaraan',
						placeholder: 'Contoh: B 1234 ABC',
						required: true,
						uppercase: true,
						helperText: 'Isi dengan "-" jika tidak membawa kendaraan',
						error: errors.plate_number,
						get value() {
							return plate_number;
						},

						set value($$value) {
							plate_number = $$value;
							$$settled = false;
						}
					});

					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});

			$$renderer.push(`<!----> `);

			FormSection($$renderer, {
				title: 'Detail Kunjungan',
				children: ($$renderer) => {
					FormField($$renderer, {
						id: 'visit_purpose',
						label: 'Keperluan',
						placeholder: 'Contoh: Rapat, Presentasi, dll.',
						required: true,
						error: errors.visit_purpose,
						get value() {
							return visit_purpose;
						},

						set value($$value) {
							visit_purpose = $$value;
							$$settled = false;
						}
					});

					$$renderer.push(`<!----> `);

					FormField($$renderer, {
						id: 'meeting_with',
						label: 'Bertemu Dengan',
						placeholder: 'Contoh: Bapak Andi (Marketing)',
						required: true,
						error: errors.meeting_with,
						get value() {
							return meeting_with;
						},

						set value($$value) {
							meeting_with = $$value;
							$$settled = false;
						}
					});

					$$renderer.push(`<!---->`);
				},
				$$slots: { default: true }
			});

			$$renderer.push(`<!----> <button type="submit"${attr('disabled', isSubmitting, true)} class="w-full h-12 bg-primary text-white font-semibold rounded-xl transition-all hover:bg-primary-dark active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide mt-1">${escape_html("Kirim Data")}</button></form>`);
		}

		do {
			$$settled = true;
			$$inner_renderer = $$renderer.copy();
			$$render_inner($$inner_renderer);
		} while (!$$settled);

		$$renderer.subsume($$inner_renderer);
		bind_props($$props, { token, standby_security, visiting_office });
	});
}

const $$Astro = createAstro();
const $$token = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$token;
  const { token } = Astro2.params;
  const standby_security = Astro2.url.searchParams.get("standby_security") || void 0;
  const visiting_office = Astro2.url.searchParams.get("visiting_office") || void 0;
  if (!token) {
    return Astro2.redirect("/invalid?reason=invalid");
  }
  try {
    const data = await guestbookApi.validateToken(token);
    if (!data.valid) {
      console.error(`Token invalid! URL: ${token}, Response:`, data);
      return Astro2.redirect(`/invalid?reason=invalid`);
    }
  } catch (error) {
    console.error(`Error validating token ${token}:`, error);
    return Astro2.redirect("/invalid?reason=invalid");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": SITE.appName, "description": `Formulir buku tamu digital ${SITE.company}. Isi data kunjungan Anda.`, "bodyClass": "min-h-screen bg-[#f8fafc]" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "SplashScreen", $$SplashScreen, { "revealId": "main-content" })} ${maybeRenderHead()}<div id="main-content" class="opacity-0 transition-opacity duration-400 ease-out pt-6 px-4 pb-24"> <main class="w-full max-w-[480px] mx-auto"> <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": SITE.appName })} ${renderComponent($$result2, "GuestForm", GuestForm, { "client:load": true, "token": token, "standby_security": standby_security, "visiting_office": visiting_office, "client:component-hydration": "load", "client:component-path": "C:/Data utama/Aplikasi/Office/guestbook-system/src/components/GuestForm.svelte", "client:component-export": "default" })} </div> <p class="text-xs text-center text-slate-400 mt-5">
Data Anda tersimpan dengan aman dan hanya digunakan untuk keperluan kunjungan.
</p> </main> <p class="text-[10px] text-center text-slate-400 mt-8 mb-4 uppercase tracking-widest font-medium">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE.copyright} </p> </div> `, "head": async ($$result2) => renderTemplate`<meta id="app-config"${addAttribute(SITE.timezone, "data-tz")}${addAttribute(SITE.timezoneLabel, "data-tz-label")}${addAttribute(SITE.locale, "data-locale")}>` })}`;
}, "C:/Data utama/Aplikasi/Office/guestbook-system/src/pages/visit/[token].astro", void 0);

const $$file = "C:/Data utama/Aplikasi/Office/guestbook-system/src/pages/visit/[token].astro";
const $$url = "/visit/[token]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$token,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
