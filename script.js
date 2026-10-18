const products = [
  // ==================== NIKE (1–15) ====================
  {
    id: 1,
    brand: "Nike",
    name: "Air Max",
    color: "Black",
    size: 40,
    price: 5000,
    imageURl:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c90f7949-b685-485e-8602-23f1d079cd3a/AIR+FORCE+1+%2707+WB.png",
  },
  {
    id: 2,
    brand: "Nike",
    name: "Air Force 1",
    color: "White",
    size: 42,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9c30G1sgfRjmW9l-A7UzCIxzC6lapdnKGREa3lPgPPA&s=10",
  },
  {
    id: 3,
    brand: "Nike",
    name: "Dunk Low",
    color: "Blue",
    size: 44,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrCH-VJSVSkpC9h0xgLbRozanB66IbFN9LoUQIx9ntw&s=10",
  },
  {
    id: 4,
    brand: "Nike",
    name: "Revolution 7",
    color: "Grey",
    size: 40,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9N4e-iKqXF_A_XdzW9qGXMrS4T90CE3qkKg8Y7MU5g&s=10",
  },
  {
    id: 5,
    brand: "Nike",
    name: "Pegasus",
    color: "Red",
    size: 42,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR975qpWeN9aqmFMJlvMtLN4y0J4AHNaDXZD3RMsKTI-Q&s=10",
  },
  {
    id: 6,
    brand: "Nike",
    name: "Blazer Mid",
    color: "Green",
    size: 44,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwk92vHEG0yO_f8btRA_IYxa-6kOiAhN4RpMQuhGhcLg&s=10",
  },
  {
    id: 7,
    brand: "Nike",
    name: "Cortez",
    color: "Blue",
    size: 40,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrCH-VJSVSkpC9h0xgLbRozanB66IbFN9LoUQIx9ntw&s=10",
  },
  {
    id: 8,
    brand: "Nike",
    name: "Zoom Fly",
    color: "Black",
    size: 42,
    price: 10000,
    imageURl:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c90f7949-b685-485e-8602-23f1d079cd3a/AIR+FORCE+1+%2707+WB.png",
  },
  {
    id: 9,
    brand: "Nike",
    name: "Court Vision",
    color: "White",
    size: 44,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9c30G1sgfRjmW9l-A7UzCIxzC6lapdnKGREa3lPgPPA&s=10",
  },
  {
    id: 10,
    brand: "Nike",
    name: "Venture Runner",
    color: "Blue",
    size: 42,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWH6cA3PgvpPIEHCa2QDBgL6gGnWzzl1_eKjIYt77yCw&s=10",
  },
  {
    id: 11,
    brand: "Nike",
    name: "Air Max SC",
    color: "Blue",
    size: 40,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWH6cA3PgvpPIEHCa2QDBgL6gGnWzzl1_eKjIYt77yCw&s=10",
  },
  {
    id: 12,
    brand: "Nike",
    name: "Air Max Pulse",
    color: "Grey",
    size: 42,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9N4e-iKqXF_A_XdzW9qGXMrS4T90CE3qkKg8Y7MU5g&s=10",
  },
  {
    id: 13,
    brand: "Nike",
    name: "Flex Runner",
    color: "Black",
    size: 44,
    price: 5000,
    imageURl:
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c90f7949-b685-485e-8602-23f1d079cd3a/AIR+FORCE+1+%2707+WB.png",
  },
  {
    id: 14,
    brand: "Nike",
    name: "Downshifter",
    color: "Green",
    size: 40,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwk92vHEG0yO_f8btRA_IYxa-6kOiAhN4RpMQuhGhcLg&s=10",
  },
  {
    id: 15,
    brand: "Nike",
    name: "Air Zoom",
    color: "Red",
    size: 44,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR975qpWeN9aqmFMJlvMtLN4y0J4AHNaDXZD3RMsKTI-Q&s=10",
  },

  // ==================== ADIDAS (16–30) ====================
  {
    id: 16,
    brand: "Adidas",
    name: "Ultraboost",
    color: "White",
    size: 40,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCGTBuu0Zx_RwkS884jL13ZFLrusXOjhKOy3pBSBzEw&s=10",
  },
  {
    id: 17,
    brand: "Adidas",
    name: "Superstar",
    color: "Black",
    size: 42,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqrif6SRYRbLFEwkA1l5axCF2v4sr8lfRYNX1avbcsA&s=10",
  },
  {
    id: 18,
    brand: "Adidas",
    name: "Gazelle",
    color: "red",
    size: 40,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfsJe142rTI2Qt8hkjxKt4HwSG7WEhrarsFkr1Lv7PA&s=10",
  },
  {
    id: 19,
    brand: "Adidas",
    name: "Runfalcon",
    color: "Green",
    size: 44,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbD-a_Zfsd15yOuCuIFMuUpHus4cXw3L90w20d3tr7Xg&s=10",
  },
  {
    id: 20,
    brand: "Adidas",
    name: "Forum Low",
    color: "White",
    size: 42,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCGTBuu0Zx_RwkS884jL13ZFLrusXOjhKOy3pBSBzEw&s=10",
  },
  {
    id: 21,
    brand: "Adidas",
    name: "NMD R1",
    color: "Red",
    size: 40,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfsJe142rTI2Qt8hkjxKt4HwSG7WEhrarsFkr1Lv7PA&s=10",
  },
  {
    id: 22,
    brand: "Adidas",
    name: "Stan Smith",
    color: "Grey",
    size: 44,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyUU-sAsrCullcqpjVuhOCfnLtHqvPThEGIfSlSQPLQ&s=10",
  },
  {
    id: 23,
    brand: "Adidas",
    name: "Campus 00s",
    color: "Blue",
    size: 42,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AzMI7Bk6QYE_JZoDE4wkrKpg42_81o7I1xTOuwSrCg&s=10",
  },
  {
    id: 24,
    brand: "Adidas",
    name: "Duramo",
    color: "Black",
    size: 40,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqrif6SRYRbLFEwkA1l5axCF2v4sr8lfRYNX1avbcsA&s=10",
  },
  {
    id: 25,
    brand: "Adidas",
    name: "Grand Court",
    color: "Blue",
    size: 44,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AzMI7Bk6QYE_JZoDE4wkrKpg42_81o7I1xTOuwSrCg&s=10",
  },
  {
    id: 26,
    brand: "Adidas",
    name: "Response Runner",
    color: "Blue",
    size: 40,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AzMI7Bk6QYE_JZoDE4wkrKpg42_81o7I1xTOuwSrCg&s=10",
  },
  {
    id: 27,
    brand: "Adidas",
    name: "Swift Run",
    color: "Grey",
    size: 42,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVyUU-sAsrCullcqpjVuhOCfnLtHqvPThEGIfSlSQPLQ&s=10",
  },
  {
    id: 28,
    brand: "Adidas",
    name: "Puremotion",
    color: "Green",
    size: 40,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbD-a_Zfsd15yOuCuIFMuUpHus4cXw3L90w20d3tr7Xg&s=10",
  },
  {
    id: 29,
    brand: "Adidas",
    name: "Racer TR",
    color: "Blue",
    size: 42,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AzMI7Bk6QYE_JZoDE4wkrKpg42_81o7I1xTOuwSrCg&s=10",
  },
  {
    id: 30,
    brand: "Adidas",
    name: "Lite Racer",
    color: "Red",
    size: 44,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxfsJe142rTI2Qt8hkjxKt4HwSG7WEhrarsFkr1Lv7PA&s=10",
  },

  // ==================== PUMA (31–45) ====================
  {
    id: 31,
    brand: "Puma",
    name: "RS-X",
    color: "Red",
    size: 40,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPkDYg-mb9Gz2t69MBWwgEPa7rQa_SAYJTQQqwXCzYg&s=10",
  },
  {
    id: 32,
    brand: "Puma",
    name: "Suede Classic",
    color: "Blue",
    size: 42,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ds-kc1OLw8TqGJ03bsoVJTYy37KdMj3jwUwzgUsYSg&s=10",
  },
  {
    id: 33,
    brand: "Puma",
    name: "Future Rider",
    color: "White",
    size: 44,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxQ6Qg3nbC9wKEjmlhFEai6f_mQRX0wFcen_ePOEIuw&s=10",
  },
  {
    id: 34,
    brand: "Puma",
    name: "Caven 2.0",
    color: "Black",
    size: 40,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8w3ctn3tgR6wUL-UHgMxxNbqYQr6PnjpowVx63DrIg&s=10",
  },
  {
    id: 35,
    brand: "Puma",
    name: "RS-Fast",
    color: "Grey",
    size: 42,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtSxkE_LdJfUuXDXi2ZV8H2OidE7YMCANMwg4lZF6wQ&s=10",
  },
  {
    id: 36,
    brand: "Puma",
    name: "Palermo",
    color: "Green",
    size: 44,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7Ty9EfECnQ3Oe8VI7btPzWKXygABjK2GPuJDNDt0tw&s=10",
  },
  {
    id: 37,
    brand: "Puma",
    name: "Velocity Nitro",
    color: "Blue",
    size: 40,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ds-kc1OLw8TqGJ03bsoVJTYy37KdMj3jwUwzgUsYSg&s=10",
  },
  {
    id: 38,
    brand: "Puma",
    name: "Smash V2",
    color: "White",
    size: 42,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxQ6Qg3nbC9wKEjmlhFEai6f_mQRX0wFcen_ePOEIuw&s=10",
  },
  {
    id: 39,
    brand: "Puma",
    name: "R78",
    color: "Blue",
    size: 44,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ds-kc1OLw8TqGJ03bsoVJTYy37KdMj3jwUwzgUsYSg&s=10",
  },
  {
    id: 40,
    brand: "Puma",
    name: "Carina",
    color: "Black",
    size: 42,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8w3ctn3tgR6wUL-UHgMxxNbqYQr6PnjpowVx63DrIg&s=10",
  },
  {
    id: 41,
    brand: "Puma",
    name: "Twitch Runner",
    color: "Blue",
    size: 40,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ds-kc1OLw8TqGJ03bsoVJTYy37KdMj3jwUwzgUsYSg&s=10",
  },
  {
    id: 42,
    brand: "Puma",
    name: "Flyer Runner",
    color: "Grey",
    size: 44,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtSxkE_LdJfUuXDXi2ZV8H2OidE7YMCANMwg4lZF6wQ&s=10",
  },
  {
    id: 43,
    brand: "Puma",
    name: "Pacer Future",
    color: "Red",
    size: 42,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPkDYg-mb9Gz2t69MBWwgEPa7rQa_SAYJTQQqwXCzYg&s=10",
  },
  {
    id: 44,
    brand: "Puma",
    name: "Anzarun Lite",
    color: "Green",
    size: 40,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7Ty9EfECnQ3Oe8VI7btPzWKXygABjK2GPuJDNDt0tw&s=10",
  },
  {
    id: 45,
    brand: "Puma",
    name: "X-Ray",
    color: "Blue",
    size: 42,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ds-kc1OLw8TqGJ03bsoVJTYy37KdMj3jwUwzgUsYSg&s=10",
  },

  // ==================== JORDAN (46–60) ====================
  {
    id: 46,
    brand: "Jordan",
    name: "Air Jordan 1",
    color: "Black",
    size: 44,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyYFqZ4Qu_McRT88TE9hREtE0Cwo0yV7TGbr3XV06cw&s=10",
  },
  {
    id: 47,
    brand: "Jordan",
    name: "Air Jordan 4",
    color: "Red",
    size: 40,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBs4KMqK0innpEtPomplzdgHcvcuXfH4bEzIp_kMP5w&s=10",
  },
  {
    id: 48,
    brand: "Jordan",
    name: "Air Jordan 1 Mid",
    color: "White",
    size: 42,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH6tQBIm8TxkiueJYTrBLZ86K8hC4VBN2mxfzKHGR7w&s=10",
  },
  {
    id: 49,
    brand: "Jordan",
    name: "Air Jordan 3",
    color: "Blue",
    size: 44,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvstKgQFg4-0vtoOu1JXluJ2y8vmcisTaKGJjx-QW86A&s=10",
  },
  {
    id: 50,
    brand: "Jordan",
    name: "Air Jordan 11",
    color: "Grey",
    size: 40,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzL0jIXCZBT3Nv1kUSgAtVs_xYpRMrAqnEW-AK5jhDGw&s=10",
  },
  {
    id: 51,
    brand: "Jordan",
    name: "Air Jordan 5",
    color: "Green",
    size: 42,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFq6wtlIhJUGdNfmdvWmTY7jujHKR1qJO3bso9szszg&s=10",
  },
  {
    id: 52,
    brand: "Jordan",
    name: "Air Jordan 6",
    color: "Blue",
    size: 40,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvstKgQFg4-0vtoOu1JXluJ2y8vmcisTaKGJjx-QW86A&s=10",
  },
  {
    id: 53,
    brand: "Jordan",
    name: "Air Jordan 12",
    color: "Black",
    size: 42,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyYFqZ4Qu_McRT88TE9hREtE0Cwo0yV7TGbr3XV06cw&s=10",
  },
  {
    id: 54,
    brand: "Jordan",
    name: "Air Jordan 13",
    color: "White",
    size: 44,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH6tQBIm8TxkiueJYTrBLZ86K8hC4VBN2mxfzKHGR7w&s=10",
  },
  {
    id: 55,
    brand: "Jordan",
    name: "Air Jordan 2",
    color: "Blue",
    size: 42,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvstKgQFg4-0vtoOu1JXluJ2y8vmcisTaKGJjx-QW86A&s=10",
  },
  {
    id: 56,
    brand: "Jordan",
    name: "Stay Loyal",
    color: "Blue",
    size: 44,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvstKgQFg4-0vtoOu1JXluJ2y8vmcisTaKGJjx-QW86A&s=10",
  },
  {
    id: 57,
    brand: "Jordan",
    name: "Max Aura",
    color: "Red",
    size: 40,
    price: 5000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBs4KMqK0innpEtPomplzdgHcvcuXfH4bEzIp_kMP5w&s=10",
  },
  {
    id: 58,
    brand: "Jordan",
    name: "Jordan Delta",
    color: "Grey",
    size: 42,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzL0jIXCZBT3Nv1kUSgAtVs_xYpRMrAqnEW-AK5jhDGw&s=10",
  },
  {
    id: 59,
    brand: "Jordan",
    name: "One Take",
    color: "Blue",
    size: 40,
    price: 10000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvstKgQFg4-0vtoOu1JXluJ2y8vmcisTaKGJjx-QW86A&s=10",
  },
  {
    id: 60,
    brand: "Jordan",
    name: "Courtside",
    color: "Green",
    size: 44,
    price: 8000,
    imageURl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFq6wtlIhJUGdNfmdvWmTY7jujHKR1qJO3bso9szszg&s=10",
  },
];

const productContainer = document.querySelector(".product-container");

const resetbtn = document.getElementById("reset");
const brandFilter = document.querySelector("#brandFilter");
const colorFilter = document.querySelector("#colorFilter");
const sizeFilter = document.querySelector("#sizeFilter");
const priceFilter = document.querySelector("#priceFilter");

// Brand aur Color dropdowns ki values ke mutabiq filtering
function filterProducts() {
  const selectedBrand = brandFilter.value;
  const selectedColor = colorFilter.value;
  const selectedSize = sizeFilter.value;
  const selectedPrice = priceFilter.value;

  const filteredProducts = products.filter((product) => {
    return (
      (selectedBrand === "All" || product.brand === selectedBrand) &&
      (selectedColor === "All" || product.color === selectedColor) &&
      (selectedSize === "All" || product.size === Number(selectedSize)) &&
      (selectedPrice === "All" || product.price === Number(selectedPrice))
    );
  });
  displayProducts(filteredProducts);
}

// Filter hone wale products ko cards mein show karna
function displayProducts(productList) {
  productContainer.innerHTML = "";

  productList.forEach((product) => {
    productContainer.innerHTML += `
     <div class="product-card">
        <div class="product-image">
          <img
          src="${product.imageURl}"
            alt="${product.brand} ${product.name}"
          >
          <span class="product-badge">Popular</span>
        </div>

        <div class="product-info">
          <p class="product-brand">${product.brand}</p>
          <h3 class="product-name">${product.name}</h3>

          <div class="product-details">
            <span>Color: ${product.color}</span>
            <span>Size: ${product.size}</span>
          </div>

          <div class="product-bottom">
            <p class="product-price">Rs. ${product.price.toLocaleString()}</p>
            <button class="buy-btn">View Details</button>
          </div>
        </div>
      </div> 
    `;
  });
}

function resetFilters() {
  brandFilter.value = "All";
  colorFilter.value = "All";
  sizeFilter.value = "All";
  priceFilter.value = "All";

  displayProducts(products);
}

// Teno dropdowns change hon to filtering dobara chale
brandFilter.addEventListener("change", filterProducts);
colorFilter.addEventListener("change", filterProducts);
sizeFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
resetbtn.addEventListener("click", resetFilters);

// Shuru mein tamam products show hon
displayProducts(products);

/* <div class="product-card">
        <div class="product-image">
          <img
          src="${product.imageURl || "https://placehold.co/280x210?text=Shoe"}"
            alt="${product.brand} ${product.name}"
          >
          <span class="product-badge">Popular</span>
        </div>

        <div class="product-info">
          <p class="product-brand">${product.brand}</p>
          <h3 class="product-name">${product.name}</h3>

          <div class="product-details">
            <span>Color: ${product.color}</span>
            <span>Size: ${product.size}</span>
          </div>

          <div class="product-bottom">
            <p class="product-price">Rs. ${product.price.toLocaleString()}</p>
            <button class="buy-btn">View Details</button>
          </div>
        </div>
      </div> */
