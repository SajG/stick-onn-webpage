import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const expected = `Bearer ${process.env.SANITY_REVALIDATE_SECRET}`

  if (authHeader !== expected) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()

    const type = body?._type

    if (type === 'post') {
      revalidatePath('/blog')
      revalidatePath('/sitemap.xml')
      if (body?.slug?.current) {
        revalidatePath(`/blog/${body.slug.current}`)
      }
    } else if (type === 'category' || type === 'author') {
      revalidatePath('/blog')
    } else {
      revalidatePath('/blog')
      revalidatePath('/sitemap.xml')
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 },
    )
  }
}
