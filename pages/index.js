import matter from 'gray-matter'
import Layout from '../components/Layout'
import Link from 'next/link'
import React from "react"
const Index = ({ posts, title, description, createdBy, createdAt,header, ...props }) => {
  return (
    <Layout  header={header}>
      <main>
        <div className="index mt-2">
          <div id="main">
            <div className="inner">
            {/* <header className="tc_article-header tc_article-width">
                <Link href={{ pathname: `/` }}>
                    <a>{header.title}</a>
                </Link>
            </header> */}
              <section className="tiles">

                {
                posts.length > 0 &&  posts.map((post, index) => (
                    
                    <article key={index}>
                      <div className="card-grid-space">
                        <div className="num"></div>
                        <Link href={{ pathname: `/post/${post.slug}` }}>
                        <a className="card"
                          style={{ '--bg-img': `url(${post.frontmatter.path})` }}
                        >
                          <div> <h1>{post.frontmatter.name}</h1> <hr className="new" />
                            <p>{post.frontmatter.description}</p>
                            <div className="date"></div>
                            <div className="tags">
                              <div className="tag"></div>
                            </div>
                          </div>
                        </a>
                        </Link>
                      </div>
                    </article>
                  ))
                }

              </section>
            </div>
          </div>

        </div>
      </main>
    </Layout>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      }
    })
    return data
  })(require.context('../posts', true, /\.md$/))


  const content = await import('../header/header.md')
  const data = matter(content.default)


   return {
    props: {
      posts,
      header:  data.data,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}




