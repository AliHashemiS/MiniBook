export default function handler(req, res) {
    res.status(200).json( 
        [
            {
                "id": 1,
                "nameButton": "About Cathy",
                "link": "https://www.cathyhackl.com/",
            },
            {
                "id": 2,
                "nameButton": "Buy Couses & Books",
                "link": "https://www.cathyhackl.com/coursesandbooks",
            },
            {
                "id": 3,
                "nameButton": "Listen to Cathy's Podcasts",
                "link": "https://www.cathyhackl.com/podcasts-1",
            },
        ] 
    )
}