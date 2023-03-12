let table = document.getElementById('bagua-table');
let isEditMode;

table.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (isEditMode) return;

  let td = event.target.closest('td');
  if (!td) return;

  editStart(td);
}

function editStart(td) {
  isEditMode = true;

  let area = document.createElement('textarea');
  area.classList.add('textarea');
  area.style.width = td.offsetWidth + 'px';
  area.style.height = td.offsetHeight + 'px';
  area.value = td.innerHTML;

  td.classList.add('td-edit');

  let editControls = document.createElement('div');
  editControls.classList.add('edit-controls');
  editControls.style.top = td.offsetHeight + 'px';

  let saveBtn = createButton('OK');
  let cancelBtn = createButton('CANCEL');
  editControls.append(saveBtn, cancelBtn);

  editControls.addEventListener('click', editControlsClickHandler);

  td.append(area, editControls);
  area.focus();

  function editControlsClickHandler(event) {
    if (event.target !== saveBtn && event.target !== cancelBtn) return;

    if (event.target === saveBtn) td.innerHTML = area.value;

    isEditMode = false;
    td.classList.remove('td-edit');
    editControls.removeEventListener('click', editControlsClickHandler);
    editControls.remove();
    area.remove();
  }
}

function createButton(btnText){
    let button = document.createElement('button');
    button.textContent = btnText;
    return button;
}