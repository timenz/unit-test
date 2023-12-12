import { sendEmail } from "./email";

export async function proses () {
  let str = 'mulai '
  str += await sendEmail()
  return str
}