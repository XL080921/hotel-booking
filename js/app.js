// ========== 酒店预订系统 - 主应用 (v2 - 含登录注册) ==========

let currentView = "user";
let currentHotel = null;
let bookings = [];
let hotels = [];
let adminTab = "bookings";
let editingHotelId = null;
let authMode = "login";

function init() {
    bookings = loadBookings();
    hotels = loadHotels();
    updateNav();
    renderUserPage();
    if (!isLoggedIn()) {
        setTimeout(function() { showAuthOverlay("login"); }, 600);
    }
}

function updateNav() {
    var navLinks = document.querySelector(".nav-links");
    var user = getCurrentUser();
    var userHtml = "";
    if (user) {
        var initial = user.name.charAt(0).toUpperCase();
        userHtml = '<div class="nav-user"><div class="user-avatar">' + initial + '</div><div><div class="user-name">' + user.name + '</div><div class="user-role">' + (user.role === "admin" ? "管理员" : "用户") + '</div></div><button class="btn-logout" onclick="handleLogout()">退出</button></div>';
    } else {
        userHtml = '<button class="btn-login" onclick="showAuthOverlay(\'login\')">🔑 登录 / 注册</button>';
    }
    navLinks.querySelectorAll(".nav-user, .btn-login").forEach(function(el) { el.remove(); });
    var adminBtn = document.getElementById("nav-admin");
    if (adminBtn && adminBtn.parentNode) {
        var wrapper = document.createElement("span");
        wrapper.innerHTML = userHtml;
        var fc = wrapper.firstElementChild || wrapper.firstChild;
        if (fc) adminBtn.parentNode.insertBefore(fc, adminBtn.nextSibling);
    }
}

function showAuthOverlay(mode) {
    authMode = mode || "login";
    renderAuthForm();
    document.getElementById("auth-overlay").classList.add("show");
}
function closeAuthOverlay() { document.getElementById("auth-overlay").classList.remove("show"); }

function renderAuthForm() {
    var card = document.getElementById("auth-card");
    if (authMode === "login") {
        card.innerHTML = '<h2>🔑 欢迎回来</h2><p class="auth-sub">登录您的悦居账号</p><div class="auth-error" id="auth-error"></div><div class="form-group"><label>用户名</label><input type="text" id="auth-username" placeholder="请输入用户名" autocomplete="username"></div><div class="form-group"><label>密码</label><input type="password" id="auth-password" placeholder="请输入密码" autocomplete="current-password"></div><button class="btn btn-primary btn-full" onclick="handleLogin()">登 录</button><p class="auth-switch">还没有账号？<a onclick="switchAuthMode(\'register\')">立即注册</a></p><p style="text-align:center;margin-top:12px;font-size:.75rem;color:var(--text-light)">测试账号：admin / admin123 ｜ user1 / 123456</p>';
    } else {
        card.innerHTML = '<h2>📝 创建账号</h2><p class="auth-sub">注册悦居，开启便捷预订</p><div class="auth-error" id="auth-error"></div><div class="auth-success" id="auth-success"></div><div class="form-group"><label>用户名 *</label><input type="text" id="reg-username" placeholder="3-20位字母数字" autocomplete="username"></div><div class="form-group"><label>密码 *</label><input type="password" id="reg-password" placeholder="至少6位" autocomplete="new-password"></div><div class="form-group"><label>姓名</label><input type="text" id="reg-name" placeholder="请输入您的姓名"></div><div class="form-group"><label>手机号</label><input type="tel" id="reg-phone" placeholder="请输入手机号"></div><button class="btn btn-primary btn-full" onclick="handleRegister()">注 册</button><p class="auth-switch">已有账号？<a onclick="switchAuthMode(\'login\')">立即登录</a></p>';
    }
}

function switchAuthMode(mode) { authMode = mode; renderAuthForm(); }

function handleLogin() {
    var u = document.getElementById("auth-username").value.trim();
    var p = document.getElementById("auth-password").value.trim();
    var err = document.getElementById("auth-error");
    if (!u || !p) { err.textContent = "请填写用户名和密码"; err.classList.add("show"); return; }
    var r = loginUser(u, p);
    if (r.success) {
        closeAuthOverlay(); updateNav();
        showToast("登录成功，欢迎回来，" + r.user.name + "！");
        if (currentView === "user") { currentHotel ? renderHotelDetail(currentHotel.id) : renderUserPage(); }
        else { renderAdminPage(); }
    } else { err.textContent = r.message; err.classList.add("show"); }
}

function handleRegister() {
    var u = document.getElementById("reg-username").value.trim();
    var p = document.getElementById("reg-password").value.trim();
    var n = document.getElementById("reg-name").value.trim();
    var ph = document.getElementById("reg-phone").value.trim();
    var err = document.getElementById("auth-error");
    var ok = document.getElementById("auth-success");
    err.classList.remove("show"); ok.classList.remove("show");
    if (!u || u.length < 3) { err.textContent = "用户名至少3个字符"; err.classList.add("show"); return; }
    if (!p || p.length < 6) { err.textContent = "密码至少6位"; err.classList.add("show"); return; }
    if (!n) { err.textContent = "请填写姓名"; err.classList.add("show"); return; }
    var r = registerUser(u, p, n, ph);
    if (r.success) {
        ok.textContent = "注册成功！正在为您自动登录..."; ok.classList.add("show");
        setTimeout(function() { loginUser(u, p); closeAuthOverlay(); updateNav(); showToast("注册成功，欢迎加入悦居！"); if (currentView === "user") { currentHotel ? renderHotelDetail(currentHotel.id) : renderUserPage(); } }, 1000);
    } else { err.textContent = r.message; err.classList.add("show"); }
}

function handleLogout() {
    logoutUser(); updateNav(); showToast("已安全退出"); currentHotel = null;
    if (currentView === "admin") {
        currentView = "user";
        document.querySelectorAll(".nav-link").forEach(function(el) { el.classList.remove("active"); });
        document.getElementById("nav-user").classList.add("active");
        document.querySelectorAll(".page").forEach(function(el) { el.classList.remove("active"); });
        document.getElementById("page-user").classList.add("active");
    }
    renderUserPage();
}

function switchView(view) {
    if (view === "admin" && !isAdmin()) {
        showToast("请使用管理员账号登录后访问管理端", "error");
        showAuthOverlay("login");
        return;
    }
    currentView = view;
    document.querySelectorAll(".nav-link").forEach(function(el) { el.classList.remove("active"); });
    document.getElementById("nav-" + view).classList.add("active");
    document.querySelectorAll(".page").forEach(function(el) { el.classList.remove("active"); });
    document.getElementById("page-" + view).classList.add("active");
    if (view === "user") {
        if (currentHotel) { renderHotelDetail(currentHotel.id); }
        else { renderUserPage(); }
    } else {
        currentHotel = null;
        adminTab = "bookings";
        renderAdminPage();
    }
}

function showToast(msg, type) {
    type = type || "success";
    var container = document.getElementById("toast-container");
    var toast = document.createElement("div");
    toast.className = "toast toast-" + type;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 3000);
}

function imgError(el) { el.src = defaultImage; el.onerror = null; }
function renderStars(n) { return "★".repeat(n) + "☆".repeat(5 - n); }

function renderUserPage() {
    currentHotel = null;
    var page = document.getElementById("page-user");
    hotels = loadHotels();
    var cities = getCities();
    page.innerHTML = "<div style=margin-bottom:24px><h2 class=section-title>🏨 探索精选酒店</h2><div class=search-bar><input type=text id=search-input placeholder='🔍 搜索酒店名称或城市...' oninput=filterHotels()><select id=filter-city onchange=filterHotels()><option value=''>全部城市</option>" + cities.map(function(c) { return "<option value=" + c + ">" + c + "</option>"; }).join("") + "</select><select id=filter-stars onchange=filterHotels()>" + starOptions.map(function(o) { return "<option value=" + o.value + ">" + o.label + "</option>"; }).join("") + "</select><input type=number id=filter-max-price placeholder='最高价格 (元/晚)' oninput=filterHotels()><button class='btn btn-outline btn-sm' onclick=resetFilters()>重置</button></div></div><div class=grid-3 id=hotel-grid></div>";
    filterHotels();
}

function filterHotels() {
    var search = (document.getElementById("search-input")?.value || "").toLowerCase();
    var city = document.getElementById("filter-city")?.value || "";
    var stars = document.getElementById("filter-stars")?.value || "";
    var maxPrice = parseFloat(document.getElementById("filter-max-price")?.value) || 0;
    var filtered = hotels.filter(function(h) {
        var ms = !search || h.name.toLowerCase().includes(search) || h.city.toLowerCase().includes(search);
        var mc = !city || h.city === city;
        var mst = !stars || h.stars === parseInt(stars);
        var mp = !maxPrice || Math.min.apply(null, h.rooms.map(function(r) { return r.price; })) <= maxPrice;
        return ms && mc && mst && mp;
    });
    var grid = document.getElementById("hotel-grid");
    if (!grid) return;
    if (filtered.length === 0) { grid.innerHTML = "<div class='empty-state' style=grid-column:1/-1><div class=icon>🏨</div><p>没有找到匹配的酒店，试试调整筛选条件</p></div>"; return; }
    grid.innerHTML = filtered.map(function(h) {
        return "<div class='card hotel-card' onclick=renderHotelDetail(" + h.id + ")><div class=img-wrap><img src=" + h.images[0] + " alt='" + h.name + "' onerror=imgError(this) loading=lazy><span class=badge>" + h.city + "</span><span class=rating>⭐ " + h.rating + "</span></div><div class=info><div class=stars>" + renderStars(h.stars) + "</div><div class=name>" + h.name + "</div><div class=loc>📍 " + h.address + "</div><div class=price>¥" + Math.min.apply(null, h.rooms.map(function(r) { return r.price; })) + "<small>/晚起</small></div></div></div>";
    }).join("");
}

function resetFilters() {
    var si = document.getElementById("search-input"), fc = document.getElementById("filter-city"), fs = document.getElementById("filter-stars"), fp = document.getElementById("filter-max-price");
    if (si) si.value = ""; if (fc) fc.value = ""; if (fs) fs.value = ""; if (fp) fp.value = "";
    filterHotels();
}

function renderHotelDetail(hotelId) {
    hotels = loadHotels();
    var hotel = hotels.find(function(h) { return h.id === hotelId; });
    if (!hotel) { renderUserPage(); return; }
    currentHotel = hotel;
    var user = getCurrentUser();
    var page = document.getElementById("page-user");
    page.innerHTML = "<button class=back-btn onclick=renderUserPage()>← 返回酒店列表</button><div class=detail-gallery>" + hotel.images.map(function(img, i) { var cls = i === 0 ? "main-img" : ""; return "<img src=" + img + " alt='" + hotel.name + "' class=" + cls + " onerror=imgError(this) onclick='openLightbox(" + hotelId + "," + i + ")' style=cursor:pointer>"; }).join("") + "</div><div class=detail-info><div><h2 style=font-size:1.8rem;margin-bottom:4px>" + hotel.name + "</h2><div class=stars style=font-size:1.1rem;margin-bottom:4px>" + renderStars(hotel.stars) + " <span style='color:var(--text-light);font-size:.9rem'>" + hotel.rating + " 分</span></div><p style='color:var(--text-light);margin-bottom:16px'>📍 " + hotel.address + "</p><p style=line-height:1.8;margin-bottom:16px;color:var(--text)>" + hotel.description + "</p><h4 style=margin-bottom:8px>🏷️ 设施服务</h4><div class=amenities>" + hotel.amenities.map(function(a) { return "<span class=amenity>" + a + "</span>"; }).join("") + "</div><div class=reviews-section id=reviews-section></div></div><div class=booking-panel><h3>📅 预订房间</h3><div class=room-types id=room-types>" + hotel.rooms.map(function(r, i) { return "<label class='room-type " + (i === 0 ? "selected" : "") + "' onclick=selectRoom(this)><input type=radio name=room value=" + i + " " + (i === 0 ? "checked" : "") + "><div style=flex:1><div style=font-weight:600>" + r.type + "</div><div style='font-size:.8rem;color:var(--text-light)'>" + r.desc + "</div></div><div style='font-weight:700;color:var(--danger);font-size:1.2rem'>¥" + r.price + "<small style='font-weight:400;font-size:.75rem;color:var(--text-light)'>/晚</small></div></label>"; }).join("") + "</div><div class=form-group><label>入住日期</label><input type=date id=checkin-date onchange=updatePrice()></div><div class=form-group><label>退房日期</label><input type=date id=checkout-date onchange=updatePrice()></div><div class=form-group><label>住客姓名</label><input type=text id=guest-name placeholder=请输入姓名 value='" + (user ? user.name : "") + "'></div><div class=form-group><label>联系电话</label><input type=tel id=guest-phone placeholder=请输入手机号 value='" + (user ? user.phone : "") + "'></div><div style='background:var(--primary-light);padding:16px;border-radius:var(--radius-sm);margin:12px 0;text-align:center'><div style='font-size:.85rem;color:var(--text-light)'>预计总价</div><div style='font-size:2rem;font-weight:700;color:var(--primary)' id=total-price>¥0</div><div style='font-size:.8rem;color:var(--text-light)' id=nights-info></div></div><button class='btn btn-primary' style=width:100%;padding:14px;font-size:1rem onclick=submitBooking()>立即预订</button>" + (!user ? "<p style='text-align:center;margin-top:8px;font-size:.8rem;color:var(--text-light)'>🔑 登录后可快速预订</p>" : "") + "</div></div>";
    renderReviewsSection(hotelId);
    var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById("checkin-date").value = today.toISOString().split("T")[0];
    document.getElementById("checkout-date").value = tomorrow.toISOString().split("T")[0];
    updatePrice();
}

function selectRoom(el) {
    document.querySelectorAll(".room-type").forEach(function(r) { r.classList.remove("selected"); });
    el.classList.add("selected");
    updatePrice();
}

function updatePrice() {
    var ci = document.getElementById("checkin-date")?.value;
    var co = document.getElementById("checkout-date")?.value;
    var ri = parseInt((document.querySelector("input[name=room]:checked")?.value) || "0");
    var te = document.getElementById("total-price");
    var ni = document.getElementById("nights-info");
    if (!te || !ni || !currentHotel) return;
    if (ci && co) {
        var d1 = new Date(ci), d2 = new Date(co);
        var nights = Math.max(1, Math.round((d2 - d1) / 86400000));
        te.textContent = "¥" + (currentHotel.rooms[ri].price * nights).toLocaleString();
        ni.textContent = nights + "晚 · " + currentHotel.rooms[ri].type;
    } else { te.textContent = "¥0"; ni.textContent = "请选择日期"; }
}

function submitBooking() {
    if (!isLoggedIn()) { showToast("请先登录后再预订", "error"); showAuthOverlay("login"); return; }
    var user = getCurrentUser();
    var name = document.getElementById("guest-name")?.value.trim() || user.name;
    var phone = document.getElementById("guest-phone")?.value.trim() || user.phone;
    var ci = document.getElementById("checkin-date")?.value;
    var co = document.getElementById("checkout-date")?.value;
    if (!name) { showToast("请输入住客姓名", "error"); return; }
    if (!phone || !/^1\d{10}$/.test(phone)) { showToast("请输入有效的手机号", "error"); return; }
    if (!ci || !co) { showToast("请选择入住和退房日期", "error"); return; }
    var d1 = new Date(ci), d2 = new Date(co);
    if (d2 <= d1) { showToast("退房日期必须晚于入住日期", "error"); return; }
    var ri = parseInt((document.querySelector("input[name=room]:checked")?.value) || "0");
    var room = currentHotel.rooms[ri];
    var nights = Math.round((d2 - d1) / 86400000);
    var tp = room.price * nights;
    bookings = loadBookings();
    var booking = {
        id: generateBookingId(), userId: user.id, username: user.username,
        hotelId: currentHotel.id, hotelName: currentHotel.name, hotelCity: currentHotel.city,
        roomType: room.type, guestName: name, guestPhone: phone,
        checkin: ci, checkout: co, nights: nights, pricePerNight: room.price,
        totalPrice: tp, status: "pending", createdAt: new Date().toISOString()
    };
    bookings.unshift(booking);
    saveBookings(bookings);
    showToast("预订成功！订单号：" + booking.id);
    document.getElementById("guest-name").value = "";
    document.getElementById("guest-phone").value = "";
}

function openLightbox(hotelId, idx) {
    var hotel = loadHotels().find(function(h) { return h.id === hotelId; });
    if (!hotel) return;
    var lb = document.getElementById("lightbox");
    var img = document.getElementById("lightbox-img");
    img.src = hotel.images[idx] || hotel.images[0];
    img.dataset.hotelId = hotelId;
    img.dataset.idx = idx;
    lb.classList.add("show");
}
function closeLightbox() { document.getElementById("lightbox").classList.remove("show"); }
function nextLightbox(e) {
    e.stopPropagation();
    var img = document.getElementById("lightbox-img");
    var hotel = loadHotels().find(function(h) { return h.id === parseInt(img.dataset.hotelId); });
    if (!hotel) return;
    var idx = (parseInt(img.dataset.idx) + 1) % hotel.images.length;
    img.src = hotel.images[idx]; img.dataset.idx = idx;
}
function prevLightbox(e) {
    e.stopPropagation();
    var img = document.getElementById("lightbox-img");
    var hotel = loadHotels().find(function(h) { return h.id === parseInt(img.dataset.hotelId); });
    if (!hotel) return;
    var idx = (parseInt(img.dataset.idx) - 1 + hotel.images.length) % hotel.images.length;
    img.src = hotel.images[idx]; img.dataset.idx = idx;
}

function renderAdminPage() {
    var page = document.getElementById("page-admin");
    page.innerHTML = "<div class=tabs><button class='tab " + (adminTab === "bookings" ? "active" : "") + "' onclick=switchAdminTab('bookings')>📋 订单管理</button><button class='tab " + (adminTab === "hotels" ? "active" : "") + "' onclick=switchAdminTab('hotels')>🏨 酒店管理</button><button class='tab " + (adminTab === "dashboard" ? "active" : "") + "' onclick=switchAdminTab('dashboard')>📊 数据概览</button></div><div id=admin-content></div>";
    switchAdminTab(adminTab);
}
function switchAdminTab(tab) {
    adminTab = tab;
    document.querySelectorAll(".tab").forEach(function(t) { t.classList.remove("active"); });
    event?.target?.classList.add("active");
    if (tab === "bookings") renderBookingsTab();
    else if (tab === "hotels") renderHotelsTab();
    else if (tab === "dashboard") renderDashboardTab();
}

function renderBookingsTab() {
    bookings = loadBookings();
    var users = loadUsers();
    var content = document.getElementById("admin-content");
    if (bookings.length === 0) { content.innerHTML = "<div class=empty-state><div class=icon>📋</div><p>暂无预订订单</p></div>"; return; }
    content.innerHTML = "<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:16px'><select id=booking-filter-status onchange=renderBookingsTab() style='padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:.9rem'><option value=''>全部状态</option><option value=pending>待确认</option><option value=confirmed>已确认</option><option value=cancelled>已取消</option></select></div><div class=table-wrap><table><thead><tr><th>订单号</th><th>预订用户</th><th>酒店</th><th>房型</th><th>住客</th><th>入住</th><th>退房</th><th>金额</th><th>状态</th><th>操作</th></tr></thead><tbody id=booking-table-body></tbody></table></div>";
    var sf = document.getElementById("booking-filter-status")?.value || "";
    var filtered = sf ? bookings.filter(function(b) { return b.status === sf; }) : bookings;
    var tbody = document.getElementById("booking-table-body");
    tbody.innerHTML = filtered.map(function(b) {
        var bu = users.find(function(u) { return u.id === b.userId; });
        var bun = bu ? bu.name : (b.username || "游客");
        return "<tr><td><code>" + b.id + "</code></td><td>" + bun + "<br><small style='color:var(--text-light)'>@" + (b.username || "guest") + "</small></td><td>" + b.hotelName + "</td><td>" + b.roomType + "</td><td>" + b.guestName + "<br><small style='color:var(--text-light)'>" + b.guestPhone + "</small></td><td>" + b.checkin + "</td><td>" + b.checkout + "</td><td><strong>¥" + b.totalPrice.toLocaleString() + "</strong><br><small style='color:var(--text-light)'>" + b.nights + "晚</small></td><td><span class='status status-" + b.status + "'>" + ({pending:"待确认",confirmed:"已确认",cancelled:"已取消"})[b.status] + "</span></td><td>" + (b.status === "pending" ? "<button class='btn btn-success btn-xs' onclick=confirmBooking('" + b.id + "')>确认</button><button class='btn btn-danger btn-xs' onclick=cancelBooking('" + b.id + "')>取消</button>" : b.status === "confirmed" ? "<button class='btn btn-danger btn-xs' onclick=cancelBooking('" + b.id + "')>取消</button>" : "<span style='color:var(--text-light);font-size:.8rem'>-</span>") + "</td></tr>";
    }).join("");
    var sel = document.getElementById("booking-filter-status");
    if (sel) sel.value = sf;
}

function confirmBooking(id) {
    bookings = loadBookings();
    var b = bookings.find(function(b) { return b.id === id; });
    if (b) { b.status = "confirmed"; saveBookings(bookings); showToast("订单 " + id + " 已确认"); }
    renderBookingsTab();
}
function cancelBooking(id) {
    bookings = loadBookings();
    var b = bookings.find(function(b) { return b.id === id; });
    if (b) { b.status = "cancelled"; saveBookings(bookings); showToast("订单 " + id + " 已取消"); }
    renderBookingsTab();
}

function renderHotelsTab() {
    hotels = loadHotels();
    var content = document.getElementById("admin-content");
    content.innerHTML = "<div style='display:flex;justify-content:space-between;align-items:center;margin-bottom:16px'><span style='color:var(--text-light)'>共 " + hotels.length + " 家酒店</span><div style='display:flex;gap:8px'><button class='btn btn-primary btn-sm' onclick=openHotelModal()>+ 添加酒店</button><button class='btn btn-outline btn-sm' onclick=\"if(confirm('确定重置酒店数据？')){resetHotels();renderHotelsTab();showToast('酒店数据已重置')}\">🔄 重置数据</button></div></div><div class=table-wrap><table><thead><tr><th>图片</th><th>酒店名称</th><th>城市</th><th>星级</th><th>评分</th><th>最低价格</th><th>房间数</th><th>操作</th></tr></thead><tbody>" + hotels.map(function(h) { return "<tr><td><img src=" + h.images[0] + " alt='" + h.name + "' class=img-thumb onerror=\"this.parentElement.innerHTML='<div class=empty-img>无图</div>'\"></td><td><strong>" + h.name + "</strong></td><td>" + h.city + "</td><td>" + renderStars(h.stars) + "</td><td>⭐ " + h.rating + "</td><td><strong style='color:var(--danger)'>¥" + Math.min.apply(null, h.rooms.map(function(r) { return r.price; })) + "</strong></td><td>" + h.rooms.length + " 种</td><td><button class='btn btn-outline btn-xs' onclick=openHotelModal(" + h.id + ")>编辑</button><button class='btn btn-danger btn-xs' onclick=\"if(confirm('确定删除「" + h.name + "」？')){deleteHotel(" + h.id + ")}\">删除</button></td></tr>"; }).join("") + "</tbody></table></div>";
}

function openHotelModal(hotelId) {
    editingHotelId = hotelId || null;
    hotels = loadHotels();
    var hotel = hotelId ? hotels.find(function(h) { return h.id === hotelId; }) : null;
    var modal = document.getElementById("modal");
    modal.querySelector(".modal-title").textContent = hotel ? "编辑酒店" : "添加酒店";
    modal.querySelector(".modal-body").innerHTML = "<div class=form-group><label>酒店名称 *</label><input type=text id=hotel-name value='" + (hotel?.name || "") + "'></div><div class=form-group><label>城市 *</label><input type=text id=hotel-city value='" + (hotel?.city || "") + "' placeholder='如：上海、北京'></div><div class=form-group><label>区域</label><input type=text id=hotel-district value='" + (hotel?.district || "") + "'></div><div class=form-group><label>地址</label><input type=text id=hotel-address value='" + (hotel?.address || "") + "'></div><div class=form-group style='display:flex;gap:12px'><div style=flex:1><label>星级</label><select id=hotel-stars>" + [3,4,5].map(function(s) { return "<option value=" + s + " " + (hotel?.stars === s ? "selected" : "") + ">" + renderStars(s) + "</option>"; }).join("") + "</select></div><div style=flex:1><label>评分</label><input type=number id=hotel-rating value='" + (hotel?.rating || 4.5) + "' min=0 max=5 step=0.1></div></div><div class=form-group><label>描述</label><textarea id=hotel-desc rows=3 style='width:100%;padding:10px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:.9rem;resize:vertical'>" + (hotel?.description || "") + "</textarea></div><div class=form-group><label>设施服务（用逗号分隔）</label><input type=text id=hotel-amenities value='" + (hotel?.amenities.join(", ") || "") + "' placeholder='免费WiFi, 游泳池, 健身房'></div><div class=form-group><label>图片URL（每行一个）</label><textarea id=hotel-images rows=4 style='width:100%;padding:10px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:.9rem;resize:vertical'>" + (hotel?.images.join("\n") || "") + "</textarea></div><div class=form-group><label>房型（JSON）</label><textarea id=hotel-rooms rows=5 style='width:100%;padding:10px;border:1px solid var(--border);border-radius:var(--radius-sm);font-size:.9rem;resize:vertical;font-family:monospace'>" + (hotel ? JSON.stringify(hotel.rooms, null, 2) : '[\n  {"type": "标准间", "price": 399, "desc": "20㎡，含早餐"}\n]') + "</textarea></div>";
    document.getElementById("modal-overlay").classList.add("show");
}

function saveHotel() {
    var name = document.getElementById("hotel-name").value.trim();
    var city = document.getElementById("hotel-city").value.trim();
    if (!name || !city) { showToast("酒店名称和城市不能为空", "error"); return; }
    var it = document.getElementById("hotel-images").value.trim();
    var images = it ? it.split("\n").map(function(s) { return s.trim(); }).filter(function(s) { return s; }) : [defaultImage];
    var rooms;
    try { rooms = JSON.parse(document.getElementById("hotel-rooms").value.trim()); } catch(e) { showToast("房型数据JSON格式错误", "error"); return; }
    var hd = {
        name: name, city: city,
        district: document.getElementById("hotel-district").value.trim(),
        address: document.getElementById("hotel-address").value.trim(),
        stars: parseInt(document.getElementById("hotel-stars").value),
        rating: parseFloat(document.getElementById("hotel-rating").value),
        description: document.getElementById("hotel-desc").value.trim(),
        amenities: document.getElementById("hotel-amenities").value.split(",").map(function(s) { return s.trim(); }).filter(function(s) { return s; }),
        images: images, rooms: rooms
    };
    hotels = loadHotels();
    if (editingHotelId) {
        var idx = hotels.findIndex(function(h) { return h.id === editingHotelId; });
        if (idx >= 0) { hd.id = editingHotelId; hotels[idx] = hd; showToast("酒店「" + name + "」已更新"); }
    } else {
        hd.id = Math.max.apply(null, [0].concat(hotels.map(function(h) { return h.id; }))) + 1;
        hotels.push(hd);
        showToast("酒店「" + name + "」已添加");
    }
    saveHotels(hotels);
    closeModal();
    renderHotelsTab();
}

function deleteHotel(id) {
    hotels = loadHotels();
    hotels = hotels.filter(function(h) { return h.id !== id; });
    saveHotels(hotels);
    showToast("酒店已删除");
    renderHotelsTab();
}

function renderDashboardTab() {
    bookings = loadBookings();
    hotels = loadHotels();
    var users = loadUsers();
    var content = document.getElementById("admin-content");
    var pc = bookings.filter(function(b) { return b.status === "pending"; }).length;
    var cc = bookings.filter(function(b) { return b.status === "confirmed"; }).length;
    var tr = bookings.filter(function(b) { return b.status === "confirmed"; }).reduce(function(s, b) { return s + b.totalPrice; }, 0);
    var cs = {};
    bookings.forEach(function(b) { cs[b.hotelCity] = (cs[b.hotelCity] || 0) + 1; });
    var topCity = Object.entries(cs).sort(function(a, b) { return b[1] - a[1]; })[0];
    content.innerHTML = "<div class=stats-grid><div class=stat-card><div class=stat-num>" + hotels.length + "</div><div class=stat-label>🏨 酒店总数</div></div><div class=stat-card><div class=stat-num>" + users.length + "</div><div class=stat-label>👥 注册用户</div></div><div class=stat-card><div class=stat-num>" + bookings.length + "</div><div class=stat-label>📋 订单总数</div></div><div class=stat-card><div class=stat-num style='color:var(--warning)'>" + pc + "</div><div class=stat-label>⏳ 待确认订单</div></div><div class=stat-card><div class=stat-num style='color:var(--success)'>" + cc + "</div><div class=stat-label>✅ 已确认订单</div></div><div class=stat-card><div class=stat-num style='color:var(--danger)'>¥" + tr.toLocaleString() + "</div><div class=stat-label>💰 已确认营收</div></div><div class=stat-card><div class=stat-num>" + (topCity ? topCity[0] : "-") + "</div><div class=stat-label>🔥 最热门城市" + (topCity ? " (" + topCity[1] + "单)" : "") + "</div></div></div><div class=card style=margin-bottom:20px><div class=card-body><h4 style=margin-bottom:16px>🏨 酒店列表</h4><div class=table-wrap><table><thead><tr><th>酒店</th><th>城市</th><th>星级</th><th>评分</th><th>最低价</th><th>房型数</th></tr></thead><tbody>" + hotels.map(function(h) { return "<tr><td style='display:flex;align-items:center;gap:10px'><img src=" + h.images[0] + " alt='" + h.name + "' class=img-thumb onerror=\"this.style.display='none'\"><strong>" + h.name + "</strong></td><td>" + h.city + "</td><td>" + renderStars(h.stars) + "</td><td>⭐ " + h.rating + "</td><td><strong style='color:var(--danger)'>¥" + Math.min.apply(null, h.rooms.map(function(r) { return r.price; })) + "</strong></td><td>" + h.rooms.length + "</td></tr>"; }).join("") + "</tbody></table></div></div></div>" + (bookings.length > 0 ? "<div class=card><div class=card-body><h4 style=margin-bottom:16px>📋 最近订单</h4><div class=table-wrap><table><thead><tr><th>订单号</th><th>用户</th><th>酒店</th><th>住客</th><th>日期</th><th>金额</th><th>状态</th></tr></thead><tbody>" + bookings.slice(0,10).map(function(b) { var bu = users.find(function(u) { return u.id === b.userId; }); return "<tr><td><code>" + b.id + "</code></td><td>" + (bu ? bu.name : (b.username || "游客")) + "</td><td>" + b.hotelName + "</td><td>" + b.guestName + "</td><td>" + b.checkin + " → " + b.checkout + "</td><td><strong>¥" + b.totalPrice.toLocaleString() + "</strong></td><td><span class='status status-" + b.status + "'>" + ({pending:"待确认",confirmed:"已确认",cancelled:"已取消"})[b.status] + "</span></td></tr>"; }).join("") + "</tbody></table></div></div></div>" : "");
}

function closeModal() { document.getElementById("modal-overlay").classList.remove("show"); editingHotelId = null; }

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") { closeLightbox(); closeModal(); closeAuthOverlay(); }
    if (e.key === "Enter" && document.getElementById("auth-overlay").classList.contains("show")) {
        if (authMode === "login") handleLogin();
        else handleRegister();
    }
});

function renderReviewsSection(hotelId) {
    var section = document.getElementById("reviews-section");
    if (!section) return;
    var reviews = getHotelReviews(hotelId);
    var avg = getHotelAvgRating(hotelId);
    var user = getCurrentUser();
    var html = "<div class=reviews-header><div class=reviews-avg>" + (avg || "-") + "</div><div><div style=font-weight:600>住客评价</div><div class=reviews-count>" + reviews.length + " 条评价 · 平均 " + (avg || "暂无") + " 分</div></div></div>";
    if (user) {
        html += "<div class=review-form><h5>✍️ 写评价</h5><div class=star-input id=star-input>" + [1,2,3,4,5].map(function(s) { return "<span class=star onclick=setReviewStar(" + s + ",this) data-star=" + s + ">★</span>"; }).join("") + "</div><textarea id=review-comment placeholder=分享您的入住体验...></textarea><button class='btn btn-primary btn-sm' style=margin-top:8px onclick=submitReview(" + hotelId + ")>提交评价</button></div>";
    } else {
        html += "<div class=review-login-hint>🔑 <a onclick=showAuthOverlay('login')>登录</a>后即可发表评价</div>";
    }
    if (reviews.length > 0) {
        html += reviews.map(function(r) {
            var starsHtml = "";
            for (var i = 1; i <= 5; i++) starsHtml += i <= r.rating ? "★" : "☆";
            return "<div class=review-card><div class=review-user><div class=review-avatar>" + r.userName.charAt(0).toUpperCase() + "</div><div class=review-name>" + r.userName + "</div><div class=review-date>" + r.createdAt + "</div></div><div class=review-stars>" + starsHtml + "</div><div class=review-text>" + r.comment + "</div></div>";
        }).join("");
    }
    section.innerHTML = html;
}

var currentReviewStar = 0;
function setReviewStar(star, el) {
    currentReviewStar = star;
    var stars = document.querySelectorAll("#star-input .star");
    stars.forEach(function(s) { s.classList.remove("active"); });
    for (var i = 0; i < star; i++) { stars[i].classList.add("active"); }
}

function submitReview(hotelId) {
    if (!isLoggedIn()) { showToast("请先登录", "error"); return; }
    if (currentReviewStar === 0) { showToast("请选择评分", "error"); return; }
    var comment = document.getElementById("review-comment").value.trim();
    if (!comment) { showToast("请输入评价内容", "error"); return; }
    var user = getCurrentUser();
    addReview(hotelId, user.id, user.username, user.name, currentReviewStar, comment);
    showToast("评价发表成功！");
    renderReviewsSection(hotelId);
}

document.addEventListener("DOMContentLoaded", init);
