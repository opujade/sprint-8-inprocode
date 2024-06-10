/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cat: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspHuK3v50CmSiQqr93cWCTCKcCWr_WkzUlQ&s)",
        esp: "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIUAjQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAABgUH/8QAHhABAAAFBQAAAAAAAAAAAAAAAAEWVZPRAgMEBRX/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAwUGBAL/xAAgEQEAAAQHAQAAAAAAAAAAAAAAAxNRUgEEEhWRodEC/9oADAMBAAIRAxEAPwCJAVjegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOs+F1VP41uB4XVU/jW4NEYOfFux5VOv6qzvC6qn8a3A8LqqfxrcGiE+Ldjya/qrO8LqqfxrcDwuqp/GtwaIT4t2PJr+qs7wuqp/GtwPC6qn8a3BohPi3Y8mv6qzvC6qn8a3A8LqqfxrcGiE+Ldjya/qrO8LqqfxrcDwuqp/GtwaIT4t2PJr+qs7wuqp/GtwPC6qn8a3BohPi3Y8mv6qzvC6qn8a3A8LqqfxrcGiE+Ldjya/qrO8LqqfxrcDwuqp/GtwaIT4t2PJr+qgCJ5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0+btP0XY4J83afouxwjhstrylnePqykQ6LGfN2n6LscE+btP0XY4RwbXlLO8fSRDosZ83afouxwT5u0/RdjhHBteUs7x9JEOixnzdp+i7HBPm7T9F2OEcG15SzvH0kQ6LGfN2n6LscE+btP0XY4RwbXlLO8fSRDosZ83afouxwT5u0/RdjhHBteUs7x9JEOixnzdp+i7HBPm7T9F2OEcG15SzvH0kQ6LGfN2n6LscE+btP0XY4RwbXlLO8fSRDosZ83afouxwT5u0/RdjhHBteUs7x9JEOgA70wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==)",
        eng: "url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/255px-Flag_of_the_United_Kingdom.svg.png)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#ec765c",
          secondary: "#75b5be",
          "base-100": "#f8eadd",
        },
      },
      {
        dark: {
          primary: "#8c3a2d",
          secondary: "#3b5a5e",
          "base-100": "#3b2a25",
        },
      },
    ],
  },
};
