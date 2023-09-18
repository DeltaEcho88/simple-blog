export const trimmedText = (content, length, prefixText = '') => {
  const contentLength = 100;
  return content.substr(0, length ? length : contentLength) + prefixText;
}

export default trimmedText;