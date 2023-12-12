import { sendEmail } from "./email";

export async function proses () {
  // statement 1
  let str = 'mulai '
  // statement dua => memanggil fungsi send email 
  str += await sendEmail()
  return str
}