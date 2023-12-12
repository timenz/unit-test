import { expect, test } from 'vitest'
import { sendEmail } from '../src/email'

setTimeout = (cb) => { cb() }

test('sending email', async () => {
  const res = await sendEmail()
  expect(res).toBe('email sent')
})