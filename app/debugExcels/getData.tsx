


export const getDebugData = async (startDate, endDate) => {

    const headers: string[] = ["group", "revenue", "change"]
    const data: string[][][] = [[
        ["North", "1200230", "12.00"]],
    [
        ["Manhatten", "97780", "4.00"],
        ["Store 2", "100243", "5.00"],
        ["Store 3", "102706", "-3.00"],
        ["Store 4", "105169", "1.00"],
        ["Store 5", "107632", "3.00"],
        ["Store 6", "6867700", "3.00"],
    ],
    [["west", "9008699", "-10.00"]],
    [["east", "1545001", "1.00"]],
    [["total", '', "3.00"]]
    ]

    return { headers, data }
}



export const getDebugData2 = async (startDate, endDate) => {

    const headers: string[] = ["group", "revenue", "change2"]
    const data: string[][][] = [[
        ["north", "400", "3.00"],
        ["Store 2", "10243", "2.00"],
        ["Store 3", "2706", "-2.00"],
        ["Store 4", "1069", "-1.00"],
        ["Store 5", "17632", "1.00"],
        ["Store 6", "86700", "1.00"],
    ],
    [
        ["Manhatten", "43000", "3.00"],
        ["Store 4", "105169", "1.00"],
        ["Store 5", "1032", "3.00"],
        ["Store 6", "66700", "3.00"],
    ],
    [["west", "9008699", "-10.00"]],
    [["east", "1545001", "1.00"]],
    [["total", '', "4.00"]]
    ]

    return { headers, data }
}