import SystemImage from "@/app/_components/img";
import SvgFaceBook from "@/svg/facebook";
import SvgInstagram from "@/svg/instagram";
import SvgTwitter from "@/svg/twitter";
import { ROUTERS } from "@/ultil/router";
import { MessageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { ReactNode } from 'react';
import SystemLink from '@/app/_components/link';

interface UserProfileProps {
  name: string;
  username: string;
  img: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  username,
  img
}) => (<div className="user-profile grid grid-cols-[80px_1fr] gap-[20px] items-center ">
  <SystemImage
    src={img}
    alt={username}
    ratio={100}
    radius={'50%'}
  />
  <div className={'flex gap-[15] items-center'}>
    <div className={'flex-1'}>
      <p className="text-size-2 font-bold capitalize mb-0">{name}</p>
      <p className="text-sub text-size-small mb-0">@{username}</p>
    </div>
    <Button
      href={ROUTERS.chat}
      icon={<MessageOutlined/>}
      size={'small'}
      variant={'outlined'}
      color={'primary'}
    >Message</Button>
  </div>
</div>);

interface UserContactInfoProps {
  languages: string[];
  email: string;
  phone: string;
}

const UserContactInfo: React.FC<UserContactInfoProps> = ({
  languages,
  email,
  phone
}) => (<div className="text-size-small mt-[15px] grid grid-cols-1 gap-[10px]">
  <div>
    <span className={'material-symbols-rounded text-sub !font-[300] align-text-top !text-[20px] mt-[-2px] mr-[5px]'}>language</span>
    <span className={'font-[600]'}>Language:</span> {languages.join(' / ')}</div>
  <div>
    <span className={'material-symbols-rounded text-sub !font-[300] align-text-top !text-[20px] mt-[-2px] mr-[5px]'}>mail</span>
    <span className={'font-[600]'}>Email:</span> <span className={'text-primary underline'}>{email}</span></div>
  <div>
    <span className={'material-symbols-rounded text-sub !font-[300] align-text-top !text-[20px] mt-[-2px] mr-[5px]'}>phone</span>
    <span className={'font-[600]'}>Phone:</span> {phone}</div>
</div>);

interface SocialLink {
  platform: ReactNode;
  url: string;
}

interface UserSocialLinksProps {
  socialLinks: SocialLink[];
}

const UserSocialLinks: React.FC<UserSocialLinksProps> = ({socialLinks}) => (
  <div className="mt-[15px] flex gap-[10px] items-center flex-wrap">
    {socialLinks.map((link, index) => (<SystemLink
      key={index}
      url={link.url}
      className={`flex items-center justify-center text-sub border border-solid border-border-lower rounded-full w-[36px] h-[36px] transition-all hover:text-primary hover:border-primary`}
    >
      {link.platform}
    </SystemLink>))}
  </div>);

export const BoxUserProfile: React.FC = () => {
  const user = {
    name: 'Karen Savag',
    username: 'karen',
    thumbnail: '/asset/dashboard/people-1.jpg',
    languages: [
      'English',
      'French',
      'Spanish'
    ],
    email: 'example@example.com',
    phone: '+1123456789',
    socialLinks: [
      {
        platform: <SvgTwitter
          width={17}
          height={17}
        />,
        url: 'https://twitter.com'
      },
      {
        platform: <SvgInstagram
          width={17}
          height={17}
        />,
        url: 'https://instagram.com'
      },
      {
        platform: <SvgFaceBook
          width={17}
          height={17}
        />,
        url: 'https://facebook.com'
      },
    ],
  };

  return (<div className="user-detail-section dashboard-box">
    <UserProfile
      name={user.name}
      username={user.username}
      img={user.thumbnail}
    />
    <UserContactInfo
      languages={user.languages}
      email={user.email}
      phone={user.phone}
    />
    <UserSocialLinks socialLinks={user.socialLinks}/>
  </div>);
};