export const INITIAL_BOARD = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null]
]

export const generateBoard = (cellsNum) => {
    return [
        [null, 2, null, null, null, null, null, null, 1],
        [null, null, null, 5, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [6, null, null, null, null, 8, null, null, null],
        [null, null, null, null, null, null, null, null, null],
        [null, null, null, null, 4, null, null, null, null],
        [null, null, null, 7, null, null, null, null, null],
        [3, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, 9]
    ]
}
