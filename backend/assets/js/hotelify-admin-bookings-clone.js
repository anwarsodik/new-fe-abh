const bookings = [
    { booking: "INV-26-0008-5761", unit: "A-03-37", guest: "Justina Lambert", checkIn: "2026-03-05", checkOut: "2026-03-07", total: "Rp 604.000", totalValue: 604000, status: "confirmed" },
    { booking: "INV-26-0007-f11f", unit: "B-06-09", guest: "Leslie Barrett", checkIn: "2026-03-04", checkOut: "2026-03-05", total: "Rp 505.000", totalValue: 505000, status: "checked out" },
    { booking: "INV-26-0006-dfb3", unit: "A-26-35", guest: "Aristotle Carlson", checkIn: "2026-03-03", checkOut: "2026-03-04", total: "Rp 350.000", totalValue: 350000, status: "checked in" },
    { booking: "INV-26-0005-bc0d", unit: "A-26-21", guest: "Hu Cummings", checkIn: "2026-03-03", checkOut: "2027-03-03", total: "Rp 12.500.002", totalValue: 12500002, status: "checked in" },
    { booking: "INV-26-0004-c74f", unit: "A-11-62", guest: "Gisela Mcclure", checkIn: "2026-05-01", checkOut: "2026-06-01", total: "Rp 3.616.667", totalValue: 3616667, status: "confirmed" },
    { booking: "INV-26-0003-9c82", unit: "A-03-37", guest: "Rinah Parsons", checkIn: "2026-03-03", checkOut: "2026-03-04", total: "Rp 300.000", totalValue: 300000, status: "checked out" },
    { booking: "INV-26-0002-7a85", unit: "A-11-62", guest: "anwar", checkIn: "2026-03-02", checkOut: "2026-04-02", total: "Rp 15.500.000", totalValue: 15500000, status: "checked in" },
    { booking: "INV-26-0001-c493", unit: "A-11-62", guest: "anwar", checkIn: "2026-02-27", checkOut: "2026-02-28", total: "Rp 450.000", totalValue: 450000, status: "pending payment" },
    { booking: "INV-2026--9223372036854775808", unit: "A-03-37", guest: "Marny Leach", checkIn: "2026-02-27", checkOut: "2026-02-28", total: "Rp 700.085", totalValue: 700085, status: "checked out" },
    { booking: "INV-2026-2026202620260004", unit: "A-03-37", guest: "Kristen Rich", checkIn: "2026-02-27", checkOut: "2026-02-28", total: "Rp 790.000", totalValue: 790000, status: "checked out" },
    { booking: "INV-2026-202620260003", unit: "A-11-62", guest: "Quintessa Ellis", checkIn: "2026-02-27", checkOut: "2026-02-28", total: "Rp 500.012", totalValue: 500012, status: "checked out" },
    { booking: "INV-2026-20260002", unit: "A-26-61", guest: "Unity Tate", checkIn: "2026-02-27", checkOut: "2026-02-28", total: "Rp 500.099", totalValue: 500099, status: "pending payment" },
    { booking: "INV-2026-0001", unit: "B-17-29", guest: "Georgia Donaldson", checkIn: "2026-02-27", checkOut: "2026-03-27", total: "Rp 12.600.085", totalValue: 12600085, status: "checked in" }
];

const state = {
    query: "",
    status: "",
    startDate: "",
    endDate: "",
    sortKey: "booking",
    sortDirection: "asc"
};

const tableBody = document.getElementById("bookings-table");
const searchInput = document.getElementById("search-input");
const statusFilter = document.getElementById("status-filter");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const filterForm = document.getElementById("filter-form");
const resetButton = document.getElementById("reset-table");
const resultCount = document.getElementById("result-count");
const sortSummary = document.getElementById("sort-summary");
const emptyState = document.getElementById("empty-state");
const sortableHeaders = [...document.querySelectorAll(".sortable-header")];
const sortIndicators = [...document.querySelectorAll(".sort-indicator")];

function parseDate(value) {
    return value ? new Date(`${value}T00:00:00`) : null;
}

function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

function getStatusStyle(status) {
    if (status === "confirmed") return { bg: "#C8EBC8", text: "#02770A", border: "#B8DDB8", icon: "fa-check-circle" };
    if (status === "checked in") return { bg: "#E8F5E8", text: "#02770A", border: "#D4EDD4", icon: "fa-sign-in-alt" };
    if (status === "checked out") return { bg: "#F4FBF4", text: "#333333", border: "#D4EDD4", icon: "fa-sign-out-alt" };
    if (status === "pending payment") return { bg: "#fff8e1", text: "#DD8B26", border: "#ffe0b2", icon: "fa-clock" };
    return { bg: "#f3f4f6", text: "#374151", border: "#d1d5db", icon: "fa-circle" };
}

function getRows() {
    const query = state.query.trim().toLowerCase();
    const startDate = parseDate(state.startDate);
    const endDate = parseDate(state.endDate);
    const rows = bookings.filter((row) => {
        const queryMatch = !query || [row.booking, row.unit, row.guest].join(" ").toLowerCase().includes(query);
        const statusMatch = !state.status || row.status === state.status;
        const rowStart = parseDate(row.checkIn);
        const rowEnd = parseDate(row.checkOut);
        const rangeMatch = (!startDate || rowEnd >= startDate) && (!endDate || rowStart <= endDate);
        return queryMatch && statusMatch && rangeMatch;
    });

    rows.sort((a, b) => {
        let comparison = 0;
        if (state.sortKey === "totalValue") comparison = a.totalValue - b.totalValue;
        else if (state.sortKey === "checkIn") comparison = new Date(a.checkIn) - new Date(b.checkIn);
        else comparison = String(a[state.sortKey]).localeCompare(String(b[state.sortKey]));
        return state.sortDirection === "asc" ? comparison : -comparison;
    });

    return rows;
}

function renderTable(rows) {
    tableBody.innerHTML = rows.map((row) => {
        const status = getStatusStyle(row.status);
        return `
            <tr class="transition-colors last:border-0" style="border-bottom:1px solid #D4EDD4;">
                <td class="px-5 py-3.5"><span class="text-sm font-semibold" style="color:#039509;">${row.booking}</span></td>
                <td class="px-5 py-3.5 text-sm" style="color:#111111;">${row.unit}</td>
                <td class="px-5 py-3.5 text-sm" style="color:#111111;">${row.guest}</td>
                <td class="px-5 py-3.5 text-sm" style="color:#333333;">
                    <div class="flex items-center gap-1.5"><i class="fas fa-sign-in-alt text-[10px]" style="color:#039509;"></i>${formatDate(row.checkIn)}</div>
                    <div class="mt-0.5 flex items-center gap-1.5"><i class="fas fa-sign-out-alt text-[10px]" style="color:#666666;"></i>${formatDate(row.checkOut)}</div>
                </td>
                <td class="px-5 py-3.5 text-sm font-semibold" style="color:#111111;">${row.total}</td>
                <td class="px-5 py-3.5">
                    <span class="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold" style="background:${status.bg}; color:${status.text}; border-color:${status.border};">
                        <i class="fas ${status.icon} text-[9px]"></i>${row.status}
                    </span>
                </td>
                <td class="px-5 py-3.5">
                    <a href="#" class="inline-flex items-center gap-1 text-xs font-semibold" style="color:#039509;">Detail <i class="fas fa-arrow-right text-[9px]"></i></a>
                </td>
            </tr>
        `;
    }).join("");
}

function renderMeta(rows) {
    const labels = {
        booking: "Booking",
        unit: "Unit",
        guest: "Tamu",
        checkIn: "Check-in",
        totalValue: "Total",
        status: "Status"
    };
    resultCount.innerHTML = `<i class="fas fa-list text-[9px]"></i><span>${rows.length} hasil</span>`;
    sortSummary.innerHTML = `<i class="fas fa-arrow-down-short-wide text-[9px]"></i><span>${labels[state.sortKey]} (${state.sortDirection.toUpperCase()})</span>`;
}

function updateSortIndicators() {
    sortIndicators.forEach((indicator) => {
        indicator.textContent = "↕";
        indicator.style.color = "#6b7280";
    });
    const active = document.querySelector(`[data-indicator="${state.sortKey}"]`);
    if (active) {
        active.textContent = state.sortDirection === "asc" ? "↑" : "↓";
        active.style.color = "#039509";
    }
}

function render() {
    const rows = getRows();
    renderTable(rows);
    renderMeta(rows);
    updateSortIndicators();
    emptyState.classList.toggle("hidden", rows.length !== 0);
}

filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = searchInput.value;
    state.status = statusFilter.value;
    state.startDate = startDateInput.value;
    state.endDate = endDateInput.value;
    render();
});

resetButton.addEventListener("click", () => {
    state.query = "";
    state.status = "";
    state.startDate = "";
    state.endDate = "";
    state.sortKey = "booking";
    state.sortDirection = "asc";
    searchInput.value = "";
    statusFilter.value = "";
    startDateInput.value = "";
    endDateInput.value = "";
    render();
});

sortableHeaders.forEach((header) => {
    header.addEventListener("click", () => {
        const key = header.dataset.sortKey;
        if (state.sortKey === key) {
            state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
        } else {
            state.sortKey = key;
            state.sortDirection = key === "totalValue" ? "desc" : "asc";
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
