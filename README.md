# Minimum Viable Table

HTML table with sorting, filtering, and a sticky header

<a href="https://rystaf.github.io/mvt">demo</a>


## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/rystaf/mvt/mvt.min.js"></script>
```
or just copy the dang source

## Usage

```html
MVT(document.querySelector('table'))
```

> sorting date requires values to be contianed in a `time` element with datetime attribute

### Sorting Indicators
```css
th[data-sort="-1"]::after {
  content: " ▲";
}
th[data-sort="1"]::after {
  content: " ▼";
}
```

### Filters
Place an `input` in the `th` of the column you want to filter
```html
<th>
    <input type="text">
    Name
</th>
```

### Sticky Header
```css
thead {
  position: sticky;
  top: 0;
}
```
