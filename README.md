# Minimum Viable Table

HTML table with sorting, filtering, and a sticky header

<a href="https://rystaf.github.io/mvt">demo</a>


## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/rystaf/mvt/mvt.js"></script>
```
or you can copy [the source](https://raw.githubusercontent.com/rystaf/mvt/main/mvt.js)!

## Usage

```javascript
MVT(document.querySelector('table'))
```

sorting dates requires values to be contained in a `time` element with valid datetime attribute

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
  background-color: #ddd;
}
```
