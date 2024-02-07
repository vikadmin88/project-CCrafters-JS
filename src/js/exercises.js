const refs = {
  category: document.querySelector('.exercises-category-container'),
  subcategory: document.querySelector('.exercises-subcategory-list'),
};

const queryParams = {
  filter: 'Muscles',
  page: 1,
  maxPage: 0,
  limit: 12,
};

refs.category.addEventListener('click', categorySearch);

async function getFiltersExercises() {
  try {
    const { data } = await axios.get('/filters', { queryParams });

    return data;
  } catch (error) {
    console.log(error.message);
  }
}

function categorySearch(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  [...event.currentTarget.children]
    .find(btn => btn.classList.contains('exercises-category-btn-active'))
    .classList.remove('exercises-category-btn-active');

  event.target.classList.add('exercises-category-btn-active');
}
