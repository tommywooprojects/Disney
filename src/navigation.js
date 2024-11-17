import {CLASS_NAMES, KEYS} from "./constants";
import setupDisneyMagic from "./disneyMagic";
import {addModal, removeModal} from "./modal";

export default function setupNavigation() {
  let currentRowIndex = 0;
  let currentItemIndex = 0;
  
  // default initial focused tile to the first item in the first row
  const firstRow = document.querySelector(`.${CLASS_NAMES.THUMBNAIL_ROW}`);
  const firstItem = firstRow.querySelector(`.${CLASS_NAMES.THUMBNAIL}`);
  firstItem?.classList.add(CLASS_NAMES.FOCUSED);
  
  document.addEventListener('keydown', (event) => {
    const rows = document.querySelectorAll(`.${CLASS_NAMES.THUMBNAIL_ROW}`);
    if (rows.length === 0) return;
    
    let currentRow = rows[currentRowIndex];
    let items = currentRow.querySelectorAll(`.${CLASS_NAMES.THUMBNAIL}`); // Select thumbnails in the current row
    
    if (items.length === 0) return;
    
    items[currentItemIndex]?.classList.remove(CLASS_NAMES.FOCUSED);
    
    switch (event.key) {
      case KEYS.ARROW_RIGHT:
        currentItemIndex = (currentItemIndex + 1) % items.length;
        break;
      case KEYS.ARROW_LEFT:
        currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
        break;
      case KEYS.ARROW_DOWN:
        currentRowIndex = currentRowIndex + 1 === rows.length ? 0 : currentRowIndex + 1;
        currentItemIndex = 0;
        break;
      case KEYS.ARROW_UP:
        currentRowIndex = currentRowIndex - 1 < 0 ? rows.length - 1 : currentRowIndex - 1;
        currentItemIndex = 0;
        break;
      case KEYS.ENTER:
        addModal(items[currentItemIndex]);
        break;
      case KEYS.BACKSPACE:
        removeModal();
        break;
    }
    
    // the list of items will change if a new row was navigated to
    currentRow = rows[currentRowIndex];
    items = currentRow.querySelectorAll(`.${CLASS_NAMES.THUMBNAIL}`);
    
    items[currentItemIndex]?.classList.add(CLASS_NAMES.FOCUSED);
    
    // when navigating, center the highlighted tile in view
    items[currentItemIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',    // vertical alignment
      inline: 'center'    // horizontal alignment
    });
  });
  
  setupDisneyMagic();
}