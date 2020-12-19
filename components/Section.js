import Link from 'next/link'

export default function Section({ text, createdBy, createdAt }) {
    return (
        <>
            <div className="tc_article-header tc_article-width">
                <h1>{text}</h1>
                <div>

                    <cite className="tc_article-meta-writer-name">
                        By <a title="More by Kovie Biakolo" href="index.html" sl-processed="1">
                            {createdBy}</a>,
                    <time className="article-date" datetime="2013-04-05 14:52:55-04:00">{createdAt}</time>
                    </cite>

                </div>

            </div>
        </>
    )
}