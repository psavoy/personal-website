let preveiwContainer = document.querySelector('.dataviz-modal');
let previewBox = preveiwContainer.querySelectorAll('.modal-content');

document.querySelectorAll('.dataviz-gallery-container .dataviz-image').forEach(product => {
  product.onclick = () => {
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(content => {
      let target = content.getAttribute('data-target');
      if (name == target) {
        document.documentElement.classList.add("modal-open");
        content.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close => {
  close.querySelector('.fa-times').onclick = () => {
    document.documentElement.classList.remove("modal-open");
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

