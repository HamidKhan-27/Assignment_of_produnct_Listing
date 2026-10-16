# 👟 Shoe Product Listing Website

A dynamic and interactive shoe product listing website built using **HTML, CSS, and JavaScript**. This project allows users to browse shoe products and filter them by brand and color.

## 📌 Project Overview

The Shoe Product Listing Website displays shoes in product cards containing product images, brand names, product names, colors, sizes, prices, and a View Details button.

JavaScript is used to dynamically generate product cards from an array of objects and filter products according to the selected dropdown options.

## ✨ Features

- **Dynamic Product Listing:** Displays products using JavaScript.
- **Brand Filter:** Filter shoes by Nike, Adidas, Puma, and Jordan.
- **Color Filter:** Filter shoes by available colors.
- **Combined Filtering:** Filter products by brand and color simultaneously.
- **Product Cards:** Displays product images, brand, name, color, size, and price.
- **Formatted Prices:** Uses `toLocaleString()` to make prices easier to read.
- **Fallback Images:** Displays a placeholder image when a product image URL is unavailable.
- **Responsive Styling:** Product cards and layout are styled using CSS.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)

## 📂 Project Structure

```text
shoe-product-listing/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

### 1. Product Data

Products are stored in an array of objects. Each object contains information such as:

- `id`
- `brand`
- `name`
- `color`
- `size`
- `price`
- `imageURl`

### 2. Product Filtering

The `filterProducts()` function reads the selected brand and color from the dropdowns.

It uses JavaScript's `filter()` method to create a new array containing only the products that match the selected criteria.

If **All** is selected in a dropdown, that filter does not restrict the products by that particular property.

### 3. Dynamic Product Cards

The `displayProducts()` function generates HTML cards using `forEach()` and template literals.

Before rendering the new cards, it clears the previous content from the product container. This ensures that only the currently matching products are displayed.

### 4. Event Handling

The `addEventListener()` method listens for changes in the brand and color dropdowns. When a selection changes, the filtering function runs again.

## 🚀 How to Run the Project

1. Download or clone the project repository.
2. Open the project folder in your code editor.
3. Make sure `index.html`, `style.css`, and `script.js` are correctly linked.
4. Open `index.html` in your browser.
5. Use the Brand and Color dropdowns to filter the shoes.

## 📚 JavaScript Concepts Practiced

- Variables using `const`
- DOM selection with `document.querySelector()`
- Reading form values using `.value`
- Functions and parameters
- Arrays and objects
- The `filter()` array method
- The `forEach()` array method
- Arrow functions
- `return` statements
- Comparison operators (`===`)
- Logical operators (`||` and `&&`)
- Template literals and `${}` interpolation
- DOM manipulation with `innerHTML`
- Event handling with `addEventListener()`
- Fallback values using the logical OR operator (`||`)
- Number formatting with `toLocaleString()`

## 🎯 Learning Objectives

The main goal of this assignment was to practice JavaScript fundamentals by building a practical webpage.

This project helped reinforce the concepts of working with arrays of objects, selecting HTML elements, applying multiple filtering conditions, generating dynamic HTML, and responding to user interactions.

## 🔮 Future Improvements

- Add a size filter.
- Add sorting by price (low to high and high to low).
- Add a search bar for product names.
- Implement functional View Details buttons.
- Improve mobile responsiveness.
- Add a shopping cart feature.

## 👨‍💻 Author

Created as a JavaScript practice assignment to strengthen DOM manipulation, array methods, and event-handling skills.

---

**Status:** Completed — brand and color filtering are working.
