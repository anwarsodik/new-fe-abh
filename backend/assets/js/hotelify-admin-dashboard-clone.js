(function () {
            const tz     = 'Asia/Jakarta';
            const dtOpt  = { timeZone: tz, weekday: 'short', day: 'numeric', month: 'short' };
    
            function pad(n) { return String(n).padStart(2, '0'); }
    
            function tick() {
                const now   = new Date();
                const parts = new Intl.DateTimeFormat('id-ID', {
                    timeZone: tz, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
                }).formatToParts(now);
                const get = t => parts.find(p => p.type === t)?.value ?? '00';
    
                const elTime = document.getElementById('admin-wib-time');
                const elDate = document.getElementById('admin-wib-date');
    
                if (elTime) elTime.innerHTML =
                    pad(parseInt(get('hour'))) +
                    '<span class="wib-sep">:</span>' +
                    get('minute') +
                    '<span class="wib-sep">:</span>' +
                    get('second');
    
                if (elDate) elDate.textContent = now.toLocaleDateString('id-ID', dtOpt);
            }
    
            tick();
            setInterval(tick, 1000);
        })();

document.addEventListener('DOMContentLoaded', function () {

    // ── Shared Chart.js defaults ──
    Chart.defaults.font.family = "'Instrument Sans', sans-serif";
    Chart.defaults.color = '#666666';
    Chart.defaults.plugins.legend.display = false;

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CHART 1 — Unit Status Donut
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const unitCtx = document.getElementById('unitStatusChart');
    if (unitCtx) {
        new Chart(unitCtx, {
            type: 'doughnut',
            data: {
                labels: ['Aktif', 'Monthly', 'Daily'],
                datasets: [{
                    data: [
                        15,
                        4,
                        9
                    ],
                    backgroundColor: ['#039509', '#2B90D9', '#DD8B26'],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                    hoverOffset: 6,
                }]
            },
            options: {
                cutout: '72%',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    tooltip: {
                        backgroundColor: '#1e2d1f',
                        padding: 10,
                        cornerRadius: 8,
                        titleFont: { size: 12, weight: '600' },
                        bodyFont: { size: 12 },
                        callbacks: {
                            label: function(ctx) {
                                const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
                                const pct = total > 0 ? Math.round(ctx.parsed / total * 100) : 0;
                                return ` ${ctx.label}: ${ctx.parsed} unit (${pct}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CHART 2 — Booking Status Bar
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const bookingCtx = document.getElementById('bookingStatusChart');
    if (bookingCtx) {
        new Chart(bookingCtx, {
            type: 'bar',
            data: {
                labels: ['Total', 'Pending', 'Confirmed'],
                datasets: [{
                    label: 'Jumlah',
                    data: [
                        14,
                        2,
                        3
                    ],
                    backgroundColor: ['#039509', '#DD8B26', '#05B30B'],
                    borderRadius: 8,
                    borderSkipped: false,
                    barPercentage: 0.55,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: { display: false },
                        border: { display: false },
                        ticks: { font: { size: 11, weight: '600' }, color: '#a3c4a5' }
                    },
                    y: {
                        beginAtZero: true,
                        border: { display: false, dash: [4, 4] },
                        grid: { color: '#edf5ed' },
                        ticks: {
                            font: { size: 11 },
                            color: '#a3c4a5',
                            stepSize: 1,
                            precision: 0
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        backgroundColor: '#1e2d1f',
                        padding: 10,
                        cornerRadius: 8,
                        titleFont: { size: 12, weight: '600' },
                        bodyFont: { size: 12 },
                        callbacks: {
                            label: function(ctx) {
                                return ` ${ctx.parsed.y} booking`;
                            }
                        }
                    }
                }
            }
        });
    }

});
