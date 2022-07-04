import { Types } from "mongoose";
import { User } from "./UserSchema";


export const UserExample: User[] = [
    {
        _id: new Types.ObjectId(),
        cmp: '123',
        name: 'Camilo',
        fatherSurname: 'Quea',
        motherSurname: 'Montesinos',
        email: 'camilo@gmail.com',
        phone: '12345678',
        department: {
            _id: new Types.ObjectId(),
            name: 'oftalmologia',
        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: ['dev']
    },
    {
        _id: new Types.ObjectId(),
        cmp: "976",
        name: "Felipe",
        fatherSurname: "Weimann",
        motherSurname: "Gusikowski",
        email: "Vicky_Schaefer42@gmail.com",
        phone: "1-816-337-7609 x172",
        department: {
            _id: new Types.ObjectId(),
            name: "Beauty",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "243",
        name: "Tyrell",
        fatherSurname: "Hahn",
        motherSurname: "Stiedemann",
        email: "Kaylie_OKon@yahoo.com",
        phone: "(750) 466-9291 x00054",
        department: {
            _id: new Types.ObjectId(),
            name: "Shoes",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "377",
        name: "Bulah",
        fatherSurname: "Gibson",
        motherSurname: "Daugherty",
        email: "Geovanny.Collier69@hotmail.com",
        phone: "624-919-4159 x85007",
        department: {
            _id: new Types.ObjectId(),
            name: "Toys",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "761",
        name: "Amara",
        fatherSurname: "Bernier",
        motherSurname: "Jones",
        email: "Ashlee87@hotmail.com",
        phone: "432-646-9464 x8601",
        department: {
            _id: new Types.ObjectId(),
            name: "Beauty",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "858",
        name: "Owen",
        fatherSurname: "Torphy",
        motherSurname: "Heidenreich",
        email: "Dorcas_Kohler21@yahoo.com",
        phone: "(449) 225-4846 x1884",
        department: {
            _id: new Types.ObjectId(),
            name: "Beauty",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "332",
        name: "Abdullah",
        fatherSurname: "Gulgowski",
        motherSurname: "Greenfelder",
        email: "Elisha_Hoppe@yahoo.com",
        phone: "1-861-794-9832 x8178",
        department: {
            _id: new Types.ObjectId(),
            name: "Jewelery",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "921",
        name: "Eldridge",
        fatherSurname: "Orn",
        motherSurname: "Hoeger",
        email: "Cecelia84@hotmail.com",
        phone: "956-666-3660",
        department: {
            _id: new Types.ObjectId(),
            name: "Shoes",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "554",
        name: "Citlalli",
        fatherSurname: "Bins",
        motherSurname: "Hilpert",
        email: "Oda.Cole@yahoo.com",
        phone: "1-462-497-4450 x34282",
        department: {
            _id: new Types.ObjectId(),
            name: "Outdoors",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "433",
        name: "Darius",
        fatherSurname: "Mosciski",
        motherSurname: "Jacobs",
        email: "Myrna.Gottlieb68@gmail.com",
        phone: "1-494-500-7063",
        department: {
            _id: new Types.ObjectId(),
            name: "Movies",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "298",
        name: "Morgan",
        fatherSurname: "Wiza",
        motherSurname: "Lesch",
        email: "Eula_Dibbert@hotmail.com",
        phone: "(216) 887-5286 x9328",
        department: {
            _id: new Types.ObjectId(),
            name: "Kids",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "615",
        name: "Kirk",
        fatherSurname: "Hessel",
        motherSurname: "Cronin",
        email: "Orville60@hotmail.com",
        phone: "348-252-6766 x2211",
        department: {
            _id: new Types.ObjectId(),
            name: "Shoes",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "257",
        name: "Wyman",
        fatherSurname: "Boyer",
        motherSurname: "Champlin",
        email: "Ransom70@hotmail.com",
        phone: "982-561-6885",
        department: {
            _id: new Types.ObjectId(),
            name: "Baby",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "407",
        name: "Craig",
        fatherSurname: "Gutmann",
        motherSurname: "Hammes",
        email: "Marques.Casper87@gmail.com",
        phone: "384-260-3421 x8302",
        department: {
            _id: new Types.ObjectId(),
            name: "Beauty",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "189",
        name: "Teresa",
        fatherSurname: "Abshire",
        motherSurname: "Erdman",
        email: "Lilla.Reynolds@gmail.com",
        phone: "(514) 717-4666",
        department: {
            _id: new Types.ObjectId(),
            name: "Kids",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "949",
        name: "Tessie",
        fatherSurname: "Pollich",
        motherSurname: "Roob",
        email: "Elfrieda54@hotmail.com",
        phone: "481-566-3626 x02834",
        department: {
            _id: new Types.ObjectId(),
            name: "Shoes",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "841",
        name: "Abbey",
        fatherSurname: "McClure",
        motherSurname: "Maggio",
        email: "Forrest_Donnelly7@hotmail.com",
        phone: "1-839-655-6867 x282",
        department: {
            _id: new Types.ObjectId(),
            name: "Sports",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "102",
        name: "Hilma",
        fatherSurname: "Medhurst",
        motherSurname: "Upton",
        email: "Tillman_Rau@gmail.com",
        phone: "889-448-5276",
        department: {
            _id: new Types.ObjectId(),
            name: "Kids",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "406",
        name: "Osborne",
        fatherSurname: "Bechtelar",
        motherSurname: "Schmeler",
        email: "Alia0@hotmail.com",
        phone: "1-784-517-5581 x79473",
        department: {
            _id: new Types.ObjectId(),
            name: "Baby",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "393",
        name: "Joshuah",
        fatherSurname: "Leffler",
        motherSurname: "Mitchell",
        email: "Amiya97@yahoo.com",
        phone: "1-887-619-7680",
        department: {
            _id: new Types.ObjectId(),
            name: "Tools",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "897",
        name: "Kali",
        fatherSurname: "Weissnat",
        motherSurname: "Schulist",
        email: "Devon.Murphy34@yahoo.com",
        phone: "1-891-218-3949 x929",
        department: {
            _id: new Types.ObjectId(),
            name: "Grocery",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "387",
        name: "Akeem",
        fatherSurname: "Langosh",
        motherSurname: "Klein",
        email: "Mitchell71@gmail.com",
        phone: "974.949.5642 x87420",
        department: {
            _id: new Types.ObjectId(),
            name: "Jewelery",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "769",
        name: "Reymundo",
        fatherSurname: "Halvorson",
        motherSurname: "Crona",
        email: "Leslie_Fritsch@yahoo.com",
        phone: "642.518.4082",
        department: {
            _id: new Types.ObjectId(),
            name: "Music",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "614",
        name: "Domenick",
        fatherSurname: "Nader",
        motherSurname: "Hartmann",
        email: "Elsie.Hyatt@hotmail.com",
        phone: "(406) 361-4951",
        department: {
            _id: new Types.ObjectId(),
            name: "Toys",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "545",
        name: "Darius",
        fatherSurname: "O'Reilly",
        motherSurname: "Nolan",
        email: "Agustina_Huels@gmail.com",
        phone: "313.915.1909 x54222",
        department: {
            _id: new Types.ObjectId(),
            name: "Baby",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "648",
        name: "Harrison",
        fatherSurname: "Carter",
        motherSurname: "Williamson",
        email: "Leslie.Johns48@gmail.com",
        phone: "(725) 451-5734 x10679",
        department: {
            _id: new Types.ObjectId(),
            name: "Sports",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "211",
        name: "Wyman",
        fatherSurname: "Roob",
        motherSurname: "Ortiz",
        email: "Stan.Sporer@hotmail.com",
        phone: "455.766.8762",
        department: {
            _id: new Types.ObjectId(),
            name: "Games",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "357",
        name: "Adrienne",
        fatherSurname: "Bins",
        motherSurname: "Hickle",
        email: "Salvador_Hackett53@yahoo.com",
        phone: "347-911-2750 x69939",
        department: {
            _id: new Types.ObjectId(),
            name: "Clothing",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "secretary"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "738",
        name: "Matteo",
        fatherSurname: "Dooley",
        motherSurname: "Herman",
        email: "Junius.Gibson@gmail.com",
        phone: "626.541.0166",
        department: {
            _id: new Types.ObjectId(),
            name: "Sports",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }, {
        _id: new Types.ObjectId(),
        cmp: "376",
        name: "Frederik",
        fatherSurname: "Hagenes",
        motherSurname: "Kihn",
        email: "Jermain_Hills@gmail.com",
        phone: "897.913.4114 x21778",
        department: {
            _id: new Types.ObjectId(),
            name: "Music",

        },
        password: '$2b$05$dxvowNed6wSF3/o6f0YDWeusTh0a6/o6xZtGAI8GEEGOyxEQYxcy6',
        rols: [
            "doctor"
        ]
    }
]
