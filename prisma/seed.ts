import prisma from "../src/config/database"

async function seedingTypesOfProducts() {
    await prisma.productsType.createMany({
        data:[
            {
                "type":"Cervejas",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "type":"Destiladas",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "type":"Não Alcoólicas",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]
    })
    
}

async function seedingProducts() {
    await prisma.products.createMany({
        data:[
            {
                "productName":"Brahma Chopp 473ml",
                "producTypeId":1,
                "price": 395,
                "image":"https://images-americanas.b2w.io/produtos/136883834/imagens/cerveja-brahma-chopp-lata-473ml/136883480_1_large.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Brahma Chopp Litrão",
                "producTypeId":1,
                "price": 899,
                "image":"data:image/jpeg;base64,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",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Brahma Chopp 350ml",
                "producTypeId":1,
                "price": 298,
                "image":"https://images-americanas.b2w.io/produtos/136883834/imagens/cerveja-brahma-chopp-lata-473ml/136883480_1_large.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Skol Puro Malte 473ml",
                "producTypeId":1,
                "price": 395,
                "image":"https://cdn.awsli.com.br/800x800/1330/1330028/produto/51587102/65609a5cad.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Skol Puro Malte Litrão",
                "producTypeId":1,
                "price": 395,
                "image":"data:image/jpeg;base64,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",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Skol Puro Malte 350ml",
                "producTypeId":1,
                "price": 395,
                "image":"https://i.zst.com.br/thumbs/12/3/34/2011873267.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Vodka Smirnoff 998ml",
                "producTypeId":2,
                "price": 3198,
                "image":"https://i.zst.com.br/thumbs/12/3/34/2011873267.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Vodka Smirnoff 1,750L",
                "producTypeId":2,
                "price": 3198,
                "image":"https://images.tcdn.com.br/img/img_prod/1140249/smirnoff_pet_1_75ml_263_1_f86ee5360321f15e7dcdb80b99ef34ac.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Vodka Smirnoff 998ml",
                "producTypeId":2,
                "price": 3198,
                "image":"https://i.zst.com.br/thumbs/12/3/34/2011873267.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Coca Cola 2L",
                "producTypeId":3,
                "price": 1298,
                "image":"https://ibassets.com.br/ib.item.image.large/l-69e3b185924d41599e510db38f15b7a8.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Guaraná Antárctica 2L",
                "producTypeId":3,
                "price": 1298,
                "image":"https://tezeio.vtexassets.com/arquivos/ids/662006/7891991001342_1_1.jpg?v=638084958298770000",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                "productName":"Coca Cola 2L",
                "producTypeId":3,
                "price": 1298,
                "image":"https://ibassets.com.br/ib.item.image.large/l-69e3b185924d41599e510db38f15b7a8.jpg",
                createdAt: new Date(),
                updatedAt: new Date()
            },

         
        ]
    })
    
}

seedingTypesOfProducts()
.then(()=> {
    console.log("Registro Feito Com Sucesso!")
})
.catch(e=> {
    console.error(e);
    process.exit(1);

}).finally(async() => {
    await prisma.$disconnect();
})

seedingProducts()
.then(()=> {
    console.log("Registro Feito Com Sucesso!")
})
.catch(e=> {
    console.error(e);
    process.exit(1);

}).finally(async() => {
    await prisma.$disconnect();
})