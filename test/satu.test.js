import { expect, test } from 'vitest'
import { jumlah } from '../src/satu'

test('1 tambah 2 sama dengan 3', () => {
  expect(jumlah(1, 2)).toBe(3)
})