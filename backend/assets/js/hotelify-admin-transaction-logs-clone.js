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
