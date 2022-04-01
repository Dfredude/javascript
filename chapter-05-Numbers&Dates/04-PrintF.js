function Printf(num, formatting){
    if (formatting[0] === '%'){
        let result = ''
        formatting = formatting.slice(1)
        let i = 0
        switch (formatting[i]){
            case '0':
                result = result.concat('0'.repeat(formatting[i+1]))
                i++
                num = num.toString(16)
                result = result.concat(num)
        }
        console.log(result);
        return result
            
    }


}

Printf(42, "%04x")