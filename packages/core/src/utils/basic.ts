import { Configure } from './types'

export function basicAuthorization({ ID, HASH }: Omit<Configure, 'BASE_URL'>) {
    const basic = Buffer.from(`${ID}:${HASH}`).toString('base64')
    return `Basic ${basic}`
}
