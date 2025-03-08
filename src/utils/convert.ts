export const convertKeyToLabel = (key: string | undefined): string => {
    if (!key) return ''

    return key
        .replace(/(_|-)/g, ' ')
        .trim()
        .replace(/\w\S*/g, str => str.charAt(0).toUpperCase() + str.substr(1))
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
}