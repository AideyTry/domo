let baseUrl = ''
let imageServerUrl = ''

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://101.132.92.96:8211'
  imageServerUrl = 'http://xlc.phc-dow.com'
} else if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://DOW-DN-135.bakheet.cn'
  imageServerUrl = 'http://192.168.4.62'
} else if (process.env.NODE_ENV === 'testing') {
  baseUrl = 'http://192.168.4.76:8222'
  imageServerUrl = 'http://192.168.4.62'
}

export {
  baseUrl,
  imageServerUrl
}
