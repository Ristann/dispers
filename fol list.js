export async function getTokensPrice(tokens) {
    let prices = {}
    let isFetched = false
    let retry = 0

    while (!isFetched) {
        const agent = getProxy(0, true)
        await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tokens}&tsyms=USD`, {
            httpsAgent: agent
        }).then(response => {
            prices = response.data
            isFetched = true
        }).catch(e => {
            retry++

            if (retry > 3) {
                isFetched = true
            }
        })
    }

    return prices
}

export const entryPoint = async () => {
    const questions = [
        {
            name: "choice",
            type: "list",
            message: "Action:",
            choices: [
                {
                    name: "Web version",
                    value: "web",
                },
                {
                    name: "Eclipse",
                    value: "eclipse",
                },
                {
                    name: "Story",
                    value: "story",
                },
                {
                    name: "Jumper",
                    value: "jumper",
                },
                {
                    name: "ZkSync",
                    value: "zksync",
                },
                {
                    name: "Layerzero",
                    value: "layerzero",
                },
                {
                    name: "Debridge",
                    value: "debridge",
                },
                {
                    name: "Hyperlane",
                    value: "hyperlane",
                },
                {
                    name: "ZkBridge",
                    value: "zkbridge",
                },
                {
                    name: "Wormhole",
                    value: "wormhole",
                },
                {
                    name: "Zora",
                    value: "zora",
                },
                {
                    name: "Base",
                    value: "base",
                },
                {
                    name: "Polygon ZK EVM",
                    value: "polygonzkevm",
                },
                {
                    name: "Aptos",
                    value: "aptos",
                },
                {
                    name: "Linea",
                    value: "linea",
                },
                {
                    name: "Linea POH",
                    value: "linea-poh",
                },
                {
                    name: "Scroll",
                    value: "scroll",
                },
                {
                    name: "EVM checker",
                    value: "evm",
                },
                {
                    name: "Balances",
                    value: "balances",
                },
                {
                    name: "Rabby",
                    value: "rabby",
                },
                {
                    name: "Galxe",
                    value: "galxe",
                }
            ],
            default: "web",
            loop: false,
        },
    ]

    const answers = await inquirer.prompt(questions)
    return answers.choice
}

export const chooiceNetwork = async () => {
    const questions = [
