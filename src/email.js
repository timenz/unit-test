export function sendEmail () {
  // faking sending email
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve('email sent')
    }, 5000)
  })
}