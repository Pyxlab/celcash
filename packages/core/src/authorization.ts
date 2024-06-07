export function basicAuthorization({
    ID,
    HASH,
}: {
    ID: number
    HASH: string
}) {
    const basic = Buffer.from(`${ID}:${HASH}`).toString('base64')
    return `Basic ${basic}`
}
