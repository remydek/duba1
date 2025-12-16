import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import { prisma } from '@/utils/prisma'
import Media from './Media'
import { NewsArticle } from '@/schemas/news'

interface PageProps {
  params: { slug: string }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params

  const selectedArticle: NewsArticle | null = await prisma.news_articles.findUnique({
    where: { slug },
    select: {
      id: true,
      author: true,
      title: true,
      slug: true,
      description: true,
      ai_title: true,
      ai_generated_summary: true,
      ai_description: true,
      url: true,
      source: true,
      image: true,
      category: true,
      language: true,
      country: true,
      published_at: true,
      created_at: true,
    },
  })

  if (!selectedArticle) return <p>Article not found</p>

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-20">
        <Button
          variant="ghost"
          className="mb-8 flex items-center gap-2 text-gray-900 dark:text-gray-100"
          asChild
        >
          <Link href="/news">
            <ArrowLeft className="h-5 w-5" />
            Back to News
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {selectedArticle.image && (
              <Media url={selectedArticle.image} title={selectedArticle.title} />
            )}

            <Card className="shadow-xl dark:shadow-gray-800 hover:shadow-2xl dark:hover:shadow-gray-700 transition-shadow bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <article className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-gray-50">
                    {selectedArticle.title}
                  </h1>
                  {selectedArticle.ai_description && (
                    <div className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                      <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-gray-50">
                        Description
                      </h3>
                      <p
                        className="prose prose-lg max-w-full dark:prose-invert"
                        dangerouslySetInnerHTML={{
                          __html: selectedArticle.ai_description.replace(
                            /\./g,
                            '.<br /><br />'
                          ),
                        }}
                      />
                    </div>
                  )}
                </article>
              </CardContent>
            </Card>
          </div>

          <aside className="hidden lg:block">
            <Card className="sticky top-24 p-6 shadow-lg dark:shadow-gray-800 bg-white dark:bg-gray-800">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-50">
                About this Article
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug">
                Published:{' '}
                {selectedArticle.published_at
                  ? new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }).format(selectedArticle.published_at)
                  : 'N/A'}
                <br />
                Source: {selectedArticle.source || 'Unknown'}
                <Button variant="link" className="text-primary hover:underline" asChild>
                  <a
                    href={selectedArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Original Article
                  </a>
                </Button>
              </p>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
