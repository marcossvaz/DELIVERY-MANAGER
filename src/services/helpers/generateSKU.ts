export function GenerateSKU(name: string, brand: string, type: string) {
    const slug = (str: string) => str.slice(0,4).toLocaleUpperCase().trim();
    const timeStamp = Date.now().toString().slice(-3);
    return `${slug(name)}-${slug(brand)}-${slug(type)}-${timeStamp}`
}