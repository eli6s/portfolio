import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MdxImage from './mdx-image';
import CodeBlock from './codeblock';
import Aside from './aside';
import Note from './note';
import Section from './section';
import Checkbox from './checkbox';
import Socials from './socials';
import Accented from './accented';


type Props = {
  source: MDXRemoteSerializeResult;
  className?: string;
};

const components = {
  pre: (props) => {
    if (props.children?.type === 'code') {
      return (
        <CodeBlock language={props['data-language']} prettyCode={props.children} />
      );
    } else {
      return <pre {...props} />;
    }
  },
  // extract images out of the p tags into their own component
  p: (props) => {
    if (props.children?.type === 'img') {
      return <MdxImage {...props.children.props} />;
    } else {
      return <p {...props} />;
    }
  },
  section: (props) => {
    return <Section {...props} />;
  },
  input: Checkbox,
  Aside: Aside,
  Note: Note,
  Socials: Socials,
  Accented: Accented,
};

const MdxRenderer = ({ source, className }: Props) => {
  return (
    <div
      className={'markdown text-[16px] md:text-[18px] ' + (className ? className : '')}
    >
      <MDXRemote {...source} components={components} />
    </div>
  );
};

export default MdxRenderer;
