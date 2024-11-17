const URLS = {
  API_BASE_URL: 'https://cd-static.bamgrid.com/dp-117731241344',
  HOME_ENDPOINT: '/home.json',
  SET_ENDPOINT: '/sets/',
};
export const baseHomeUrl = `${URLS.API_BASE_URL}${URLS.HOME_ENDPOINT}`;
export const baseSetUrl = `${URLS.API_BASE_URL}${URLS.SET_ENDPOINT}`;

export const IMG_SIZE = '1.78';

export const DEFAULT_TITLE = 'Untitled';
export const ALT_TEXT_NO_IMAGE = 'Image not available';

export const ITEM_TYPES = {
  DMC_SERIES: 'DmcSeries',
  DMC_VIDEO: 'DmcVideo',
  STANDARD_COLLECTION: 'StandardCollection'
};

export const KEYS = {
  ARROW_RIGHT: 'ArrowRight',
  ARROW_LEFT: 'ArrowLeft',
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  ENTER: 'Enter',
  BACKSPACE: 'Backspace',
  // there is no 'B' or 'A' on a tv remote. this is for the Disney Magic Easter Egg
  B: 'b',
  A: 'a'
};

export const ELEMENT_IDS = {
  APP: 'app',
  ZERO_SLEIGH: 'zero-sleigh'
};

export const CLASS_NAMES = {
  ROW_TITLE: 'row-title',
  THUMBNAIL_ROW: 'thumbnail-row',
  THUMBNAIL: 'thumbnail',
  FOCUSED: 'focused',
  PLACEHOLDER: 'placeholder',
  MODAL: 'modal',
  MODAL_CONTENT: 'modal-content',
};

// for Disney Magic
export const KONAMI_CODE = [
  KEYS.ARROW_UP,
  KEYS.ARROW_UP,
  KEYS.ARROW_DOWN,
  KEYS.ARROW_DOWN,
  KEYS.ARROW_LEFT,
  KEYS.ARROW_RIGHT,
  KEYS.ARROW_LEFT,
  KEYS.ARROW_RIGHT,
  KEYS.B,
  KEYS.A
];