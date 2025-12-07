/**
 * Обрезает строку до указанной длины и добавляет многоточие
 */

export const textCropping = (text, maxLength) => {
  if (typeof text !== "string") {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";
};
