const menuItems = [

    /* ================= DOSA ================= */

    {
        id: 1,
        name: "Plain Dosa",
        category: "Dosa",
        price: 60,
        description: "Crispy freshly prepared dosa.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 2,
        name: "Masala Dosa",
        category: "Dosa",
        price: 80,
        description: "Crispy dosa filled with masala.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 3,
        name: "Cheese Dosa",
        category: "Dosa",
        price: 100,
        description: "Dosa loaded with melted cheese.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= UTTAPAM ================= */

    {
        id: 4,
        name: "Plain Uttapam",
        category: "Uttapam",
        price: 70,
        description: "Soft South Indian style uttapam.",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 5,
        name: "Masala Uttapam",
        category: "Uttapam",
        price: 90,
        description: "Uttapam with tasty masala topping.",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= MAGGIE ================= */

    {
        id: 6,
        name: "Normal Maggie",
        category: "Maggie",
        price: 50,
        description: "Classic hot Maggie noodles.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 7,
        name: "Masala Maggie",
        category: "Maggie",
        price: 60,
        description: "Spicy masala Maggie.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 8,
        name: "Cheese Maggie",
        category: "Maggie",
        price: 80,
        description: "Maggie topped with melted cheese.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 9,
        name: "Corn Maggie",
        category: "Maggie",
        price: 75,
        description: "Maggie with sweet corn.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 10,
        name: "Paneer Maggie",
        category: "Maggie",
        price: 90,
        description: "Maggie with soft paneer pieces.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 11,
        name: "Maggie with Omelette",
        category: "Maggie",
        price: 100,
        description: "Hot Maggie served with omelette.",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= OATS ================= */

    {
        id: 12,
        name: "Masala Oats",
        category: "Oats",
        price: 70,
        description: "Healthy savoury masala oats.",
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 13,
        name: "Oreo Oats",
        category: "Oats",
        price: 100,
        description: "Creamy oats with Oreo flavour.",
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 14,
        name: "Protein Oats",
        category: "Oats",
        price: 120,
        description: "Protein-rich oats bowl.",
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 15,
        name: "Chocolate Oats",
        category: "Oats",
        price: 100,
        description: "Chocolate flavoured oats bowl.",
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 16,
        name: "Banana Oats",
        category: "Oats",
        price: 90,
        description: "Oats with fresh banana.",
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= SHAKES ================= */

    {
        id: 17,
        name: "Banana Shake",
        category: "Shakes",
        price: 80,
        description: "Thick creamy banana shake.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 18,
        name: "Oreo Shake",
        category: "Shakes",
        price: 100,
        description: "Creamy Oreo milkshake.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 19,
        name: "Badam Shake",
        category: "Shakes",
        price: 110,
        description: "Rich almond milkshake.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= COFFEE ================= */

    {
        id: 20,
        name: "Cold Coffee",
        category: "Coffee",
        price: 90,
        description: "Chilled creamy cold coffee.",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 21,
        name: "Hot Coffee",
        category: "Coffee",
        price: 50,
        description: "Fresh hot coffee.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 22,
        name: "Cappuccino",
        category: "Coffee",
        price: 90,
        description: "Creamy cappuccino.",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 23,
        name: "Latte",
        category: "Coffee",
        price: 90,
        description: "Smooth creamy latte.",
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 24,
        name: "Black Coffee",
        category: "Coffee",
        price: 50,
        description: "Strong black coffee.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= TEA ================= */

    {
        id: 25,
        name: "Hot Tea",
        category: "Tea",
        price: 30,
        description: "Fresh hot Indian tea.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 26,
        name: "Masala Tea",
        category: "Tea",
        price: 40,
        description: "Hot aromatic masala tea.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= DRINKS ================= */

    {
        id: 27,
        name: "Lime Soda",
        category: "Drinks",
        price: 50,
        description: "Refreshing lime soda.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 28,
        name: "Cola",
        category: "Drinks",
        price: 40,
        description: "Chilled cola.",
        image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 29,
        name: "Mirinda",
        category: "Drinks",
        price: 40,
        description: "Chilled orange drink.",
        image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= HOT DRINKS ================= */

    {
        id: 30,
        name: "Bournvita",
        category: "Hot Drinks",
        price: 60,
        description: "Hot creamy Bournvita.",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 31,
        name: "Hot Chocolate",
        category: "Hot Drinks",
        price: 90,
        description: "Rich hot chocolate.",
        image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= FRIES ================= */

    {
        id: 32,
        name: "Classic Fries",
        category: "Fries",
        price: 80,
        description: "Crispy golden french fries.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 33,
        name: "Masala Fries",
        category: "Fries",
        price: 90,
        description: "Fries tossed in masala.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 34,
        name: "Cheese Fries",
        category: "Fries",
        price: 110,
        description: "Fries loaded with cheese.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 35,
        name: "Chicken Loaded Fries",
        category: "Fries",
        price: 160,
        description: "Loaded fries with chicken and cheese.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= NACHOS ================= */

    {
        id: 36,
        name: "Classic Nachos",
        category: "Nachos",
        price: 80,
        description: "Crispy nachos with dip.",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 37,
        name: "Cheese Nachos",
        category: "Nachos",
        price: 110,
        description: "Nachos loaded with cheese.",
        image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= OMELETTE ================= */

    {
        id: 38,
        name: "Masala Omelette",
        category: "Eggs",
        price: 70,
        description: "Egg omelette with spicy masala.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 39,
        name: "Onion Omelette",
        category: "Eggs",
        price: 70,
        description: "Omelette with fresh onions.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 40,
        name: "Half Fry",
        category: "Eggs",
        price: 50,
        description: "Freshly prepared sunny-side eggs.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 41,
        name: "Plain Omelette",
        category: "Eggs",
        price: 60,
        description: "Simple fresh omelette.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 42,
        name: "Omelette Pav",
        category: "Eggs",
        price: 80,
        description: "Omelette served with soft pav.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
    },


    /* ================= QUICK BITES ================= */

    {
        id: 43,
        name: "Bun Maska",
        category: "Quick Bites",
        price: 50,
        description: "Soft bun with creamy maska.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
    },

    {
        id: 44,
        name: "Bowl Cake",
        category: "Desserts",
        price: 100,
        description: "Warm freshly prepared bowl cake.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80"
    }

];