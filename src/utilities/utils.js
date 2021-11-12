export const restructureDate = (originalDate) => {
    let separateDates = originalDate.split('-');
    let [year, month, day] = separateDates;
    return `${month}-${day}-${year}`;
  }

export const secureImages = (userData) => {
  const urls = userData.data.attributes.images_urls.map(url => {
    if (url.slice(0, 5) === 'http:') {
      return`https${url.slice(4, url.length)}`
    }
    return url
  })
  const profile_url = userData.data.attributes.profile_picture_url
  if (profile_url.slice(0, 5) === 'http:') {
    userData.data.attributes.profile_picture_url = `https${profile_url.slice(4, profile_url.length)}`
    userData.data.attributes.images_urls = urls
  }
  return userData
}  