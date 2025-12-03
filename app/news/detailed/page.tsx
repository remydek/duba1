'use client'
import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  ArrowLeft,
} from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/stores'
import { useEffect } from 'react'


export default function PropertyDetailPage() {
  const selectedArticle = useSelector((state: RootState) => state.news.selectedArticle);

  const router = useRouter();

  useEffect(() => {
    if (!selectedArticle) router.replace('/news');
  }, [selectedArticle, router]);

  if (!selectedArticle) return notFound();
  return (

    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/news">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex">
              <div className="flex-none w-1/3 grid grid-cols-2 gap-4">
                {selectedArticle.image && selectedArticle.image && (
                  <div className="col-span-2 relative h-[500px] rounded-xl overflow-hidden">
                    <Image
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                )}

              </div>
              <Card className='flex-1' >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{selectedArticle.title}</h1>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-3">Description</h3>
                    <p className="text-muted-foreground">{selectedArticle.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
