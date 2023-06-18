/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: { backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  },colors: {
    main: "var(--main)",
    primary: "var(--primary)",
    primaryOne:"var(--primary-100)",
primarytwo:"var(--primary-200)",
    purple: "var(--purple)",
    purpleone:"var(--purple-100)",
    gray: "var(--gray)",
    graytwo:"var(--gray-200)",
    graythree:"var(--gray-300)",
    orange:"var(--orange)",
    orangeone:"var(--orange-100)",
    'dark-gunmetal': "var(--dark-gunmetal)",
    'blue-chalk': "var(--blue-chalk)",
    'soapstone': "var(--soapstone-white)",
    'blue-lavender': "var(--blue-lavender)",
},},
  },
  
  plugins: [],
}

