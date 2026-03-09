const sidebarPages = {
    dashboard: "hotelify-admin-dashboard-clone.html",
    bookings: "hotelify-admin-bookings-clone.html",
    checkins: "hotelify-admin-checkins-clone.html",
    checkouts: "hotelify-admin-checkouts-clone.html",
    activeTenants: "hotelify-admin-active-tenants-clone.html",
    occupancy: "hotelify-admin-report-occupancy-clone.html",
    finance: "hotelify-admin-report-finance-clone.html",
    topPerformers: "hotelify-admin-report-top-performers-clone.html",
    units: "hotelify-admin-units-clone.html",
    unitsAvailable: "hotelify-admin-units-available-clone.html",
    guests: "hotelify-admin-guests-clone.html",
    unitBaseRates: "hotelify-admin-unit-base-rates-clone.html",
    promos: "hotelify-admin-promos-clone.html",
    additionalPayments: "hotelify-admin-additional-payments-clone.html",
    invoice: "hotelify-admin-invoice-clone.html",
    transactionLogs: "hotelify-admin-transaction-logs-clone.html",
    activityLogs: "hotelify-admin-activity-logs-clone.html",
    checkinsLog: "hotelify-admin-checkins-log-clone.html",
    checkoutsLog: "hotelify-admin-checkouts-log-clone.html",
    unitPermissions: "hotelify-admin-unit-permissions-clone.html",
    userRole: "hotelify-admin-user-role-clone.html"
};

const sidebarConfig = [
    {
        type: "link",
        key: "dashboard",
        label: "Dashboard",
        icon: "fa-chart-line",
        href: sidebarPages.dashboard
    },
    {
        type: "section",
        title: "Booking",
        children: [
            { key: "bookings", label: "Daftar Booking", icon: "fa-list", href: sidebarPages.bookings },
            { key: "checkins", label: "Check-in", icon: "fa-sign-in-alt", href: sidebarPages.checkins },
            { key: "checkouts", label: "Check-out", icon: "fa-sign-out-alt", href: sidebarPages.checkouts },
            { key: "activeTenants", label: "Active Tenant", icon: "fa-bed", href: sidebarPages.activeTenants }
        ]
    },
    {
        type: "section",
        title: "Reports",
        children: [
            { key: "occupancy", label: "Occupancy", icon: "fa-bed", href: sidebarPages.occupancy },
            { key: "finance", label: "Finance", icon: "fa-wallet", href: sidebarPages.finance },
            { key: "topPerformers", label: "Top Performers", icon: "fa-trophy", href: sidebarPages.topPerformers }
        ]
    },
    {
        type: "links",
        title: "Master Data",
        children: [
            { key: "units", label: "Units", icon: "fa-door-open", href: sidebarPages.units },
            { key: "unitsAvailable", label: "Unit Tersedia", icon: "fa-key", href: sidebarPages.unitsAvailable },
            { key: "guests", label: "Guests", icon: "fa-users", href: sidebarPages.guests }
        ]
    },
    {
        type: "links",
        title: "Harga & Promo",
        children: [
            { key: "unitBaseRates", label: "Harga Dasar Unit", icon: "fa-tag", href: sidebarPages.unitBaseRates },
            { key: "promos", label: "Promo", icon: "fa-tag", href: sidebarPages.promos },
            { key: "additionalPayments", label: "Pajak & Biaya", icon: "fa-percent", href: sidebarPages.additionalPayments }
        ]
    },
    {
        type: "section",
        title: "Logs",
        children: [
            { key: "invoice", label: "Invoice", icon: "fa-file-invoice", href: sidebarPages.invoice },
            { key: "transactionLogs", label: "Transaction Logs", icon: "fa-receipt", href: sidebarPages.transactionLogs },
            { key: "activityLogs", label: "Activity Logs", icon: "fa-clock-rotate-left", href: sidebarPages.activityLogs },
            { key: "checkinsLog", label: "Check-in Log", icon: "fa-clipboard-list", href: sidebarPages.checkinsLog },
            { key: "checkoutsLog", label: "Check-out Log", icon: "fa-clipboard-check", href: sidebarPages.checkoutsLog }
        ]
    },
    {
        type: "links",
        title: "Pengaturan",
        children: [
            { key: "unitPermissions", label: "Unit Permission", icon: "fa-user-lock", href: sidebarPages.unitPermissions },
            { key: "userRole", label: "User & Role", icon: "fa-users-cog", href: sidebarPages.userRole }
        ]
    }
];

function renderTopLink(item, active) {
    const classes = active
        ? "nav-active flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
        : "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150";
    const style = active
        ? "background:rgba(255,255,255,0.2); color:#ffffff; font-weight:600;"
        : "color:rgba(255,255,255,0.9);";
    const hover = active
        ? ""
        : " onmouseover=\"this.style.background='#05B30B'; this.style.color='#ffffff';\" onmouseout=\"this.style.background=''; this.style.color='rgba(255,255,255,0.9)';\"";
    const dot = active
        ? '<span class="ml-auto w-1.5 h-1.5 rounded-full" style="background:rgba(255,255,255,0.9);"></span>'
        : "";
    const current = active ? ' aria-current="page"' : "";
    return `
        <a href="${item.href}" class="${classes}" style="${style}"${hover}${current}>
            <i class="fas ${item.icon} w-4 text-center text-xs" style="color:rgba(255,255,255,0.95);"></i>
            <span>${item.label}</span>
            ${dot}
        </a>
    `;
}

function renderCompactLink(item, active) {
    const style = active
        ? "color:#ffffff; background:rgba(255,255,255,0.2); font-weight:600;"
        : "color:rgba(255,255,255,0.9);";
    const hover = active
        ? ""
        : " onmouseover=\"this.style.background='#05B30B'; this.style.color='#ffffff';\" onmouseout=\"this.style.background=''; this.style.color='rgba(255,255,255,0.9)';\"";
    const current = active ? ' aria-current="page"' : "";
    return `
        <a href="${item.href}"
            class="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium transition-all duration-150"
            style="${style}"${hover}${current}>
            <i class="fas ${item.icon} w-3 text-center"></i> ${item.label}
        </a>
    `;
}

function renderSection(item, currentPage) {
    const isOpen = item.children.some((child) => child.key === currentPage);
    const children = item.children.map((child) => renderCompactLink(child, child.key === currentPage)).join("");
    const openAttr = isOpen ? " open" : "";
    return `
        <p class="px-3 pt-5 pb-1.5 text-[10px] font-bold uppercase tracking-widest" style="color:rgba(255,255,255,0.7);">${item.title}</p>
        <details class="group"${openAttr}>
            <summary
                class="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium cursor-pointer list-none select-none transition-all duration-150"
                style="color:rgba(255,255,255,0.9);"
                onmouseover="this.style.background='#05B30B'; this.style.color='#ffffff';"
                onmouseout="this.style.background=''; this.style.color='rgba(255,255,255,0.9)';">
                <i class="fas ${item.title === "Booking" ? "fa-calendar-check" : item.title === "Reports" ? "fa-chart-bar" : "fa-folder-open"} w-4 text-center text-xs" style="color:rgba(255,255,255,0.9);"></i>
                <span>${item.title === "Booking" ? "Manajemen Booking" : item.title}</span>
                <i class="fas fa-chevron-down ml-auto text-[10px] transition-transform duration-200 group-open:rotate-180" style="color:rgba(255,255,255,0.8);"></i>
            </summary>
            <div class="mt-0.5 ml-5 pl-3 space-y-0.5 pb-1" style="border-left: 2px solid rgba(255,255,255,0.2);">
                ${children}
            </div>
        </details>
    `;
}

function renderLinksSection(item, currentPage) {
    const children = item.children.map((child) => renderTopLink(child, child.key === currentPage)).join("");
    return `
        <p class="px-3 pt-5 pb-1.5 text-[10px] font-bold uppercase tracking-widest" style="color:rgba(255,255,255,0.7);">${item.title}</p>
        ${children}
    `;
}

function renderSidebar() {
    const root = document.getElementById("sidebar-root");
    if (!root) return;

    const currentPage = document.body.dataset.sidebarPage || "";
    const markup = sidebarConfig.map((item) => {
        if (item.type === "link") return renderTopLink(item, item.key === currentPage);
        if (item.type === "section") return renderSection(item, currentPage);
        return renderLinksSection(item, currentPage);
    }).join("");

    root.innerHTML = `
        <aside class="w-64 shrink-0 flex flex-col h-full overflow-hidden"
            style="background:#039509; border-right: 1px solid rgba(0,0,0,0.12); box-shadow: 2px 0 12px rgba(0,0,0,0.1);">
            <a href="${sidebarPages.dashboard}"
                class="shrink-0 flex items-center gap-3 px-5 py-4 transition-opacity hover:opacity-90"
                style="border-bottom: 1px solid rgba(255,255,255,0.15);">
                <div class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                    style="background: rgba(255,255,255,0.2);">
                    <i class="fas fa-building text-white text-sm"></i>
                </div>
                <div class="flex flex-col leading-tight">
                    <span class="text-sm font-bold tracking-tight" style="color:#ffffff;">BaleHinggil</span>
                    <span class="text-[10px] font-semibold uppercase tracking-widest" style="color:rgba(255,255,255,0.85);">admin panel</span>
                </div>
            </a>

            <nav class="flex-1 min-h-0 overflow-y-auto px-3 py-3 space-y-0.5">
                ${markup}
            </nav>
        </aside>
    `;
}

renderSidebar();
