export default function handler (req, res) {
  res.status(200).json(
    [
      {
        id: 1,
        idTitle: 2,
        name: 'Say Hi to Mom and Goodbye to Your Smartphone',
        link: process.env.URL + '/chapters/chapter1/say-hi-to-mom-and-goodbye-to-your-smartphone'
      },
      {
        id: 2,
        idTitle: 2,
        name: 'Find out about AR Technology the easy way',
        link: process.env.URL + '/chapters/chapter1/find-out-about-ar-technology-the-easy-way'
      },
      {
        id: 3,
        idTitle: 2,
        name: 'The Apple XR Device: Is Apple Mixed Reality Good Enough?',
        link: process.env.URL + '/chapters/chapter1/the-apple-xr-device-is-apple-mixed-reality-good-enough'
      },
      {
        id: 4,
        idTitle: 3,
        name: 'Catching up is also hard to do',
        link: process.env.URL + '/chapters/chapter2/catching-up-is-also-hard-to-do'
      },
      {
        id: 5,
        idTitle: 3,
        name: 'The Basics of Hardware',
        link: process.env.URL + '/chapters/chapter2/the-basics-of-hardware'
      },
      {
        id: 6,
        idTitle: 3,
        name: 'The Future is Clear with the Right Hardware',
        link: process.env.URL + '/chapters/chapter2/the-future-is-clear-with-the-right-hardware'
      },
      {
        id: 7,
        idTitle: 4,
        name: 'AI as a personal assistant',
        link: process.env.URL + '/chapters/chapter3/ai-as-a-personal-assistant'
      },
      {
        id: 8,
        idTitle: 4,
        name: 'Types of AI (as defined by Chat.OpenAI)',
        link: process.env.URL + '/chapters/chapter3/types-of-ai-(as-defined-by-chat-open-ai)'
      },
      {
        id: 9,
        idTitle: 4,
        name: 'AI–A Personal OS?',
        link: process.env.URL + '/chapters/chapter3/ai-a-personal-os'
      },
      {
        id: 10,
        idTitle: 4,
        name: 'AI + AR Glasses for the Real World',
        link: process.env.URL + '/chapters/chapter3/ai-ar-glasses-for-the-real-world'
      },
      {
        id: 11,
        idTitle: 5,
        name: 'How The World Can Be Our Canvas',
        link: process.env.URL + '/chapters/chapter4/how-the-world-can-be-our-canvas'
      },
      {
        id: 12,
        idTitle: 5,
        name: 'Spatial Content Discovery',
        link: process.env.URL + '/chapters/chapter4/spatial-content-discovery'
      },
      {
        id: 13,
        idTitle: 6,
        name: 'The Augmented Print Effect',
        link: process.env.URL + '/chapters/chapter5/the-augmented-print-effect'
      },
      {
        id: 14,
        idTitle: 6,
        name: 'When Books Go Digital',
        link: process.env.URL + '/chapters/chapter5/when-books-go-digital'
      },
      {
        id: 15,
        idTitle: 7,
        name: 'The Virtual World of Fashion',
        link: process.env.URL + '/chapters/chapter6/the-virtual-world-of-fashion'
      },
      {
        id: 16,
        idTitle: 7,
        name: 'The World is a Giant Trunk Show',
        link: process.env.URL + '/chapters/chapter6/the-world-is-a-giant-trunk-show'
      },
      {
        id: 17,
        idTitle: 7,
        name: 'Apple and The Fashion & Luxury Industry',
        link: process.env.URL + '/chapters/chapter6/apple-and-the-fashion-and-luxury-industry'
      },
      {
        id: 18,
        idTitle: 8,
        name: 'Everything is Connected',
        link: process.env.URL + '/chapters/chapter7/everything-is-connected'
      },
      {
        id: 19,
        idTitle: 8,
        name: 'Virtual Air Rights',
        link: process.env.URL + '/chapters/chapter7/virtual-air-rights'
      },
      {
        id: 20,
        idTitle: 9,
        name: 'The Rise of AR Glasses',
        link: process.env.URL + '/chapters/chapter8/the-rise-of-ar-glasses'
      },
      {
        id: 21,
        idTitle: 9,
        name: 'Avoiding a Data Privacy Nightmare',
        link: process.env.URL + '/chapters/chapter8/avoiding-a-data-privacy-nightmare'
      },
      {
        id: 22,
        idTitle: 9,
        name: 'Digital Minimalism in a Post-Smartphone Future',
        link: process.env.URL + '/chapters/chapter8/digital-minimalism-in-a-post-smartphone-future'
      },
      {
        id: 23,
        idTitle: 9,
        name: 'Shaping a Positive Future with AR Glasses',
        link: process.env.URL + '/chapters/chapter8/shaping-a-positive-future-with-ar-glasses'
      },
      {
        id: 24,
        idTitle: 11,
        name: 'Introduction Reference',
        link: process.env.URL + '/chapters/references/introduction'
      },
      {
        id: 25,
        idTitle: 11,
        name: 'Chapter 1 Reference',
        link: process.env.URL + '/chapters/references/chapter1'
      },
      {
        id: 26,
        idTitle: 11,
        name: 'Chapter 2 Reference',
        link: process.env.URL + '/chapters/references/chapter2'
      },
      {
        id: 27,
        idTitle: 11,
        name: 'Chapter 3 Reference',
        link: process.env.URL + '/chapters/references/chapter3'
      },
      {
        id: 28,
        idTitle: 11,
        name: 'Chapter 4 Reference',
        link: process.env.URL + '/chapters/references/chapter4'
      },
      {
        id: 29,
        idTitle: 11,
        name: 'Chapter 5 Reference',
        link: process.env.URL + '/chapters/references/chapter5'
      },
      {
        id: 30,
        idTitle: 11,
        name: 'Chapter 6 Reference',
        link: process.env.URL + '/chapters/references/chapter6'
      },
      {
        id: 31,
        idTitle: 11,
        name: 'Chapter 7 Reference',
        link: process.env.URL + '/chapters/references/chapter7'
      },
      {
        id: 32,
        idTitle: 11,
        name: 'Chapter 8 Reference',
        link: process.env.URL + '/chapters/references/chapter8'
      },
      {
        id: 33,
        idTitle: 11,
        name: 'Epilogue Reference',
        link: process.env.URL + '/chapters/references/epilogue'
      }
    ]
  )
}
