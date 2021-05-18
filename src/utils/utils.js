
export const getImageSizeByZoom = (x, y, zoom) => [x * zoom * 0.5, y * zoom * 0.5];

export const getYearsArray = (yearStart, yearEnd) => {
  return Array.from({length: yearEnd - yearStart + 1}, (_, i) => i + yearStart)
}

export const getEventIconSize = (zoom) => {

  switch (zoom) {
    case 6:
      return 25 + (zoom - 3)
    case 7:
      return 33 + (zoom - 3)
    default:
      return 15 + (zoom - 3);
  }

}