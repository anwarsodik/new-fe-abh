const units = [
    { code: "A-03-37", type: "Studio", view: "Mountain", interior: "Kosongan AC", owner: "BED DEBT", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 300.000", priceValue: 300000, period: "per malam" },
    { code: "A-11-62", type: "2BR", view: "Sky Garden", interior: "Furnished", owner: "BED DEBT", rental: "Bulanan", rentalColor: "green", active: true, price: "Rp 3.500.000", priceValue: 3500000, period: "per bulan" },
    { code: "A-26-21", type: "Studio", view: "Pool", interior: "Kosongan", owner: "UNSOLD-PPA", rental: "Tahunan", rentalColor: "blue", active: true, price: "Rp 12.500.000", priceValue: 12500000, period: "per tahun" },
    { code: "A-26-35", type: "Studio", view: "Pool", interior: "Furnished", owner: "UNSOLD-TGA", rental: "Flexible", rentalColor: "purple", active: true, price: "Rp 350.000", priceValue: 350000, period: "per malam" },
    { code: "A-26-61", type: "2BR", view: "City", interior: "Furnished", owner: "BED DEBT", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-05-36", type: "3BR", view: "Sea", interior: "Kosongan AC", owner: "BED DEBT", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-06-09", type: "Studio", view: "Mountain", interior: "Semi Furnished", owner: "BED DEBT", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-12-29", type: "Studio", view: "Mountain", interior: "Kosongan", owner: "UNSOLD-PPA", rental: "Bulanan", rentalColor: "green", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-15-29", type: "Studio", view: "Mountain", interior: "Kosongan AC", owner: "UNSOLD-PPA", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-19-30", type: "Studio", view: "Mountain", interior: "Kosongan AC", owner: "UNSOLD-PPA", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-20-20", type: "Studio", view: "Pool", interior: "Kosongan", owner: "BED DEBT", rental: "Bulanan", rentalColor: "green", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-25-30", type: "Studio", view: "Mountain", interior: "Kosongan AC", owner: "UNSOLD-PPA", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-26-21", type: "Studio", view: "Pool", interior: "Kosongan AC", owner: "UNSOLD-PPA", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-27-32", type: "2BR", view: "Sea", interior: "Furnished", owner: "UNSOLD-TGA", rental: "Bulanan", rentalColor: "green", active: true, price: "Rp 500.000", priceValue: 500000, period: "per malam" },
    { code: "B-28-08", type: "Studio", view: "City", interior: "Kosongan", owner: "BED DEBT", rental: "Harian", rentalColor: "amber", active: true, price: "Rp 475.000", priceValue: 475000, period: "per malam" }
];

const rentalStyles = {
    amber: { bg: "#fff8e1", text: "#dd8b26", border: "#ffe0b2" },
    green: { bg: "#e8f5e8", text: "#02770a", border: "#d4edd4" },
    blue: { bg: "#e3f2fd", text: "#1565c0", border: "#bbdefb" },
    purple: { bg: "#f3e5f5", text: "#7b1fa2", border: "#e1bee7" }
};

const state = {
    searchQuery: "",
    sortKey: "code",
    sortDirection: "asc",
    compact: false,
};

const tbody = document.getElementById("units-table");
const searchInput = document.getElementById("search-input");
const searchStatus = document.getElementById("search-status");
const visibleCount = document.getElementById("visible-count");
const activeSortBadge = document.getElementById("active-sort-badge");
const emptyState = document.getElementById("empty-state");
const resetButton = document.getElementById("reset-sorting");
const compactToggle = document.getElementById("compact-toggle");
const sortSummary = document.getElementById("sort-summary");
const sortableHeaders = [...document.querySelectorAll(".sortable-header")];
const sortIndicators = [...document.querySelectorAll(".sort-indicator")];
let searchDebounceId = null;

function getSortedUnits() {
    const query = state.searchQuery.trim().toLowerCase();
    const rows = units.filter((unit) => {
        if (!query) return true;
        const haystack = [
            unit.code,
            unit.type,
            unit.view,
            unit.interior,
            unit.owner,
            unit.rental,
            unit.period
        ].join(" ").toLowerCase();
        return haystack.includes(query);
    });
    rows.sort((a, b) => {
        const key = state.sortKey;
        let comparison = 0;

        if (key === "priceValue") {
            comparison = a.priceValue - b.priceValue;
        } else if (key === "active") {
            comparison = Number(a.active) - Number(b.active);
        } else {
            comparison = String(a[key]).localeCompare(String(b[key]));
        }

        return state.sortDirection === "asc" ? comparison : -comparison;
    });

    return rows;
}

function renderTable(rows) {
    const py = state.compact ? "py-2.5" : "py-3.5";

    tbody.innerHTML = rows.map((unit) => {
        const rental = rentalStyles[unit.rentalColor];
        return `
            <tr class="border-b transition hover:bg-[#f0faf0]" style="border-color: var(--admin-border);">
                <td class="px-5 ${py}">
                    <div class="flex items-center gap-2.5">
                        <div class="flex h-7 w-7 items-center justify-center rounded-lg text-white" style="background: var(--admin-primary);">
                            <i class="fas fa-building text-[10px]"></i>
                        </div>
                        <div>
                            <p class="text-sm font-semibold">${unit.code}</p>
                            <p class="text-[11px]" style="color: var(--admin-text-muted);">${unit.period}</p>
                        </div>
                    </div>
                </td>
                <td class="px-5 ${py} text-xs" style="color: var(--admin-text-secondary);">${unit.type}</td>
                <td class="px-5 ${py} text-xs" style="color: var(--admin-text-secondary);">${unit.view}</td>
                <td class="px-5 ${py} text-xs" style="color: var(--admin-text-secondary);">${unit.interior}</td>
                <td class="px-5 ${py}">
                    <div class="text-xs font-semibold" style="color: var(--admin-text-secondary);">${unit.owner}</div>
                    <div class="text-[11px]" style="color: var(--admin-text-muted);">${unit.active ? "Siap ditawarkan" : "Nonaktif"}</div>
                </td>
                <td class="px-5 ${py}">
                    <span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold" style="background:${rental.bg}; color:${rental.text}; border-color:${rental.border};">
                        <span class="status-dot" style="background:${rental.text};"></span>
                        ${unit.rental}
                    </span>
                </td>
                <td class="px-5 ${py}">
                    <span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold" style="background:#c8ebc8; color:#02770a; border-color:#b8ddb8;">
                        <i class="fas fa-circle-check text-[9px]"></i>
                        ${unit.active ? "Ya" : "Tidak"}
                    </span>
                </td>
                <td class="px-5 ${py} font-semibold" style="color: var(--admin-primary-pressed);">
                    ${unit.price}
                    <div class="text-[11px] font-medium" style="color: var(--admin-text-muted);">${unit.period}</div>
                </td>
                <td class="border-l px-5 ${py}" style="background: rgba(255,255,255,0.45); border-color: var(--admin-border);">
                    <div class="flex flex-wrap items-center gap-2">
                        <a href="#" class="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold" style="background:#e8f5e8; color:#02770a; border-color:#d4edd4;">
                            <i class="fas fa-eye text-[10px]"></i>
                            Detail
                        </a>
                        <a href="#" class="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-white" style="background: var(--admin-primary);">
                            <i class="fas fa-pen text-[10px]"></i>
                            Edit
                        </a>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

function renderStats(rows) {
    document.getElementById("stat-total").textContent = rows.length;
    document.getElementById("stat-daily").textContent = rows.filter((unit) => unit.rental === "Harian").length;
    document.getElementById("stat-monthly").textContent = rows.filter((unit) => unit.rental === "Bulanan").length;
    document.getElementById("stat-yearly").textContent = rows.filter((unit) => unit.rental === "Tahunan").length;
    document.getElementById("stat-flexible").textContent = rows.filter((unit) => unit.rental === "Flexible").length;
}

function renderSummary(rows) {
    const labels = {
        code: "Unit",
        type: "Tipe",
        view: "View",
        interior: "Interior",
        owner: "Pemilik",
        rental: "Status Sewa",
        active: "Aktif",
        priceValue: "Harga"
    };
    const directionLabel = state.sortDirection === "asc" ? "A-Z / rendah-ke-tinggi" : "Z-A / tinggi-ke-rendah";
    visibleCount.innerHTML = `<i class="fas fa-list text-[9px]"></i><span>${rows.length} hasil</span>`;
    activeSortBadge.innerHTML = `<i class="fas fa-arrow-down-short-wide text-[9px]"></i><span>${labels[state.sortKey]} (${state.sortDirection.toUpperCase()})</span>`;
    sortSummary.textContent = state.searchQuery
        ? `Urutan: ${labels[state.sortKey]} (${directionLabel}) • Search "${state.searchQuery}"`
        : `Urutan: ${labels[state.sortKey]} (${directionLabel})`;
}

function updateSortIndicators() {
    sortIndicators.forEach((indicator) => {
        indicator.textContent = "↕";
        indicator.style.color = "var(--admin-text-muted)";
    });

    const activeIndicator = document.querySelector(`[data-indicator="${state.sortKey}"]`);
    if (activeIndicator) {
        activeIndicator.textContent = state.sortDirection === "asc" ? "↑" : "↓";
        activeIndicator.style.color = "var(--admin-primary)";
    }

    sortableHeaders.forEach((header) => {
        const active = header.dataset.sortKey === state.sortKey;
        header.style.color = active ? "var(--admin-primary-pressed)" : "var(--admin-text-secondary)";
    });
}

function render() {
    const rows = getSortedUnits();
    renderTable(rows);
    renderStats(rows);
    renderSummary(rows);
    emptyState.classList.toggle("hidden", rows.length !== 0);
    updateSortIndicators();
    compactToggle.classList.toggle("chip-active", state.compact);
    compactToggle.style.borderColor = state.compact ? "var(--admin-primary)" : "var(--admin-border)";
    compactToggle.style.color = state.compact ? "#fff" : "var(--admin-primary-pressed)";
}

compactToggle.addEventListener("click", () => {
    state.compact = !state.compact;
    render();
});

searchInput.addEventListener("input", (event) => {
    const nextQuery = event.target.value;
    searchStatus.innerHTML = `<i class="fas fa-spinner fa-spin"></i><span>Mencari...</span>`;

    if (searchDebounceId) {
        clearTimeout(searchDebounceId);
    }

    searchDebounceId = setTimeout(() => {
        state.searchQuery = nextQuery;
        render();
        searchStatus.innerHTML = state.searchQuery
            ? `<i class="fas fa-check-circle"></i><span>Hasil untuk "${state.searchQuery}"</span>`
            : `<i class="fas fa-bolt"></i><span>Siap mencari</span>`;
    }, 250);
});

resetButton.addEventListener("click", () => {
    if (searchDebounceId) {
        clearTimeout(searchDebounceId);
    }
    state.searchQuery = "";
    state.sortKey = "code";
    state.sortDirection = "asc";
    searchInput.value = "";
    searchStatus.innerHTML = `<i class="fas fa-bolt"></i><span>Siap mencari</span>`;
    render();
});

sortableHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const key = header.dataset.sortKey;
        if (state.sortKey === key) {
            state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
        } else {
            state.sortKey = key;
            state.sortDirection = key === "priceValue" ? "desc" : "asc";
        }
        render();
    });
});

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour12: false
    });
    document.getElementById("date").textContent = now.toLocaleDateString("id-ID", {
        timeZone: "Asia/Jakarta",
        weekday: "short",
        day: "numeric",
        month: "short"
    });
}

updateClock();
render();
setInterval(updateClock, 1000);
