import { c as createComponent, d as addAttribute, n as renderSlot, o as renderHead, r as renderComponent, b as renderTemplate, a as createAstro } from './astro/server_Q3tZ6B8y.mjs';
import 'piccolore';
/* empty css                         */
import { n as noop, g as ensure_array_like, h as store_get, c as attr_class, i as stringify, e as escape_html, u as unsubscribe_stores } from './_@astro-renderers_C6qh-7QO.mjs';
import 'clsx';

/** @import { Equals } from '#client' */


/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function safe_not_equal(a, b) {
	return a != a
		? b == b
		: a !== b || (a !== null && typeof a === 'object') || typeof a === 'function';
}

/** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
/** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */

/**
 * @type {Array<SubscribeInvalidateTuple<any> | any>}
 */
const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {Unsubscriber | null} */
	let stop = null;

	/** @type {Set<SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();

	/**
	 * @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(/** @type {T} */ (value)));
	}

	/**
	 * @param {Subscriber<T>} run
	 * @param {() => void} [invalidate]
	 * @returns {Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(/** @type {T} */ (value));
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

const SITE = {
  company: "PT. Bharata Internasional Pharmaceutical",
  appName: "Buku Tamu Digital",
  timezone: "Asia/Jakarta",
  timezoneLabel: "WIB",
  locale: "id-ID",
  copyright: "One Bharata - ERP"
};

function createNotificationStore() {
  const { subscribe, update } = writable([]);
  function show(message, type = "info", duration = 4e3) {
    const id = Math.random().toString(36).substring(2, 9);
    update((all) => [...all, { id, message, type }]);
    setTimeout(() => {
      update((all) => all.filter((t) => t.id !== id));
    }, duration);
  }
  return {
    subscribe,
    success: (msg) => show(msg, "success"),
    error: (msg) => show(msg, "error"),
    info: (msg) => show(msg, "info")
  };
}
const notifications = createNotificationStore();

function ToastContainer($$renderer) {
	var $$store_subs;

	$$renderer.push(`<div class="fixed bottom-6 left-4 right-4 max-w-[480px] mx-auto z-[100] flex flex-col gap-3 pointer-events-none"><!--[-->`);

	const each_array = ensure_array_like(store_get($$store_subs ??= {}, '$notifications', notifications));

	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let toast = each_array[$$index];

		$$renderer.push(`<div${attr_class(`pointer-events-auto rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 text-sm font-medium text-white transition-all ${stringify(toast.type === 'error' ? 'bg-red-600' : '')} ${stringify(toast.type === 'success' ? 'bg-green-600' : '')} ${stringify(toast.type === 'info' ? 'bg-blue-600' : '')}`)} role="alert">`);

		if (toast.type === 'error') {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path></svg>`);
		} else {
			$$renderer.push('<!--[!-->');
			$$renderer.push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
		}

		$$renderer.push(`<!--]--> <span>${escape_html(toast.message)}</span></div>`);
	}

	$$renderer.push(`<!--]--></div>`);

	if ($$store_subs) unsubscribe_stores($$store_subs);
}

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = `${SITE.appName} \u2013 ${SITE.company}`,
    bodyClass = "min-h-screen bg-gray-50"
  } = Astro2.props;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><link rel="icon" type="image/png" href="/logo.png"><title>${title} | ${SITE.company}</title>${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body${addAttribute(bodyClass, "class")}> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ToastContainer", ToastContainer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Data utama/Aplikasi/Office/guestbook-system/src/components/ToastContainer.svelte", "client:component-export": "default" })} </body></html>`;
}, "C:/Data utama/Aplikasi/Office/guestbook-system/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, SITE as S };
