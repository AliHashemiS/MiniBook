export default function handler (req, res) {
  res.status(200).json(
    [
      {
        id: 1,
        name: 'Title1',
        link: 'https://www.cathyhackl.com/'
      },
      {
        id: 2,
        name: 'Title2',
        link: 'https://www.cathyhackl.com/coursesandbooks'
      },
      {
        id: 3,
        name: 'Title3',
        link: 'https://www.cathyhackl.com/podcasts-1'
      }
    ]
  )
}
