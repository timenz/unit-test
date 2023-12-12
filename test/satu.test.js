import { expect, test } from 'vitest'
import { jumlah } from '../src/satu'

test('1 tambah 2 sama dengan 3', () => {
  expect(jumlah(1, 2)).toBe(3)
})

test('0 tambah 2 sama dengan 2', () => {
  expect(jumlah(0, 2)).toBe(2)
})

test('return null jika memasukkan parameter selain number', () => {
  expect(jumlah('satu', 'dua')).toBe(null)
})