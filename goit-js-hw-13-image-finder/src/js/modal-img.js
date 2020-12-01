import * as basicLightbox from 'basiclightbox';

export function onClickImage({ target: { dataset } }) {
  basicLightbox
    .create(
      `<img width="" height="" src="${dataset.sourse}">
  `,
    )
    .show();
}