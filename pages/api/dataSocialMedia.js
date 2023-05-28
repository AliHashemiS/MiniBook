import { library } from '@fortawesome/fontawesome-svg-core'

import { faLink } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faLinkedinIn,
  faFacebookF
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faLink
)

export default function handler (req, res) {
  res.status(200).json(
    [
      {
        id: 1,
        icon: faFacebookF,
        link: 'https://www.facebook.com/'
      },
      {
        id: 2,
        icon: faTwitter,
        link: 'https://twitter.com/'
      },
      {
        id: 3,
        icon: faLinkedinIn,
        link: 'https://www.linkedin.com/'
      },
      {
        id: 4,
        icon: faLink,
        link: process.env.link
      }
    ]
  )
}
