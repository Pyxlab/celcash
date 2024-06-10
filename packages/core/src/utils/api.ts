import { ApiFetcherArgs, tsRestFetchApi } from '@ts-rest/core'
import { ZodEffects, ZodObject } from 'zod'

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export const api = async (
    args: ApiFetcherArgs,
): Promise<{
    status: number
    body: unknown
    headers: Headers
    path: string
    method: Method
}> => {
    const path = new URL(args.path)

    if (
        ('body' in args.route &&
            args.route.body !== undefined &&
            args.route.body instanceof ZodObject) ||
        ('body' in args.route &&
            args.route.body !== undefined &&
            args.route.body instanceof ZodEffects)
    ) {
        const validation = args.route.body.safeParse(args.rawBody || {})

        if (validation.success) {
            args.body = JSON.stringify(validation.data)
            args.rawBody = validation.data
        } else {
            const headers = new Headers()

            headers.set('Content-Type', 'application/json')
            headers.set('X-Error-Message', 'Invalid body')
            headers.set('X-Error-Code', '507')

            return {
                status: 507,
                body: validation.error,
                headers,
                path: path.toString(),
                method: args.method as Method,
            }
        }
    }

    if (
        (!!args.route.query && args.route.query instanceof ZodObject) ||
        (!!args.route.query && args.route.query instanceof ZodEffects)
    ) {
        const entries = Object.entries(args.rawQuery || {}).filter(
            ([_, v]) => !['', null, undefined].includes(v),
        )

        const validation = args.route.query.safeParse(
            Object.fromEntries(entries),
        )

        if (validation.success) {
            const searchParams = new URLSearchParams(
                validation.data as Record<string, string>,
            )
            path.search = searchParams.toString()
        } else {
            const headers = new Headers()

            headers.set('Content-Type', 'application/json')
            headers.set('X-Error-Message', 'Invalid query')
            headers.set('X-Error-Code', '507')

            return {
                status: 507,
                body: validation.error,
                headers,
                path: path.toString(),
                method: args.method as Method,
            }
        }
    }

    return tsRestFetchApi({
        ...args,
        path: path.toString(),
    }).then(response => ({
        ...response,
        path: path.toString(),
        method: args.method as Method,
    }))
}
