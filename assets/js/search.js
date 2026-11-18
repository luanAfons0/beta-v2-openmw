const forms = document.querySelectorAll("form[data-search]");

if (typeof WebAssembly === "object") {
  for (const form of forms) {
    form.action = form.dataset.search;
    form.querySelector('input[name="sites"]')?.remove();
  }
}

const results = document.querySelector("[data-search-results]");
const query = new URLSearchParams(location.search).get("q")?.trim();

if (results && query) {
  showResults(forms[forms.length - 1], results, query);
}

async function showResults(form, list, query) {
  const status = document.querySelector("[data-search-status]");
  for (const input of document.querySelectorAll('input[name="q"]')) {
    input.value = query;
  }
  status.textContent = status.dataset.searching;
  try {
    const pagefind = await import(form.dataset.pagefind + "pagefind.js");
    await pagefind.options({ baseUrl: form.dataset.base });
    const search = await pagefind.search(query);
    const pages = await Promise.all(search.results.slice(0, 30).map((result) => result.data()));
    const message = pages.length ? status.dataset.found : status.dataset.none;
    status.textContent = message.replace("{count}", search.results.length).replace("{query}", query);
    for (const page of pages) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = page.url;
      link.textContent = page.meta.title;
      const excerpt = document.createElement("p");
      excerpt.innerHTML = page.excerpt;
      item.append(link, excerpt);
      list.append(item);
    }
  } catch {
    const fallback = new URL("https://duckduckgo.com/");
    fallback.searchParams.set("q", query);
    fallback.searchParams.set("sites", form.dataset.sites);
    location.replace(fallback);
  }
}
