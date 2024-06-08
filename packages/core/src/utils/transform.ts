export function transformArrayToString(
    value: string | string[] | number | number[] | undefined,
) {
    if (Array.isArray(value)) {
        return value.join(',')
    }
    return value
}
