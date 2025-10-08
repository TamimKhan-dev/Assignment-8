const formatCountNumbers = (downloads) => {
    const num = downloads.toString();
        let result = '';
        switch(num.length) {
            case 4 :
                result = num.slice(0, 1) + "K"
              break;
            case 5 :
                result = num.slice(0, 2) + "K"
              break;
            case 6 :
                result = num.slice(0, 3) + "K"
              break;    
            case 7 :
               result = num.slice(0, 1) + "M"
              break;
            case 8 :
                result = num.slice(0, 2) + "M"
              break;
            case 9 :
                result = num.slice(0, 3) + "M"
              break;
            case 10 :
                result = num.slice(0, 1) + "B"
              break;  
            default :
               if (num.length < 7) {
                result = 'less then 1m'
               } else {
                result = num.slice(0, 2) + 'B'
               }
              break;
        }
        return  result;
}

export default formatCountNumbers;