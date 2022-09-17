module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend:{
      colors:{
        primary: '#c70039',
        secondary: '#D87878',
        white: '#fff',
        black: '#000',
        pText: '#f4dcff',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      }
    }
    
    
    
      
     
  
  },
  plugins: [],
}
