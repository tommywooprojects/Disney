import {CLASS_NAMES} from './constants';

// press Enter upon highlighting a tile to show the modal
// it should display the following if available:
// title, release date, rating and a hero_tile or hero_collection image
export function addModal(item) {
  let modal = document.querySelector(`.${CLASS_NAMES.MODAL}`);
  
  if (!modal) {
    modal = document.createElement('div');
    modal.className = CLASS_NAMES.MODAL;
    
    const modalContent = document.createElement('div');
    modalContent.className = CLASS_NAMES.MODAL_CONTENT;
    
    if (item.dataset.title) {
      const title = document.createElement('h1');
      title.innerText = item.dataset.title;
      modalContent.append(title);
    }
    
    if (item.dataset.releaseDate) {
      const releaseDate = document.createElement('p');
      releaseDate.innerText = item.dataset.releaseDate;
      modalContent.append(releaseDate);
    }
    
    if (item.dataset.ratings) {
      const ratings = document.createElement('p');
      ratings.innerText = item.dataset.ratings;
      modalContent.append(ratings);
    }
    
    if (item.dataset.modalImg) {
      // preload the image so that it is fully loaded before adding it to the DOM.
      const modalImg = new Image();
      modalImg.src = item.dataset.modalImg;
      modalImg.alt = item.dataset.modalImgAlt;
      
      modalImg.onerror = () => {
        modalImg.remove();
      };
      
      // show modal content only after the image has been loaded so that the text and image appears at the same time.
      modalImg.onload = () => {
        modalContent.append(modalImg);
        modal.append(modalContent);
      };
    } else {
      modal.append(modalContent);
    }
    
    document.body.append(modal);
  }
}

// press Backspace to remove the modal
export function removeModal() {
  const modal = document.querySelector(`.${CLASS_NAMES.MODAL}`);
  
  if (modal) {
    modal.remove();
  }
}