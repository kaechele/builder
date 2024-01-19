import { browser } from '$app/environment';
import { page } from '$app/stores';
import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<import('$lib').Page[]>} */
const pages = writable([]);

if (browser) {
  page.subscribe(({ data }) => {
    if (data?.pages) {
      pages.set(data.pages);
    }
  });
}

export default pages;
