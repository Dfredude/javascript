const printf = (fragments, ...args) => {
    let result = fragments[0]
    const types = ['d', 'i', 's', 'f']
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        let offset = 1
        let left_align = false
        const fragment = fragments[i+1]
        const type = types.find((current) => fragment.includes(current))
        let placeholder = fragment.slice(fragment.indexOf("%"), fragment.indexOf(type))
        const ending = fragment.slice(fragment.indexOf(type)+1)
        if (placeholder[offset] === '-') { 
            left_align = true
            offset++ 
        }
        placeholder = placeholder.slice(offset).split('.')
        if (placeholder.length > 0){
            if (type === 'f'){
                const precision = placeholder[1] ?? 0
                arg = arg.toPrecision(precision).toString()
            }
            arg = arg.toString()
            const diff = parseInt(placeholder[0]) - arg.length
            if (diff>0) {
                if (left_align){
                    result += arg
                    result += ' '.repeat(diff)
                } else result += ' '.repeat(diff) + arg
            } else result += arg

        }
        result += ending
    }
    return result
}

const [item, quantity, price] = ["Tomatos", 40, 7.651]

const result = printf`${item}%-40s | ${quantity}%6d | ${price}%10.2f`

console.log(result);