function i18nGetKey(val) {
  if (val && select.value !== '') {
    val = select.value + ' ' + val;
  };

  return val
    .replace(/[\s]{2,}/g,' ')
    .replace(/([a-z])([A-Z])/g,'$1 $2')
    .trim()
    .replace(/ /g,'_')
    .toUpperCase();
};

const input = document.querySelector('#input');
const output = document.querySelector('#output');
const select = document.querySelector('#select_type');

// init
output.value = i18nGetKey(input.value);

// textarea focus event
input.addEventListener('focus', function(e) {
  input.value = '';
});

// textarea keyup event
input.addEventListener('keyup', function(e) {
  const value = e.target.value;
  output.value = i18nGetKey(value);
});

// textarea click event
output.addEventListener('click', function(e) {
  const value = e.target.value;
  navigator.clipboard.writeText(value).then(() => $('.toast').toast('show'));
});

// select prefix type
select.addEventListener('change', function(e) {
  const value = input.value;
  output.value = i18nGetKey(value);
});

// tooltip
$('#output').tooltip();