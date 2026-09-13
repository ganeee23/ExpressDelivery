const menuItems = [

    // ================= MAGGI =================
    {
        id: 1,
        name: "Classic Masala Maggi",
        category: "Maggi",
        price: 40,
        description: "Hot and tasty classic masala Maggi.",
        image: "https://th.bing.com/th/id/OIP.AFRPMoj5zplfw5jK6moW6wHaLH?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 2,
        name: "Normal Maggi",
        category: "Maggi",
        price: 30,
        description: "Simple hot and delicious Maggi.",
        image: "data:image/webp;base64,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"
    },
    {
        id: 3,
        name: "Cheese Maggi",
        category: "Maggi",
        price: 60,
        description: "Hot Maggi topped with melted cheese.",
        image: "https://th.bing.com/th/id/OIP.9x5areeCU6TM_a_-_JObIQHaH6?w=167&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 4,
        name: "Corn Cheese Maggi",
        category: "Maggi",
        price: 70,
        description: "Maggi with sweet corn and melted cheese.",
        image: "https://th.bing.com/th/id/OIP.rQDLw4satSIRhQtgbKr4oAHaEK?w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 5,
        name: "Paneer Maggi",
        category: "Maggi",
        price: 70,
        description: "Delicious Maggi with soft paneer pieces.",
        image: "https://dy3rma73kowlp.cloudfront.net/uploads/2025/04/chilli-panner-recipe.jpg"
    },
    {
        id: 6,
        name: "Schezwan Maggi",
        category: "Maggi",
        price: 50,
        description: "Spicy and flavourful Schezwan Maggi.",
        image: "https://tse2.mm.bing.net/th/id/OIP.ShgQ2VBrIQ1e_oarslFr8wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 7,
        name: "Omelet Maggi",
        category: "Maggi",
        price: 60,
        description: "Hot Maggi served with omelet.",
        image: "https://tse4.mm.bing.net/th/id/OIP.sl0ZEcAo5aNhpxXIEe2_8AHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 8,
        name: "Omelet Cheese Maggi",
        category: "Maggi",
        price: 70,
        description: "Maggi with omelet and melted cheese.",
        image: "https://i.pinimg.com/736x/56/04/e0/5604e07c65b0068e6ed9b23bde5201ef.jpg"
    },


    // ================= EGG SPECIALS =================
    {
        id: 9,
        name: "Plain Omelette",
        category: "Egg Specials",
        price: 40,
        description: "Freshly prepared plain omelette.",
        image: "https://hurrythefoodup.com/wp-content/uploads/2015/03/easy-omelette-recipe-recipe-card-image.jpg"
    },
    {
        id: 10,
        name: "Masala Omelette",
        category: "Egg Specials",
        price: 50,
        description: "Omelette prepared with tasty masala.",
        image: "https://tse3.mm.bing.net/th/id/OIP.4pYRhPeQLJSm8x-vSC7yqQHaEx?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 11,
        name: "Cheese Omelette",
        category: "Egg Specials",
        price: 60,
        description: "Soft omelette loaded with melted cheese.",
        image: "https://tse4.mm.bing.net/th/id/OIP.2zGRPCyANKBR6m6kawpahQHaE8?r=0&w=1500&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 12,
        name: "Onion Omelette",
        category: "Egg Specials",
        price: 40,
        description: "Fresh omelette with chopped onions.",
        image: "https://i.ytimg.com/vi/Lr6SwITcROE/maxresdefault.jpg"
    },
    {
        id: 13,
        name: "Half Fry",
        category: "Egg Specials",
        price: 40,
        description: "Freshly prepared half fry eggs.",
        image: "https://i.ytimg.com/vi/PZ2l9e8796s/maxresdefault.jpg"
    },
    {
        id: 14,
        name: "Omelette Pav",
        category: "Egg Specials",
        price: 30,
        description: "Fresh omelette served with soft pav.",
        image: "https://tse4.mm.bing.net/th/id/OIP.dcdUivYnQpcfC6WvTko61wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 15,
        name: "Masala Egg Pav",
        category: "Egg Specials",
        price: 40,
        description: "Masala egg served with soft pav.",
        image: "https://th.bing.com/th/id/OIP.Uta8whQJI7XbOG1lNaPP4gHaE8?w=256&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },


    // ================= SNACKS =================
    {
        id: 16,
        name: "French Fries",
        category: "Snacks",
        price: 50,
        description: "Crispy golden French fries.",
        image: "https://th.bing.com/th/id/OIP.GqUvr8wmgKYa7LL8YpnGMAHaE7?w=282&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 17,
        name: "Peri-Peri Fries",
        category: "Snacks",
        price: 60,
        description: "Crispy fries tossed in peri-peri seasoning.",
        image: "https://th.bing.com/th/id/OIP.-8x1d1ZxLtIuladEJG6yNQHaHa?w=178&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 18,
        name: "Cheese Fries",
        category: "Snacks",
        price: 80,
        description: "Crispy fries loaded with melted cheese.",
        image: "https://th.bing.com/th/id/OIP.j9I8V3MeClNvn3Eq9M_czAHaFj?w=234&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 19,
        name: "Schezwan Fries",
        category: "Snacks",
        price: 70,
        description: "Crispy fries with spicy Schezwan flavour.",
        image: "https://th.bing.com/th/id/OIP.aMBJD44-TnwP-2t0MUCUiwHaEG?w=323&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 20,
        name: "Nachos",
        category: "Snacks",
        price: 50,
        description: "Crispy nachos served with dip.",
        image: "https://th.bing.com/th/id/OIP.9jmUhGOg3_5pd0sZSIJuQgHaJ4?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 21,
        name: "Cheese Nachos",
        category: "Snacks",
        price: 70,
        description: "Crispy nachos topped with melted cheese.",
        image: "https://th.bing.com/th/id/OIP.uQe9NYQf7lhuGRAt6QbddQHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 22,
        name: "Paneer Loaded Fries",
        category: "Snacks",
        price: 100,
        description: "Loaded fries topped with paneer and sauces.",
        image: "https://th.bing.com/th/id/OIP.AIhF8KFKOf5NvgU8vDYF2wHaE8?w=258&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 23,
        name: "Loaded Nachos",
        category: "Snacks",
        price: 120,
        description: "Loaded nachos with cheese and tasty toppings.",
        image: "https://th.bing.com/th/id/OIP.9JOvbdg--5nclhtQdnQyUAHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },


    // ================= QUICK BITES =================
    {
        id: 24,
        name: "Plain Sandwich",
        category: "Quick Bites",
        price: 40,
        description: "Simple and fresh classic sandwich.",
        image: "https://www.honeywhatscooking.com/wp-content/uploads/2023/02/C146EF1B-2999-4F3E-93A2-99DEE8548973-e1677049022689-720x829.jpg"
    },
    {
        id: 25,
        name: "Masala Sandwich",
        category: "Quick Bites",
        price: 50,
        description: "Tasty sandwich filled with masala.",
        image: "https://th.bing.com/th/id/OIP.9Tre0EgpvrU9EdB7GA9DGwHaHa?w=160&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 26,
        name: "Cheese Plain Sandwich",
        category: "Quick Bites",
        price: 60,
        description: "Classic sandwich with melted cheese.",
        image: "https://th.bing.com/th/id/OIP.KrvXeNSe4YXRkavMFmwzUQHaEK?w=325&h=182&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 27,
        name: "Paneer Plain Sandwich",
        category: "Quick Bites",
        price: 70,
        description: "Fresh sandwich with soft paneer filling.",
        image: "https://dy3rma73kowlp.cloudfront.net/uploads/2025/09/paneer-sandwich-recipe.jpg"
    },


    // ================= SHAKES =================
    {
        id: 28,
        name: "Banana Shake",
        category: "Shakes",
        price: 60,
        description: "Thick and creamy banana shake.",
        image: "https://th.bing.com/th/id/OIP.u27tMulBYzUk8uZXI0x1lwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 29,
        name: "Oreo Shake",
        category: "Shakes",
        price: 80,
        description: "Creamy and delicious Oreo shake.",
        image: "https://th.bing.com/th/id/OIP.lq605u9Yd9p-pjwEbkE79QHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 30,
        name: "Chocolate Shake",
        category: "Shakes",
        price: 80,
        description: "Rich and creamy chocolate shake.",
        image: "https://th.bing.com/th/id/OIP.1DuFUGGCbHvWFD6KDL7OggHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 31,
        name: "Cold Coffee",
        category: "Shakes",
        price: 60,
        description: "Chilled and creamy cold coffee.",
        image: "https://th.bing.com/th/id/OIP.pJmjTTZoO_j0ujl06k3J2gHaLH?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 32,
        name: "Peanuts Milk Shake",
        category: "Shakes",
        price: 80,
        description: "Creamy milk shake blended with peanuts.",
        image: "https://th.bing.com/th/id/OIP.1Fe-z4WJOFso9LWAd_3_KgHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },


    // ================= LASSI =================
    {
        id: 33,
        name: "Plain Lassi",
        category: "Lassi",
        price: 40,
        description: "Cool and refreshing plain lassi.",
        image: "https://th.bing.com/th/id/OIP.MGhabUAHBYyYzqVvBCSEZgHaE9?w=208&h=209&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 34,
        name: "Dry Fruits Lassi",
        category: "Lassi",
        price: 50,
        description: "Creamy lassi topped with dry fruits.",
        image: "https://thumbs.dreamstime.com/b/rich-dry-fruit-lassi-served-glass-isolated-table-top-view-punjabi-culture-262498203.jpg"
    },


    // ================= OATS =================
    {
        id: 35,
        name: "Protein Bowl Oats",
        category: "Oats",
        price: 50,
        description: "Protein-rich oats served in a filling bowl.",
        image: "https://th.bing.com/th/id/OIP.OTDsiynCtTo4jfuSfLNQggHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 36,
        name: "Protein Oreo Oats",
        category: "Oats",
        price: 50,
        description: "Protein oats with delicious Oreo flavour.",
        image: "https://th.bing.com/th/id/OIP.GFdxjmkF_lEQWESZfaFNxwHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 37,
        name: "Protein Chocolate Oats",
        category: "Oats",
        price: 50,
        description: "Protein-rich oats with chocolate flavour.",
        image: "https://th.bing.com/th/id/OIP.tZJb0vtX8ZVDmvaRtC_-IwHaLH?w=208&h=305&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 38,
        name: "Protein Banana Oats",
        category: "Oats",
        price: 50,
        description: "Protein oats with fresh banana flavour.",
        image: "https://th.bing.com/th/id/OIP.-vhWbBAn0VGkNnyuaOBg_wHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },


    // ================= CHICKEN =================
    {
        id: 39,
        name: "Chicken Loaded Fries",
        category: "Chicken",
        price: 150,
        description: "Loaded crispy fries topped with chicken and cheese.",
        image: "https://th.bing.com/th/id/OIP.xVNvQs5IreAtprMUSjcpuQHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 40,
        name: "Chicken Loaded Nachos",
        category: "Chicken",
        price: 150,
        description: "Crispy nachos loaded with chicken and cheese.",
        image: "https://th.bing.com/th/id/OIP.lEkNAEgcl2PlmjFkjQxpSgHaJ1?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 41,
        name: "Chicken Protein Bowl",
        category: "Chicken",
        price: 150,
        description: "Protein-rich chicken bowl with a filling combination.",
        image: "https://th.bing.com/th/id/OIP.VABNUfyiPRKHdljEAoMBwgHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    },
    {
        id: 42,
        name: "Paneer Protein Bowl",
        category: "Protein Bowls",
        price: 150,
        description: "Protein-rich paneer bowl with a filling combination.",
        image: "https://th.bing.com/th/id/OIP.ZiMQvK9tCMgzep4VxSlTuwHaFL?w=278&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    }

];