import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Segecha Group – Logistics East Africa',
    short_name: 'Segecha',
    description: 'Reliable freight, cross-border transport, and fleet management across East Africa.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#F97316',
    icons: [
      {
        src: '/favicon-round.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
