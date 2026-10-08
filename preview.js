// Solo para preview.html. Lee los valores reales de las variables CSS.
(function () {
  var tokens = ['--navy-900','--navy-800','--navy-700','--navy-600','--teal-700','--teal-600','--teal-500','--teal-100','--teal-050','--bg','--surf','--surf-2','--bdr','--txt','--txt-2','--txt-3','--grn','--grn-dim','--red','--red-dim','--amb','--amb-dim'];
  var roles = ['--shell-bg','--shell-bg-2','--text-strong','--text-dim','--text-faint','--badge-bg','--badge-border','--badge-text','--btn-ghost-border','--btn-ghost-text','--btn-ghost-bg-hover','--header-icon'];

  function fill(id, names) {
    var host = document.getElementById(id);
    names.forEach(function (name) {
      var sw = document.createElement('div'); sw.className = 'sw';
      var c = document.createElement('div'); c.className = 'c'; c.style.background = 'var(' + name + ')';
      var n = document.createElement('div'); n.className = 'n'; n.textContent = name;
      var v = document.createElement('div'); v.className = 'v'; v.dataset.name = name;
      sw.appendChild(c); sw.appendChild(n); sw.appendChild(v); host.appendChild(sw);
    });
  }
  function refresh() {
    var cs = getComputedStyle(document.documentElement);
    document.querySelectorAll('.v').forEach(function (el) {
      el.textContent = cs.getPropertyValue(el.dataset.name).trim();
    });
  }
  fill('tokens', tokens); fill('roles', roles); refresh();

  document.getElementById('toggle').addEventListener('click', function () {
    var root = document.documentElement;
    if (root.getAttribute('data-theme') === 'dark') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', 'dark');
    refresh();
  });
})();
