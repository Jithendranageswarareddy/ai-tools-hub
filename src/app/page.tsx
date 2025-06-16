import Link from 'next/link'

const tools = [
  {
    name: 'YouTube Thumbnail Downloader',
    description: 'Download high-quality thumbnails from YouTube videos',
    href: '/tools/youtube-thumbnail',
  },
  {
    name: 'YouTube Tag Extractor',
    description: 'Extract tags from any YouTube video',
    href: '/tools/youtube-tags',
  },
  {
    name: 'Resume Analyzer',
    description: 'Analyze and improve your resume',
    href: '/tools/resume-analyzer',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Multiple Toolkit</h1>
      <p className="mt-4 text-xl">Your Online Tools Hub</p>
    </main>
  )
} 