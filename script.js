//your JS code here. If required.
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to strip leading articles
function removeArticles(str) {
  return str.replace(/^(a |an |the )/i, '').toLowerCase();
}

// Sort and display the bands
function displayBands() {
  const sorted = bands.slice().sort((a, b) => {
    return removeArticles(a).localeCompare(removeArticles(b));
  });

  const list = document.getElementById('band');
  sorted.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    list.appendChild(li);
  });
}

// Call function on page load
window.onload = displayBands;
