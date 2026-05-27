const productos=[
{
    // id:'01', NO SUBO EL ID HARCODEADO A FIREBASE
    name:'Random 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur nostrum voluptatibus delectus a, in expedita suscipit est deleniti natus. Laudantium libero temporibus accusantium ipsam. Cumque eius officia id quas.',
    price: 50000,
    stock:15,
    category:'nuevos',
    img:'../img/darth-vader.png'
},
{
    id:'02',
    name:'Random 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur nostrum voluptatibus delectus a, in expedita suscipit est deleniti natus. Laudantium libero temporibus accusantium ipsam. Cumque eius officia id quas.',
    price: 75000,
    stock:5,
    category:'mas vendidos',
    img:'https://picsum.photos/200'
},
{
    id:'03',
    name:'Random 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur nostrum voluptatibus delectus a, in expedita suscipit est deleniti natus. Laudantium libero temporibus accusantium ipsam. Cumque eius officia id quas.',
    price: 55000,
    stock:35,
    category:'ofertas',
    img:'https://i.postimg.cc/fb3J0mVn/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp'
},
{
    id:'04',
    name:'Random 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur nostrum voluptatibus delectus a, in expedita suscipit est deleniti natus. Laudantium libero temporibus accusantium ipsam. Cumque eius officia id quas.',
    price: 95000,
    stock:5,
    category:'ofertas',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&'
}
]


export const getProducts = ()=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
}
export const getOneProduct = (id)=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let prod= productos.find((producto)=> producto.id === id)
            resolve(prod)
        },2000)
    })
}