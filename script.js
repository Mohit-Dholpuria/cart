document.addEventListener('DOMContentLoaded', () => {
  let total = 0; // Initialize total
  const totalElement = document.querySelector('.total-price');

  // Update total on bundle selection
  const radios = document.querySelectorAll('input[name="bundle"]');
  radios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const selectedValue = event.target.value;

      // Update total based on selected bundle
      if (selectedValue === '1-unit') total = 12;
      else if (selectedValue === '2-unit') total = 18;
      else if (selectedValue === '3-unit') total = 21;

      // Update the displayed total
      totalElement.textContent = `$${total}.00`;

      // Toggle visibility of the additional content
      radios.forEach((otherRadio) => {
        const otherContent = otherRadio.closest('.bundle-item').querySelector('.additional-content');
        if (otherContent) {
          otherContent.style.display = otherRadio === radio ? 'block' : 'none';
        }
      });
    });
  });

  // Prevent dropdown clicks from collapsing card
  const dropdowns = document.querySelectorAll('.dropdowns');
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });

  // Add to cart button
  const cartControls = document.querySelector('.cart-controls');
  cartControls.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-add-to-cart')) {
      alert(`Added to cart! Total: $${total}.00`);
    }
  });

  // Set default total if a bundle is pre-selected
  const defaultRadio = document.querySelector('input[name="bundle"]:checked');
  if (defaultRadio) {
    defaultRadio.dispatchEvent(new Event('change')); 
  }
});
