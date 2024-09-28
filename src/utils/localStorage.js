export const getItems = () => JSON.parse(localStorage.getItem('deals')) || [];

export const setItem = (item) => {
  if (!localStorage.getItem('deals')) {
    const currentItem = getItemWithId(item);
    localStorage.setItem('deals', JSON.stringify([currentItem]));
  } else {
    const items = getItems();
    const currentItem = getItemWithId(item);
    items.push(currentItem);
    localStorage.setItem('deals', JSON.stringify(items));
  }
};

export const deleteItem = (id) => {
  if (localStorage.getItem('deals')) {
    const items = JSON.parse(localStorage.getItem('deals')).filter((e) => e.id !== id);
    localStorage.setItem('deals', JSON.stringify(items));
  }
};

export const changeItemStatus = (id) => {
  const items = getItems();
  const i = items.findIndex((e) => e.id === id);
  items[i].status = !items[i].status;
  console.log(items);
  localStorage.setItem('deals', JSON.stringify(items));
};

const getItemWithId = (item) => {
  const items = getItems();

  if (items.length) {
    const i = items.filter((e, i) => e.id !== i).length + 1;
    item = { id: i, ...item };
  } else {
    item = { id: 1, ...item };
  }

  return item;
};

//item ={id: 1, name: Task, description: desc, status: false, date: Date}
