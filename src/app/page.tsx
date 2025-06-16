import { DocumentTextIcon } from '@heroicons/react/24/outline'
import ToolCard from '@/components/ui/ToolCard'

const tools = [
  {
    title: 'Word Counter',
    description: 'Count words, characters, and paragraphs in your text with real-time updates.',
    href: '/tools/word-counter',
    icon: <DocumentTextIcon className="h-6 w-6" />,
  },
  // More tools will be added here
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Tools Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your one-stop platform for 100+ free online tools. No login required, instant access to powerful utilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            icon={tool.icon}
          />
        ))}
      </div>
    </div>
  )
} 