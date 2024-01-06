export const getAnimeResponse = async(resource: string, query: string | undefined) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async(resource: string, objectProperty: string) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap((item: { [x: string]: any }) => item[objectProperty])
}

export const reproduce = (data: string | any[], gap: number) => {
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}