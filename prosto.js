let basket = ["1","2","3"];
let sum =0;
let list= [{
    "author": "",
    "available": true,
    "about":"",
    "created_at": "09-09-3434 02:45 PM",
    "description": "Описание demo",
    "discount": 15,
    "isPublished": true,
    "likes": [],
    "name": "Типа красивые шары",
    "pictures": "https://sharsky.ru/image/cache/catalog/fontan-iz-sharov/fontan-iz-sharov-50-700x700.jpg",
    "price": 1,
    "reviews": [],
    "stock": "",
    "tags": [],
    "updated_at": "",
    "wight": "100 г",
    "status": "love",
    "_id": "1"
    },
    {
        "author": "",
        "available": true,
        "about":"",
        "created_at": "09-07-2022 02:45 PM",
        "description": "Описание demo",
        "discount": 15,
        "isPublished": true,
        "likes": [],
        "name": "12 лет",
        "pictures": "https://air-smile.ru/image/cache/data/8453/kompoziciya-iz-sharov-4-goda-perelivy-cveta-900x900.jpg",
        "price": 2,
        "reviews": [],
        "stock": "",
        "tags": [],
        "updated_at": "",
        "wight": "100 г",
        "status": "children",
        "_id": "2"
        },
        {
            "author": "",
            "available": true,
            "about":"",
            "created_at": "09-09-2021 02:45 PM",
            "description": "Описание demo",
            "discount": 15,
            "isPublished": true,
            "likes": [],
            "name": "Шар с сердцами",
            "pictures": "https://static.tildacdn.com/tild6362-3966-4339-b166-643331623235/photo.jpg",
            "price": 3,
            "reviews": [],
            "stock": "",
            "tags": [],
            "updated_at": "",
            "wight": "100 г",
            "status": "",
            "_id": "3"
            }
    ];


    for (let i=0; i<basket.length; i++){
            for (let j=0; j<list.length;j++){
                if (list[j]._id == basket[i]){
                    sum += list[j].price;
                    console.log(sum);
                    };
            };
        };