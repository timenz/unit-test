import { expect, test } from 'vitest'
import { proses } from '../src/dua'
// import { vi } from 'vitest'

// vi.mock('./email', () => {
//   return {
//     sendEmail: () => 'email sent'
//   }
// })

test('proses sending email', async () => {
  const res = await proses()
  expect(res).toBe('mulai email sent')
})