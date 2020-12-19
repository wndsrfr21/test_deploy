import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import Section from '../../components/Section'

export default function BlogPost({ siteTitle, text, createdBy, createdAt, frontmatter, markdownBody, header }) {
  if (!frontmatter) return <></>

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`} text={text}  createdBy={createdBy} createdAt={createdAt}>
      <header className="tc_article-header tc_article-width ">
        <Link href={{ pathname: `/` }}>
          <a>{header.title}</a>
        </Link>
      </header>
      <div className="posts ">
        <div className="container">

          <Section text={frontmatter.text} createdBy={frontmatter.createdBy} createdAt={frontmatter.createdAt} />
        </div>
        <article>
          <img className="cover-img" src={frontmatter.cover} />
          <div className="blog container">
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  const contentHeader = await import('../../header/header.md')
  const dataHeader = matter(contentHeader.default)

  return {
    props: {
      siteTitle: config.title,
      header: dataHeader.data,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths,
    fallback: false,
  }
}