const units = [
    { code: "A-03-37", type: "Studio", view: "Mountain", interior: "Kosongan AC", rental: "Harian", rentalColor: "amber", available: true, price: "Rp 300.000", priceValue: 300000, period: "per malam" },
    { code: "A-11-62", type: "2BR", view: "Sky Garden", interior: "Furnished", rental: "Bulanan", rentalColor: "green", available: false, price: "Rp 3.500.000", priceValue: 3500000, period: "per bulan" },
    { code: "A-26-21", type: "Studio", view: "Pool", interior: "Kosongan", rental: "Tahunan", rentalColor: "blue", available: false, price: "Rp 12.500.000", priceValue: 12500000, period: "per tahun" },
    { code: "A-26-35", type: "Studio", view: "Pool", interior: "Furnished", rental: "Flexible", rentalColor: "purple", available: true, price: "Rp 350.000", priceValue: 350000, period: "per malam" },
    { code: "A-26-61", type: "2BR", view: "City", interior: "Furnished", rental: "Harian", rentalColor: "amber", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-05-36", type: "3BR", view: "Sea", interior: "Kosongan AC", rental: "Harian", rentalColor: "amber", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-06-09", type: "Studio", view: "Mountain", interior: "Semi Furnished", rental: "Harian", rentalColor: "amber", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-12-29", type: "Studio", view: "Mountain", interior: "Kosongan", rental: "Bulanan", rentalColor: "green", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-15-29", type: "Studio", view: "Mountain", interior: "Kosongan AC", rental: "Harian", rentalColor: "amber", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-17-29", type: "Studio", view: "Mountain", interior: "Kosongan AC", rental: "Harian", rentalColor: "amber", available: false, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-19-30", type: "Studio", view: "Mountain", interior: "Kosongan AC", rental: "Harian", rentalColor: "amber", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-20-20", type: "Studio", view: "Pool", interior: "Kosongan", rental: "Bulanan", rentalColor: "green", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-25-30", type: "Studio", view: "Mountain", interior: "Kosongan AC", rental: "Harian", rentalColor: "amber", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-26-21", type: "Studio", view: "Pool", interior: "Kosongan AC", rental: "Harian", rentalColor: "amber", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-27-32", type: "2BR", view: "Sea", interior: "Furnished", rental: "Bulanan", rentalColor: "green", available: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" }
];

const rentalStyles = {
    amber: { bg: "#fff8e1", text: "#b45309" },
    green: { bg: "#e8f5e8", text: "#02770a" },
    blue: { bg: "#e3f2fd", text: "#1565c0" },
    purple: { bg: "#f3e5f5", text: "#7b1fa2" }
};

const state = {
    searchQuery: "",
    sortKey: "code",
    sortDirection: "asc",
    viewMode: "table"
};

const tbody = document.getElementById("units-table");
const cardsContainer = document.getElementById("units-cards");
const searchInput = document.getElementById("search-input");
const searchStatus = document.getElementById("search-status");
const resetButton = document.getElementById("reset-table");
const visibleCount = document.getElementById("visible-count");
const sortSummary = document.getElementById("sort-summary");
const emptyState = document.getElementById("empty-state");
const availableCount = document.getElementById("available-count");
const totalCount = document.getElementById("total-count");
const sortableHeaders = [...document.querySelectorAll(".sortable-header")];
const sortIndicators = [...document.querySelectorAll(".sort-indicator")];
const cardViewBtn = document.getElementById("card-view-btn");
const tableViewBtn = document.getElementById("table-view-btn");
const tableView = document.getElementById("table-view");
const cardView = document.getElementById("card-view");
const viewTitle = document.getElementById("view-title");
const viewDescription = document.getElementById("view-description");
let searchDebounceId = null;

function getFilteredSortedUnits() {
    const query = state.searchQuery.trim().toLowerCase();
    const rows = units.filter((unit) => {
        if (!query) return true;
        return [
            unit.code,
            unit.type,
            unit.view,
            unit.interior,
            unit.rental,
            unit.available ? "tersedia" : "tidak"
        ].join(" ").toLowerCase().includes(query);
    });

    rows.sort((a, b) => {
        let comparison = 0;
        if (state.sortKey === "priceValue") comparison = a.priceValue - b.priceValue;
        else if (state.sortKey === "available") comparison = Number(a.available) - Number(b.available);
        else comparison = String(a[state.sortKey]).localeCompare(String(b[state.sortKey]));
        return state.sortDirection === "asc" ? comparison : -comparison;
    });

    return rows;
}

function renderTable(rows) {
    tbody.innerHTML = rows.map((unit) => {
        const rental = rentalStyles[unit.rentalColor];
        return `
            <tr class="border-b transition hover:bg-[#F0FAF0]" style="border-color:#D4EDD4;">
                <td class="px-5 py-3.5 font-semibold" style="color:#111111;">${unit.code}</td>
                <td class="px-5 py-3.5 text-sm" style="color:#333;">${unit.type}</td>
                <td class="px-5 py-3.5 text-sm" style="color:#333;">${unit.view}</td>
                <td class="px-5 py-3.5 text-sm" style="color:#333;">${unit.interior}</td>
                <td class="px-5 py-3.5">
                    <span class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold" style="background:${rental.bg}; color:${rental.text};">${unit.rental}</span>
                </td>
                <td class="px-5 py-3.5">
                    <span class="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold" style="background:${unit.available ? "#dcfce7" : "#f3f4f6"}; color:${unit.available ? "#166534" : "#374151"};">
                        <span class="h-2 w-2 rounded-full" style="background:${unit.available ? "#22c55e" : "#9ca3af"};"></span>
                        ${unit.available ? "Tersedia" : "Tidak"}
                    </span>
                </td>
                <td class="px-5 py-3.5 font-semibold" style="color:#02770A;">
                    ${unit.price} <span class="text-[10px] font-normal opacity-80">${unit.period}</span>
                </td>
                <td class="px-5 py-3.5">
                    <a href="#" class="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-white" style="background:#039509;">
                        <i class="fas fa-eye text-[10px]"></i> Detail
                    </a>
                </td>
            </tr>
        `;
    }).join("");
}

function renderCards(rows) {
    cardsContainer.innerHTML = rows.map((unit) => {
        const rental = rentalStyles[unit.rentalColor];
        return `
            <article class="rounded-2xl border bg-white p-4 shadow-[0_10px_30px_rgba(3,149,9,0.06)]" style="border-color:#D4EDD4;">
                <div class="flex items-start justify-between gap-3">
                    <div>
                        <p class="text-lg font-bold" style="color:#111111;">${unit.code}</p>
                        <p class="mt-1 text-xs" style="color:#666666;">${unit.type} • ${unit.view}</p>
                    </div>
                    <span class="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold" style="background:${unit.available ? "#dcfce7" : "#f3f4f6"}; color:${unit.available ? "#166534" : "#374151"};">
                        <span class="h-2 w-2 rounded-full" style="background:${unit.available ? "#22c55e" : "#9ca3af"};"></span>
                        ${unit.available ? "Tersedia" : "Tidak"}
                    </span>
                </div>
                <div class="mt-4 space-y-3">
                    <div class="rounded-xl px-3 py-2" style="background:#f8fff8;">
                        <p class="text-[11px] font-semibold uppercase tracking-[0.16em]" style="color:#666666;">Interior</p>
                        <p class="mt-1 text-sm font-medium">${unit.interior}</p>
                    </div>
                    <div class="flex items-center justify-between gap-3">
                        <span class="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold" style="background:${rental.bg}; color:${rental.text};">${unit.rental}</span>
                        <div class="text-right">
                            <p class="text-sm font-bold" style="color:#02770A;">${unit.price}</p>
                            <p class="text-[11px]" style="color:#666666;">${unit.period}</p>
                        </div>
                    </div>
                    <a href="#" class="inline-flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-white" style="background:#039509;">
                        <i class="fas fa-eye text-xs"></i>
                        Detail Unit
                    </a>
                </div>
            </article>
        `;
    }).join("");
}

function renderMeta(rows) {
    visibleCount.innerHTML = `<i class="fas fa-list text-[9px]"></i><span>${rows.length} hasil</span>`;
    sortSummary.innerHTML = `<i class="fas fa-arrow-down-short-wide text-[9px]"></i><span>${state.sortKey} (${state.sortDirection.toUpperCase()})</span>`;
    availableCount.textContent = rows.filter((unit) => unit.available).length;
    totalCount.textContent = rows.length;
}

function updateSortIndicators() {
    sortIndicators.forEach((indicator) => {
        indicator.textContent = "↕";
        indicator.style.color = "#6b7280";
    });
    const activeIndicator = document.querySelector(`[data-indicator="${state.sortKey}"]`);
    if (activeIndicator) {
        activeIndicator.textContent = state.sortDirection === "asc" ? "↑" : "↓";
        activeIndicator.style.color = "#039509";
    }
}

function updateViewMode() {
    const isTable = state.viewMode === "table";
    tableView.classList.toggle("hidden", !isTable);
    cardView.classList.toggle("hidden", isTable);

    tableViewBtn.style.background = isTable ? "#039509" : "transparent";
    tableViewBtn.style.color = isTable ? "#fff" : "#333";
    cardViewBtn.style.background = isTable ? "transparent" : "#039509";
    cardViewBtn.style.color = isTable ? "#333" : "#fff";

    viewTitle.textContent = isTable ? "Tabel Ketersediaan Unit" : "Card Ketersediaan Unit";
    viewDescription.textContent = isTable
        ? "Klik header kolom untuk sorting. Search live akan langsung menyaring hasil tabel."
        : "Search live dan sorting tetap aktif, ditampilkan dalam format card yang lebih mudah dipindai.";
}

function render() {
    const rows = getFilteredSortedUnits();
    renderTable(rows);
    renderCards(rows);
    renderMeta(rows);
    updateSortIndicators();
    updateViewMode();
    emptyState.classList.toggle("hidden", rows.length !== 0);
}

searchInput.addEventListener("input", (event) => {
    const nextQuery = event.target.value;
    searchStatus.innerHTML = `<i class="fas fa-spinner fa-spin"></i><span>Mencari...</span>`;
    if (searchDebounceId) clearTimeout(searchDebounceId);
    searchDebounceId = setTimeout(() => {
        state.searchQuery = nextQuery;
        render();
        searchStatus.innerHTML = state.searchQuery
            ? `<i class="fas fa-check-circle"></i><span>Hasil untuk "${state.searchQuery}"</span>`
            : `<i class="fas fa-bolt"></i><span>Siap mencari</span>`;
    }, 250);
});

resetButton.addEventListener("click", () => {
    if (searchDebounceId) clearTimeout(searchDebounceId);
    state.searchQuery = "";
    state.sortKey = "code";
    state.sortDirection = "asc";
    state.viewMode = "table";
    searchInput.value = "";
    searchStatus.innerHTML = `<i class="fas fa-bolt"></i><span>Siap mencari</span>`;
    render();
});

cardViewBtn.addEventListener("click", () => {
    state.viewMode = "card";
    render();
});

tableViewBtn.addEventListener("click", () => {
    state.viewMode = "table";
    render();
});

sortableHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const key = header.dataset.sortKey;
        if (state.sortKey === key) state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
        else {
            state.sortKey = key;
            state.sortDirection = key === "priceValue" || key === "available" ? "desc" : "asc";
        }
        render();
    });
});

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta", hour12: false });
    document.getElementById("date").textContent = now.toLocaleDateString("id-ID", { timeZone: "Asia/Jakarta", weekday: "short", day: "numeric", month: "short" });
}

updateClock();
render();
setInterval(updateClock, 1000);
