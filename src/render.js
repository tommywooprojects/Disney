import {
  ALT_TEXT_NO_IMAGE,
  CLASS_NAMES,
  DEFAULT_TITLE,
  ELEMENT_IDS,
  IMG_SIZE,
  ITEM_TYPES
} from "./constants";

export default function renderContent(content) {
  const app = document.getElementById(ELEMENT_IDS.APP);
  
  content.forEach(rowData => {
    const rowTitle = document.createElement('h1');
    rowTitle.className = CLASS_NAMES.ROW_TITLE;
    rowTitle.innerText = rowData?.set?.text?.title?.full?.set?.default?.content ?? DEFAULT_TITLE;
    app.append(rowTitle);
    
    const thumbnailRow = document.createElement('section');
    thumbnailRow.className = CLASS_NAMES.THUMBNAIL_ROW;
    
    rowData?.set?.items.forEach(item => {
      const thumbnail = document.createElement('div');
      thumbnail.className = CLASS_NAMES.THUMBNAIL;
      
      const img = new Image();
      const itemType = item?.type;
      
      const {title, tileImage, modalImage, imageAlt} = getImageAndThumbnailData(itemType, item);
      
      img.src = tileImage;
      img.alt = imageAlt;
      
      // create a placeholder div and remove the Image for images which cannot be retrieved (like The Mandalorian)
      img.onerror = () => {
        const placeholder = document.createElement('div');
        placeholder.className = CLASS_NAMES.PLACEHOLDER;
        placeholder.innerText = img.alt || ALT_TEXT_NO_IMAGE;
        
        thumbnail.append(placeholder);
        img.remove();
      };
      
      thumbnail.dataset.title = title;
      thumbnail.dataset.modalImg = modalImage;
      thumbnail.dataset.modalImgAlt = imageAlt;
      
      const ratings = item?.ratings?.[0]?.value;
      if (ratings) {
        thumbnail.dataset.ratings = ratings;
      }
      
      const releaseDate = item?.releases?.[0]?.releaseDate;
      if (releaseDate) {
        thumbnail.dataset.releaseDate = releaseDate;
      }
      
      thumbnail.append(img);
      thumbnailRow.append(thumbnail);
    });
    
    app.append(thumbnailRow);
  });
}

function getImageAndThumbnailData(itemType, item) {
  let title;
  let tileImage;
  let modalImage;
  
  if (itemType === ITEM_TYPES.DMC_SERIES) {
    title = item?.text?.title?.full?.series?.default?.content;
    tileImage = item?.image?.tile?.[IMG_SIZE]?.series?.default?.url;
    modalImage = item?.image?.hero_tile?.[IMG_SIZE]?.series?.default?.url;
  } else if (itemType === ITEM_TYPES.DMC_VIDEO) {
    title = item?.text?.title?.full?.program?.default?.content;
    tileImage = item?.image?.tile?.[IMG_SIZE]?.program?.default?.url;
    modalImage = item?.image?.hero_tile?.[IMG_SIZE]?.program?.default?.url;
  } else if (itemType === ITEM_TYPES.STANDARD_COLLECTION) {
    title = item?.text?.title?.full?.collection?.default?.content;
    tileImage = item?.image?.tile?.[IMG_SIZE]?.default?.default?.url;
    
    // sometimes hero_tile does not exist in Standard Collection so use hero_collection instead
    modalImage = item?.image?.hero_tile?.[IMG_SIZE]?.default?.default?.url ||
      item?.image?.hero_collection?.[IMG_SIZE]?.default?.default?.url;
  }
  
  const imageAlt = title || ALT_TEXT_NO_IMAGE;
  
  return {
    title,
    tileImage,
    modalImage,
    imageAlt
  }
}