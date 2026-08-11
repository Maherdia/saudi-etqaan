export function getLocalizedValue(
    value,
    lang = 'en',
) {
    if (
        value &&
        typeof value === 'object' &&
        !Array.isArray(value)
    ) {
        return (
            value[lang] ??
            value.en ??
            ''
        );
    }

    return value ?? '';
}