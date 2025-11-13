import Hero from '@/components/Hero'
import BlogPost from '@/components/BlogPost'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BlogPost />
      <Footer />
    </main>
  )
}
