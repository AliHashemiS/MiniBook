const API_LINK = process.env.link

export default function handler(req, res) {
    res.status(200).json( 
        [
            {
                "id": 1,
                "idTitle": 1,
                "name": "Chapter1",
                "link": "https://www.cathyhackl.com/",
            },
            {
                "id": 2,
                "idTitle": 1,
                "name": "Chapter2",
                "link": "https://www.cathyhackl.com/",
            },
            {
                "id": 3,
                "idTitle": 1,
                "name": "Chapter3",
                "link": "https://www.cathyhackl.com/",
            }, {
                "id": 1,
                "idTitle": 2,
                "name": "Chapter1",
                "link": "https://www.cathyhackl.com/",
            },
            {
                "id": 2,
                "idTitle": 2,
                "name": "Chapter2",
                "link": "https://www.cathyhackl.com/",
            },
            {
                "id": 3,
                "idTitle": 2,
                "name": "Chapter3",
                "link": "https://www.cathyhackl.com/",
            }, {
                "id": 1,
                "idTitle": 3,
                "name": "Chapter1",
                "link": "https://www.cathyhackl.com/",
            },
            {
                "id": 2,
                "idTitle": 3,
                "name": "Chapter2",
                "link": "https://www.cathyhackl.com/",
            },
            {
                "id": 3,
                "idTitle": 3,
                "name": "Chapter3",
                "link": "https://www.cathyhackl.com/",
            },
        ] 
    )
}