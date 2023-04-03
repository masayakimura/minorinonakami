import {
  TwitterShareButton,
  FacebookShareButton,
  LineShareButton,
  HatenaShareButton,
  TwitterIcon,
  FacebookIcon,
  LineIcon,
  HatenaIcon,
} from 'react-share'

import { FC } from 'react'

export const ShareIcons: FC = () => {
  return (
    <div className="my-4 flex justify-center gap-4">
      <TwitterShareButton url="https://guminonakami.com" title="ぐみのなかみ">
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url="https://prism-cube.com" quote="ぐみのなかみ">
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <LineShareButton url="https://prism-cube.com" title="ぐみのなかみ">
        <LineIcon size={40} round={true} />
      </LineShareButton>
      <HatenaShareButton url="https://prism-cube.com" title="ぐみのなかみ">
        <HatenaIcon size={40} round={true} />
      </HatenaShareButton>
    </div>
  )
}
