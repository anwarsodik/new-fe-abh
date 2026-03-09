const units = [
    { code: "A-03-37", occupiedYear: 2 },
    { code: "A-11-62", occupiedYear: 62 },
    { code: "A-26-21", occupiedYear: 304 },
    { code: "A-26-35", occupiedYear: 1 },
    { code: "A-26-61", occupiedYear: 0 },
    { code: "B-05-36", occupiedYear: 0 },
    { code: "B-06-09", occupiedYear: 1 },
    { code: "B-12-29", occupiedYear: 0 },
    { code: "B-15-29", occupiedYear: 0 },
    { code: "B-17-29", occupiedYear: 0 },
    { code: "B-19-30", occupiedYear: 0 },
    { code: "B-20-20", occupiedYear: 0 },
    { code: "B-25-30", occupiedYear: 0 },
    { code: "B-26-21", occupiedYear: 0 },
    { code: "B-27-32", occupiedYear: 0 }
];

const form = document.getElementById("filter-form");
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const startDateInput = document.getElementById("start-date");
const endDateInput = document.getElementById("end-date");
const periodText = document.getElementById("period-text");
const totalOccupied = document.getElementById("total-occupied");
const overallRate = document.getElementById("overall-rate");
const table = document.getElementById("occupancy-table");

function daysBetween(start, end) {
    const ms = end - start;
    return Math.max(1, Math.floor(ms / 86400000) + 1);
}

function formatDate(date) {
    return date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "short",
        day: "numeric"
    });
}

function getRateBadge(rate) {
    if (rate >= 70) return { bg: "#d1fae5", text: "#065f46" };
    if (rate >= 20) return { bg: "#e8f5e9", text: "#2e7d32" };
    return { bg: "#f3f4f6", text: "#374151" };
}

function render() {
    let start = new Date(startDateInput.value || `${yearInput.value}-01-01`);
    let end = new Date(endDateInput.value || `${yearInput.value}-12-31`);

    if (monthInput.value) {
        const year = Number(yearInput.value);
        const month = Number(monthInput.value) - 1;
        const monthStart = new Date(year, month, 1);
        const monthEnd = new Date(year, month + 1, 0);
        if (!startDateInput.value) start = monthStart;
        if (!endDateInput.value) end = monthEnd;
    }

    if (end < start) {
        const tmp = start;
        start = end;
        end = tmp;
    }

    const periodDays = daysBetween(start, end);
    const yearBaseDays = 365;

    const rows = units.map((unit) => {
        const scaledOccupied = Math.min(periodDays, Math.round((unit.occupiedYear / yearBaseDays) * periodDays));
        const rate = periodDays ? (scaledOccupied / periodDays) * 100 : 0;
        return {
            ...unit,
            periodDays,
            occupiedDays: scaledOccupied,
            rate
        };
    });

    const totalOcc = rows.reduce((sum, row) => sum + row.occupiedDays, 0);
    const overall = rows.length ? (totalOcc / (rows.length * periodDays)) * 100 : 0;

    periodText.textContent = `Period: ${formatDate(start)} - ${formatDate(end)} · ${periodDays} hari`;
    totalOccupied.textContent = totalOcc;
    overallRate.textContent = `${overall.toFixed(1)}%`;

    table.innerHTML = rows.map((row) => {
        const badge = getRateBadge(row.rate);
        return `
            <tr style="border-bottom:1px solid #f5faf5;">
                <td class="px-5 py-3.5">
                    <a href="#" class="text-sm font-semibold" style="color:#039509;">${row.code}</a>
                    <span class="block mt-0.5 text-[10px]" style="color:#4a7a4c;">Klik untuk detail kalender</span>
                </td>
                <td class="px-5 py-3.5 text-sm" style="color:#333;">${row.periodDays}</td>
                <td class="px-5 py-3.5 text-sm font-semibold" style="color:#1e2d1f;">${row.occupiedDays}</td>
                <td class="px-5 py-3.5">
                    <span class="inline-flex rounded-full px-2.5 py-0.5 text-[11px] font-semibold" style="background:${badge.bg}; color:${badge.text}; border:1px solid rgba(0,0,0,0.05);">${row.rate.toFixed(1)}%</span>
                </td>
            </tr>
        `;
    }).join("");
}

yearInput.addEventListener("change", () => {
    if (!startDateInput.value) startDateInput.value = `${yearInput.value}-01-01`;
    if (!endDateInput.value) endDateInput.value = `${yearInput.value}-12-31`;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
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
