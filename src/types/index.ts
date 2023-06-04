export type HighlightsProps = {
    title: string
    description: string
    image: string
}

export type HighlightProps = {
    name: string
    description: string
    image: string
    activities: {
        name: string
    }[]
}

export type CatergoriesProps = {
    name: string
    activities: {
        title: string
    }[]
}

export type ALLSEOProps={
    title:string
    description:string
}