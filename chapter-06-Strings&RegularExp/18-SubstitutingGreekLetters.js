const greek = (fragments, ...values) => {
    const substitutions = {
        alpha:  "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ϵ",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        '[omicron]': "ℴ",
        pi: "π",
        rho: "ρ",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "ϕ",
        chi: "χ",
        psi: "ψ",
        omega: "ω"
    }
    const substitute = str => str.replace(/\\?\\[a-z]+/, match => (
        substitutions[match.slice(1)] ?? "| Not a valid Greek letter! |"
    ))
    let result = substitute(fragments.raw[0])
    for (let i = 0; i < values.length; i++) {
        result += values[i] + substitute(fragments.raw[i+1])
    }
    return result
}
let variable = 5
console.log(greek`I need to write greek letters (specifically, \mu=${5}, \alpha=${variable}, \tau=${5561}) in a teletyped font.
I hope this works: \random= ${"invalid"}`)