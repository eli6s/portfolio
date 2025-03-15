import { DOMAIN } from '../util/constants';
import MdxRenderer from './mdx-renderer';
import { NextSeo } from 'next-seo';
import MainContainer from './main-container';
import { Heading } from '../util/extract-headings';
import { Media } from '../util/media-context';
import TOC from './toc';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MetaDataStub } from '../util/posts';


type Props = {
  page: MetaDataStub;
  mdxSerialized: MDXRemoteSerializeResult;
  toc?: Heading[];
  scrollUp?: boolean;
};

const MdxPage = ({ page, mdxSerialized, toc }: Props) => {
  return (
    <>
      <NextSeo
        title={page.title.toLowerCase()}
        description={page.abstract}
        canonical={DOMAIN + '/' + page.slug}
        openGraph={{
          title: page.title,
          description: page.abstract,
          url: DOMAIN + '/' + page.slug,
          images: page.image
            ? [
                {
                  url: '/img/' + page.image,
                  alt: page.title,
                },
              ]
            : [],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <MainContainer>
        {toc && (
          <Media greaterThanOrEqual="widescreen">
            <TOC headings={toc} />
          </Media>
        )}
        <MdxRenderer source={mdxSerialized} />
      </MainContainer>
    </>
  );
};

export default MdxPage;
