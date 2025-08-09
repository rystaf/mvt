const MVT = table => {
  const inputs = Array.from(table.querySelectorAll('thead input')),
        tbody = table.querySelector('tbody'),
        rows = Array.from(tbody.querySelectorAll('tr'));
  Array.from(table.querySelectorAll('th'))
    .forEach((header, i, headers) => {
      (header.querySelector('input') || {}).oninput = () => rows
          .forEach(row => row.style.display = inputs
            .every(input => !input.value ||
              (new RegExp(input.value,'i')).test(row.children[i].innerHTML))
            ? '' : 'none');
      header.onclick = (e) => {
        if (e.target.tagName == 'INPUT' || !e.target.innerHTML) return;
        headers.filter(h => h != header).forEach(h => h.dataset.sort = '');
        const sort = e.target.dataset.sort = (e.target.dataset.sort == '-1') ? 1 : -1;
        rows.sort((a, b) => [a, b]
            .map(row => row.querySelectorAll('td')[i])
            .map(td => [new Date(td.dateTime), td.innerHTML]
              .find((v, i) => !isNaN(v) || i))
            .map(v => isNaN(v) ? v : parseInt(v))
            .reduce((x, y) => (x < y) ? sort : ((x > y) ? -sort : 0)), 0)
          .forEach(row => tbody.appendChild(row));
      }
  });
}
