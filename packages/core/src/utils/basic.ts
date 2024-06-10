import { Configure } from './types.js'

export function basicAuthorization({ ID, HASH }: Omit<Configure, 'BASE_URL'>) {
    const basic = Buffer.from(`${ID}:${HASH}`).toString('base64')
    return `Basic ${basic}`
}
