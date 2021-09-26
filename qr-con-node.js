var QRCode = require('qrcode')

let texto = `NumFac:UNIV337 FecFac:2021-03-10 HorFac:11:10:00-05:00 NitFac:901260162 DocAdq:832009861 ValFac:302521.0 ValIva:57479.0 ValOtroIm:0 ValTolFac:360000.01 CUFE:106022aaeb5615f264d783c0b3c6a68c8ffc294f4cf2471e926cce3761e2b7d0d2a26562f40fd24fa7c248eaba194551 https://catalogo-vpfe.dian.gov.co/document/searchqr?documentkey=106022aaeb5615f264d783c0b3c6a68c8ffc294f4cf2471e926cce3761e2b7d0d2a26562f40fd24fa7c248eaba194551`

QRCode.toDataURL(texto, function (err, url) {
  console.log({ 'QRCode.toDataURL': url })
})

QRCode.toString(texto, function (err, url) {
  console.log({ 'QRCode.toString': url })
})