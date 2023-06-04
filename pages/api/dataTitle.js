export default function handler (req, res) {
  res.status(200).json(
    [
      {
        id: 1,
        name: 'START HERE',
        link: process.env.URL + '/chapters/quickstart'
      },
      {
        id: 2,
        name: 'CHAPTER 1: The Future of AR Glasses, in a Nutshell',
        link: process.env.URL + '/chapters/chapter1/the-future-of-ar-glasses-in-a-nutshell'
      },
      {
        id: 3,
        name: 'CHAPTER 2: Hardware is the Hard Part',
        link: process.env.URL + '/chapters/chapter2/hardware-is-the-hard-part'
      },
      {
        id: 4,
        name: 'CHAPTER 3: Could AR and AI Glasses Make Our Lives Better?',
        link: process.env.URL + '/chapters/chapter3/could-ar-and-ai-glasses-make-our-lives-better'
      },
      {
        id: 5,
        name: 'CHAPTER 4: The World is Our Canvas',
        link: process.env.URL + '/chapters/chapter4/the-world-is-our-canvas'
      },
      {
        id: 6,
        name: 'CHAPTER 5: Creating the Printing Press of the Future',
        link: process.env.URL + '/chapters/chapter5/creating-the-printing-press-of-the-future'
      },
      {
        id: 7,
        name: 'CHAPTER 6: The World is a Runway',
        link: process.env.URL + '/chapters/chapter6/the-world-is-a-runway'
      },
      {
        id: 8,
        name: 'CHAPTER 7: Connected Everything',
        link: process.env.URL + '/chapters/chapter7/connected-everything'
      },
      {
        id: 9,
        name: 'CHAPTER 8: Don’t Fear the Future',
        link: process.env.URL + '/chapters/chapter8/dont-fear-the-future'
      },
      {
        id: 10,
        name: 'EPILOGUE',
        link: process.env.URL + '/chapters/epilogue'
      },
      {
        id: 11,
        name: 'REFERENCES',
        link: process.env.URL + '/chapters/references/introduction'
      },
      {
        id: 12,
        name: 'XR GLOSSARY',
        link: process.env.URL + '/chapters/xr-glossary'
      }
    ]
  )
}
