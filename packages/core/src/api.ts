import { ApiFetcherArgs, tsRestFetchApi } from '@ts-rest/core'
import { ZodObject } from 'zod'

export const api = async (args: ApiFetcherArgs): Promise<{
    status: number;
    body: unknown;
    headers: Headers;
}> => {
    const path = new URL(args.path)

    if (
        'body' in args.route &&
        args.route.body !== undefined &&
        args.route.body instanceof ZodObject
    ) {
        const validation = args.route.body.safeParse(args.rawBody)

        if (validation.success) {
            args.body = JSON.stringify(validation.data)
            args.rawBody = validation.data
        } else {
            const headers = new Headers()

            headers.set('Content-Type', 'application/json')
            headers.set('X-Error-Message', 'Invalid body')
            headers.set('X-Error-Code', '512')
            
            return {
                status: 512,
                body: validation.error,
                headers
            }
        }
    }

    return tsRestFetchApi({
        ...args,
        path: path.toString(),
    })
}
