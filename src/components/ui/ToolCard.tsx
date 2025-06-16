import Link from 'next/link'

interface ToolCardProps {
  title: string
  description: string
  href: string
  icon?: React.ReactNode
}

export default function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center gap-4">
        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        {description}
      </p>
      <div className="mt-4 flex items-center text-sm font-medium text-primary-600">
        Try it now
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  )
} 