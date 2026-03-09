(function () {
    var checkInVal = document.getElementById('walkin_check_in_date').value;
    var stayType = document.getElementById('walkin_stay_type');
    var checkOut = document.getElementById('walkin_check_out_date');
    var wrapDaily = document.getElementById('walkin_wrap_check_out_daily');
    var wrapMonthly = document.getElementById('walkin_wrap_duration_monthly');
    var wrapYearly = document.getElementById('walkin_wrap_duration_yearly');
    var durationMonths = document.getElementById('walkin_duration_months');
    var durationYears = document.getElementById('walkin_duration_years');
    var summaryMonthly = document.getElementById('walkin_summary_monthly');
    var summaryYearly = document.getElementById('walkin_summary_yearly');
    if (!stayType || !checkOut) return;

    function parseYmd(s) {
        if (!s) return null;
        var p = s.split('-').map(Number);
        if (p.length !== 3) return null;
        return new Date(p[0], p[1] - 1, p[2]);
    }
    function formatYmd(d) {
        if (!d || isNaN(d.getTime())) return '';
        var y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), day = String(d.getDate()).padStart(2, '0');
        return y + '-' + m + '-' + day;
    }
    function addMonths(d, n) { var r = new Date(d); r.setMonth(r.getMonth() + n); return r; }
    function addYears(d, n) { var r = new Date(d); r.setFullYear(r.getFullYear() + n); return r; }

    function applyStayType() {
        var v = stayType.value;
        wrapDaily.classList.toggle('hidden', v !== 'daily');
        if (wrapMonthly) wrapMonthly.classList.toggle('hidden', v !== 'monthly');
        if (wrapYearly) wrapYearly.classList.toggle('hidden', v !== 'yearly');
        if (durationMonths) durationMonths.required = v === 'monthly';
        if (durationYears) durationYears.required = v === 'yearly';
        updateComputed();
    }
    function updateComputed() {
        var ci = parseYmd(checkInVal);
        if (!ci) return;
        var v = stayType.value;
        if (v === 'monthly' && durationMonths) {
            var n = parseInt(durationMonths.value, 10) || 1;
            var co = addMonths(ci, n);
            var coStr = formatYmd(co);
            checkOut.value = coStr;
            if (summaryMonthly) summaryMonthly.textContent = coStr || '–';
        } else if (v === 'yearly' && durationYears) {
            var n = parseInt(durationYears.value, 10) || 1;
            var co = addYears(ci, n);
            var coStr = formatYmd(co);
            checkOut.value = coStr;
            if (summaryYearly) summaryYearly.textContent = coStr || '–';
        }
    }

    stayType.addEventListener('change', applyStayType);
    if (durationMonths) durationMonths.addEventListener('input', updateComputed);
    if (durationYears) durationYears.addEventListener('input', updateComputed);
    applyStayType();

    var walkinUnitIdInput = document.getElementById('walkin_unit_id');
    var walkinTableBody = document.getElementById('walkin_unit_table_body');
    function selectWalkinUnit(unitId) {
        if (walkinUnitIdInput) walkinUnitIdInput.value = unitId || '';
        if (!walkinTableBody) return;
        walkinTableBody.querySelectorAll('.walkin-unit-row').forEach(function (tr) {
            var id = tr.getAttribute('data-unit-id');
            tr.classList.toggle('bg-[#e8f5e9]', id === String(unitId));
            tr.style.borderLeft = id === String(unitId) ? '4px solid #66BB6A' : '';
        });
    }
    if (walkinTableBody) {
        walkinTableBody.addEventListener('click', function (e) {
            var row = e.target.closest('.walkin-unit-row');
            var btn = e.target.closest('.walkin-select-unit-btn');
            if (row) selectWalkinUnit(row.getAttribute('data-unit-id'));
            if (btn) selectWalkinUnit(btn.getAttribute('data-unit-id'));
        });
        if (walkinUnitIdInput && walkinUnitIdInput.value) selectWalkinUnit(walkinUnitIdInput.value);
    }

    var estimateUrl = "https:\/\/dev.hotelify.id\/admin\/bookings\/estimate";
    var walkinEstimateTimeout = null;
    function fmtRp(n) { return 'Rp ' + (Number(n) || 0).toLocaleString('id-ID', { maximumFractionDigits: 0 }); }
    function fetchWalkinEstimate() {
        var uid = walkinUnitIdInput && walkinUnitIdInput.value;
        var co = checkOut && checkOut.value;
        if (!uid || !checkInVal || !co || co <= checkInVal) {
            ['walkin_est_subtotal','walkin_est_discount','walkin_est_after_discount','walkin_est_tax','walkin_est_service_fee','walkin_est_total'].forEach(function(id) {
                var e = document.getElementById(id); if (e) e.textContent = fmtRp(0);
            });
            return;
        }
        var promoIdEl = document.getElementById('walkin_promo_id');
        var promoId = promoIdEl ? promoIdEl.value : '';
        var st = stayType ? stayType.value : 'daily';
        var url = estimateUrl + '?unit_id=' + encodeURIComponent(uid) + '&check_in=' + encodeURIComponent(checkInVal) + '&check_out=' + encodeURIComponent(co) + '&stay_type=' + encodeURIComponent(st);
        if (st === 'monthly' && durationMonths && durationMonths.value) url += '&duration_months=' + encodeURIComponent(durationMonths.value);
        if (st === 'yearly' && durationYears && durationYears.value) url += '&duration_years=' + encodeURIComponent(durationYears.value);
        if (promoId) url += '&promo_id=' + encodeURIComponent(promoId);
        fetch(url, { headers: { 'X-Requested-With': 'XMLHttpRequest', 'Accept': 'application/json' } })
            .then(function(r) { return r.json(); })
            .then(function(d) {
                document.getElementById('walkin_est_subtotal').textContent = fmtRp(d.subtotal);
                document.getElementById('walkin_est_discount').textContent = fmtRp(d.discount_amount);
                document.getElementById('walkin_est_after_discount').textContent = fmtRp(d.total_after_discount);
                document.getElementById('walkin_est_tax').textContent = fmtRp(d.tax_amount);
                var svcEl = document.getElementById('walkin_est_service_fee');
                if (svcEl) svcEl.textContent = fmtRp(d.service_fee);
                document.getElementById('walkin_est_total').textContent = fmtRp(d.total_amount);
                var dr = document.getElementById('walkin_est_discount_row');
                if (dr) dr.style.display = (d.discount_amount > 0) ? '' : 'none';
            });
    }
    function scheduleWalkinEstimate() {
        if (walkinEstimateTimeout) clearTimeout(walkinEstimateTimeout);
        walkinEstimateTimeout = setTimeout(fetchWalkinEstimate, 200);
    }
    checkOut.addEventListener('change', scheduleWalkinEstimate);
    if (walkinUnitIdInput) walkinUnitIdInput.addEventListener('change', scheduleWalkinEstimate);
    if (stayType) stayType.addEventListener('change', function() { updateComputed(); scheduleWalkinEstimate(); });
    if (durationMonths) durationMonths.addEventListener('input', function() { updateComputed(); scheduleWalkinEstimate(); });
    if (durationYears) durationYears.addEventListener('input', function() { updateComputed(); scheduleWalkinEstimate(); });
    var wp = document.getElementById('walkin_promo_id'), wt = document.getElementById('walkin_tax_amount');
    if (wp) wp.addEventListener('change', scheduleWalkinEstimate);
    if (wt) wt.addEventListener('input', scheduleWalkinEstimate);
    var origSelect = selectWalkinUnit;
    selectWalkinUnit = function(unitId) {
        origSelect(unitId);
        scheduleWalkinEstimate();
    };
    fetchWalkinEstimate();
})();

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
