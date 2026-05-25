import { JsonLd } from './JsonLd'

type BreadcrumbItem = {
  name: string
  item: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `https://segecha.com${item.item}`,
    })),
  }

  return <JsonLd data={schema} />
}
