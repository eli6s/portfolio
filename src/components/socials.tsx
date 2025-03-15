import SocialLink from './social-link';
import {
  BsDiscord,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';

type Social = {
  label: string;
  href: string;
  linkText: string;
};

type Props = {
  socials: Social[];
};

// Because we can't use the icon objects in the mdx
const iconMap = {
  Github: BsGithub,
  Discord: BsDiscord,
  LinkedIn: BsLinkedin
};

const Socials = ({ socials }: Props) => {
  return (
    <ul className="flex-col !p-0">
      {socials.map((row) => (
        <SocialLink
          label={row.label}
          linkText={row.linkText}
          href={row.href}
          icon={iconMap[row.label]}
          key={row.label}
        />
      ))}
    </ul>
  );
};

export default Socials;
