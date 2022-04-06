
const shipA = {length: 4, isVertical: true, startPos: [5, 5]};
const shipB = {length: 3, isVertical: true, startPos: [3, 2]};
const shipC = {length: 3, isVertical: false, startPos: [6, 8]};
const shipD = {length: 2, isVertical: true, startPos: [0, 9]};
const shipE = {length: 2, isVertical: false, startPos: [2, 5]};
const shipF = {length: 2, isVertical: true, startPos: [8, 4]};
const shipG = {length: 1, isVertical: true, startPos: [0, 3]};
const shipH = {length: 1, isVertical: true, startPos: [0, 5]};
const shipI = {length: 1, isVertical: true, startPos: [8, 0]};
const shipJ = {length: 1, isVertical: true, startPos: [3, 9]};

const shipParams = [shipA, shipB, shipC, shipD, shipE,
              shipF, shipG, shipH, shipI, shipJ];

const shipPositions = [[3,0], [3,1], [3,2], [8,0], [5,2],
                      [5,3], [5,4], [5,5], [0,3], [8,3],
                      [8,4], [0,5], [2,5], [3,5], [0,8],
                      [0,9], [3,9], [6,8], [7,8], [8,8]];

export { shipParams, shipPositions };




