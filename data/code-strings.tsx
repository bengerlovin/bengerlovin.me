export const typesCodeString =
    `export type MetricResult = {
    id: string;
    title: string;
    description: string;
    score: number;
    displayValue: string;
    numericUnit: 'millisecond' | 'second' | 'unitless'
    numericValue: number;
}

export type AuditResult = {
    description: string;
    id: string;
    numericUnit: 'millisecond' | 'second' | 'unitless' | 'element'
    score: number;
    scoreDisplayMode: string;
    displayValue: string;
    title: string;
}   
`

export const apiCallCodeString =
    `export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    let requestURLMobile = setUpQuery(req.query.url as string, 'mobile')
    let requestURLDesktop = setUpQuery(req.query.url as string, 'desktop')

    let mobileResults = await fetchPageResultsData(requestURLMobile)
    let desktopResults = await fetchPageResultsData(requestURLDesktop)

    let fullResults = {
        desktop: desktopResults,
        mobile: mobileResults,
    }

    try {
        return res.status(200).json(fullResults)
    } catch (error) {
        return res.status(500).send("error here")
    }
}
`