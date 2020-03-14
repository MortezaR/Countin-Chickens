const Sprite = require('./sprite');


let easy_deck = {
    okc: { 1: { value: 1, color: 'black', type: 'chicken' } },
    okp: { 1: { value: 1, color: 'black', type: 'pig' } },
    oks: { 1: { value: 1, color: 'black', type: 'sheep' } },
    obc: { 1: { value: 1, color: 'blue', type: 'chicken' } },
    obp: { 1: { value: 1, color: 'blue', type: 'pig' } },
    obs: { 1: { value: 1, color: 'blue', type: 'sheep' } },
    obw: { 1: { value: 1, color: 'blue', type: 'wild' } },
    orc: { 1: { value: 1, color: 'red', type: 'chicken' } },
    orp: { 1: { value: 1, color: 'red', type: 'pig' } },
    ors: { 1: { value: 1, color: 'red', type: 'sheep' } },
    orw: { 1: { value: 1, color: 'red', type: 'wild' } },
    oyc: { 1: { value: 1, color: 'yellow', type: 'chicken' } },
    oyp: { 1: { value: 1, color: 'yellow', type: 'pig' } },
    oys: { 1: { value: 1, color: 'yellow', type: 'sheep' } },
    oyw: { 1: { value: 1, color: 'yellow', type: 'wild' } },

    tkc: { 1: { value: 2, color: 'black', type: 'chicken' } },
    tkp: { 1: { value: 2, color: 'black', type: 'pig' } },
    tks: { 1: { value: 2, color: 'black', type: 'sheep' } },
    tbc: { 1: { value: 2, color: 'blue', type: 'chicken' } },
    tbp: { 1: { value: 2, color: 'blue', type: 'pig' } },
    tbs: { 1: { value: 2, color: 'blue', type: 'sheep' } },
    tbw: { 1: { value: 2, color: 'blue', type: 'wild' } },
    trc: { 1: { value: 2, color: 'red', type: 'chicken' } },
    trp: { 1: { value: 2, color: 'red', type: 'pig' } },
    trs: { 1: { value: 2, color: 'red', type: 'sheep' } },
    trw: { 1: { value: 2, color: 'red', type: 'wild' } },
    tyc: { 1: { value: 2, color: 'yellow', type: 'chicken' } },
    typ: { 1: { value: 2, color: 'yellow', type: 'pig' } },
    tys: { 1: { value: 2, color: 'yellow', type: 'yellow' } },
    tyw: { 1: { value: 2, color: 'yellow', type: 'wild' } },

    obcorp: { 1: { value: 1, color: 'blue', type: 'chicken' }, 2: { value: 1, color: 'red', type: 'pig' } },
    obcoyp: { 1: { value: 1, color: 'blue', type: 'chicken' }, 2: { value: 1, color: 'yellow', type: 'pig' } },
    obpors: { 1: { value: 1, color: 'blue', type: 'pig' }, 2: { value: 1, color: 'red', type: 'sheep' } },
    obcoys: { 1: { value: 1, color: 'blue', type: 'chicken' }, 2: { value: 1, color: 'yellow', type: 'sheep' } },
    obcorc: { 1: { value: 1, color: 'blue', type: 'chicken' }, 2: { value: 1, color: 'red', type: 'chicken' } },
    obporp: { 1: { value: 1, color: 'blue', type: 'pig' }, 2: { value: 1, color: 'red', type: 'pig' } },
    obsors: { 1: { value: 1, color: 'blue', type: 'sheep' }, 2: { value: 1, color: 'red', type: 'sheep' } },
    obsorc: { 1: { value: 1, color: 'blue', type: 'sheep' }, 2: { value: 1, color: 'red', type: 'chicken' } },
    obsoyc: { 1: { value: 1, color: 'blue', type: 'sheep' }, 2: { value: 1, color: 'yellow', type: 'chicken' } },
    obpobc: { 1: { value: 1, color: 'blue', type: 'pig' }, 2: { value: 1, color: 'blue', type: 'chicken' } },
    orporc: { 1: { value: 1, color: 'red', type: 'pig' }, 2: { value: 1, color: 'red', type: 'chicken' } },
    oypoyc: { 1: { value: 1, color: 'yellow', type: 'pig' }, 2: { value: 1, color: 'yellow', type: 'chicken' } },
    obpobs: { 1: { value: 1, color: 'blue', type: 'pig' }, 2: { value: 1, color: 'blue', type: 'sheep' } },
    orpors: { 1: { value: 1, color: 'red', type: 'pig' }, 2: { value: 1, color: 'red', type: 'sheep' } },
    oypoys: { 1: { value: 1, color: 'yellow', type: 'pig' }, 2: { value: 1, color: 'yellow', type: 'sheep' } },
    orcobp: { 1: { value: 1, color: 'red', type: 'chicken' }, 2: { value: 1, color: 'blue', type: 'pig' } },
    orcoyp: { 1: { value: 1, color: 'red', type: 'chicken' }, 2: { value: 1, color: 'yellow', type: 'pig' } },
    orpobs: { 1: { value: 1, color: 'red', type: 'pig' }, 2: { value: 1, color: 'blue', type: 'sheep' } },
    orpoys: { 1: { value: 1, color: 'red', type: 'pig' }, 2: { value: 1, color: 'yellow', type: 'sheep' } },
    orsobc: { 1: { value: 1, color: 'red', type: 'sheep' }, 2: { value: 1, color: 'blue', type: 'chicken' } },
    orsoyc: { 1: { value: 1, color: 'red', type: 'sheep' }, 2: { value: 1, color: 'yellow', type: 'chicken' } },
    orcoyc: { 1: { value: 1, color: 'red', type: 'chicken' }, 2: { value: 1, color: 'yellow', type: 'chicken' } },
    orpoyp: { 1: { value: 1, color: 'red', type: 'pig' }, 2: { value: 1, color: 'yellow', type: 'pig' } },
    orsoys: { 1: { value: 1, color: 'red', type: 'sheep' }, 2: { value: 1, color: 'yellow', type: 'sheep' } },
    obsobc: { 1: { value: 1, color: 'blue', type: 'sheep' }, 2: { value: 1, color: 'blue', type: 'chicken' } },
    orsorc: { 1: { value: 1, color: 'red', type: 'sheep' }, 2: { value: 1, color: 'red', type: 'chicken' } },
    oysoyc: { 1: { value: 1, color: 'yellow', type: 'sheep' }, 2: { value: 1, color: 'yellow', type: 'chicken' } },
    oycobc: { 1: { value: 1, color: 'yellow', type: 'chicken' }, 2: { value: 1, color: 'blue', type: 'chicken' } },
    oypobp: { 1: { value: 1, color: 'yellow', type: 'pig' }, 2: { value: 1, color: 'blue', type: 'pig' } },
    oysobs: { 1: { value: 1, color: 'yellow', type: 'sheep' }, 2: { value: 1, color: 'blue', type: 'sheep' } },
    oycobp: { 1: { value: 1, color: 'yellow', type: 'chicken' }, 2: { value: 1, color: 'blue', type: 'pig' } },
    oycorp: { 1: { value: 1, color: 'yellow', type: 'chicken' }, 2: { value: 1, color: 'red', type: 'pig' } },
    oypobs: { 1: { value: 1, color: 'yellow', type: 'pig' }, 2: { value: 1, color: 'blue', type: 'sheep' } },
    oypors: { 1: { value: 1, color: 'yellow', type: 'pig' }, 2: { value: 1, color: 'red', type: 'sheep' } },
    oysobc: { 1: { value: 1, color: 'yellow', type: 'sheep' }, 2: { value: 1, color: 'blue', type: 'chicken' } },
    oysorc: { 1: { value: 1, color: 'yellow', type: 'sheep' }, 2: { value: 1, color: 'red', type: 'chicken' } },

    nokc: { 1: { value: -1, color: 'black', type: 'chicken' } },
    nokp: { 1: { value: -1, color: 'black', type: 'pig' } },
    noks: { 1: { value: -1, color: 'black', type: 'sheep' } },
    nobc: { 1: { value: -1, color: 'blue', type: 'chicken' } },
    nobp: { 1: { value: -1, color: 'blue', type: 'pig' } },
    nobs: { 1: { value: -1, color: 'blue', type: 'sheep' } },
    norc: { 1: { value: -1, color: 'red', type: 'chicken' } },
    norp: { 1: { value: -1, color: 'red', type: 'pig' } },
    nors: { 1: { value: -1, color: 'red', type: 'sheep' } },
    noyc: { 1: { value: -1, color: 'yellow', type: 'chicken' } },
    noyp: { 1: { value: -1, color: 'yellow', type: 'pig' } },
    noys: { 1: { value: -1, color: 'yellow', type: 'sheep' } },

    ntkc: { 1: { value: -2, color: 'black', type: 'chicken' } },
    ntkp: { 1: { value: -2, color: 'black', type: 'pig' } },
    ntks: { 1: { value: -2, color: 'black', type: 'sheep' } },
    ntbc: { 1: { value: -2, color: 'blue', type: 'chicken' } },
    ntbp: { 1: { value: -2, color: 'blue', type: 'pig' } },
    ntbs: { 1: { value: -2, color: 'blue', type: 'sheep' } },
    ntrc: { 1: { value: -2, color: 'red', type: 'chicken' } },
    ntrp: { 1: { value: -2, color: 'red', type: 'pig' } },
    ntrs: { 1: { value: -2, color: 'red', type: 'sheep' } },
    ntyc: { 1: { value: -2, color: 'yellow', type: 'chicken' } },
    ntyp: { 1: { value: -2, color: 'yellow', type: 'pig' } },
    ntys: { 1: { value: -2, color: 'yellow', type: 'sheep' } },

    hyw: { 1: { value: 3, color: 'yellow', type: 'wild' } },
    hrw: { 1: { value: 3, color: 'red', type: 'wild' } },
    hbw: { 1: { value: 3, color: 'blue', type: 'wild' } },

    hkc: { 1: { value: 3, color: 'black', type: 'chicken' } },
    hks: { 1: { value: 3, color: 'black', type: 'sheep' } },
    hkp: { 1: { value: 3, color: 'black', type: 'pig' } },

    oycoysoyp: { 1: { value: 1, color: 'yellow', type: 'chicken' }, 2: { value: 1, color: 'yellow', type: 'sheep' }, 3: { value: 1, color: 'yellow', type: 'pig' } },
    orcorsorp: { 1: { value: 1, color: 'red', type: 'chicken' }, 2: { value: 1, color: 'red', type: 'pig' }, 3: { value: 1, color: 'red', type: 'pig' } },
    obcobsobp: { 1: { value: 1, color: 'blue', type: 'chicken' }, 2: { value: 1, color: 'blue', type: 'sheep' }, 3: { value: 1, color: 'blue', type: 'pig' } },
    okcobsokp: { 1: { value: 1, color: 'black', type: 'chicken' }, 2: { value: 1, color: 'black', type: 'sheep' }, 3: { value: 1, color: 'black', type: 'pig' } },
    oycorcobc: { 1: { value: 1, color: 'yellow', type: 'chicken' }, 2: { value: 1, color: 'red', type: 'chicken' }, 3: { value: 1, color: 'blue', type: 'chicken' } },
    oysorsobs: { 1: { value: 1, color: 'yellow', type: 'sheep' }, 2: { value: 1, color: 'red', type: 'sheep' }, 3: { value: 1, color: 'blue', type: 'sheep' } },
    oyporpobp: { 1: { value: 1, color: 'yellow', type: 'pig' }, 2: { value: 1, color: 'red', type: 'pig' }, 3: { value: 1, color: 'blue', type: 'pig' } },

}
// o is one
// t is two
// h is three

// b is black
// u is blue
// r is red
// y is yellow

// c is chicken
// p is pig
// s is sheep
// w is wild

// n is negative
let sum_deck = {
    ucrp: {values: [{ color: 'blue', type: 'chicken'},{color: 'red', type: 'pig'}]},
    ucyp: {values: [{ color: 'blue', type: 'chicken'},{color: 'yellow', type: 'pig'}]},
    uprs: {values: [{ color: 'blue', type: 'pig'},{color: 'red', type: 'sheep'}]},
    upys: {values: [{ color: 'blue', type: 'pig'},{color: 'yellow', type: 'sheep'}]},
    usrc: {values: [{ color: 'blue', type: 'sheep'},{color: 'red', type: 'chicken'}]},
    usyc: {values: [{ color: 'blue', type: 'sheep'},{color: 'yellow', type: 'chicken'}]},
    rcbp: {values: [{ color: 'red', type: 'chicken'},{color: 'blue', type: 'pig'}]},
    rcyp: {values: [{ color: 'red', type: 'chicken'},{color: 'yellow', type: 'pig'}]},
    rpbs: {values: [{ color: 'red', type: 'pig'},{color: 'blue', type: 'sheep'}]},
    rpys: {values: [{ color: 'red', type: 'pig'},{color: 'yellow', type: 'sheep'}]},
    rsbc: {values: [{ color: 'red', type: 'sheep'},{color: 'blue', type: 'chicken'}]},
    rsyc: {values: [{ color: 'red', type: 'sheep'},{color: 'yellow', type: 'chicken'}]},
    ycbp: {values: [{ color: 'yellow', type: 'chicken'},{color: 'blue', type: 'pig'}]},
    ycrp: {values: [{ color: 'yellow', type: 'chicken'},{color: 'red', type: 'pig'}]},
    ypbs: {values: [{ color: 'yellow', type: 'pig'},{color: 'blue', type: 'sheep'}]},
    yprs: {values: [{ color: 'yellow', type: 'pig'},{color: 'red', type: 'sheep'}]},
    ysbc: {values: [{ color: 'yellow', type: 'sheep'},{color: 'blue', type: 'chicken'}]},
    ysrc: {values: [{ color: 'yellow', type: 'sheep'},{color: 'red', type: 'chicken'}]},
    uw: {values: [{ color: 'blue', type: 'wild' }]},
    rw: {values: [{ color: 'red', type: 'wild' }] },
    yw: {values: [{ color: 'yellow', type: 'wild' }] },
    bc: {values: [{ color: 'black', type: 'chicken' }]},
    bp: {values: [{ color: 'black', type: 'pig' }]},
    bs: {values: [{ color: 'black', type: 'sheep' }]}
}

let sprites = {
    okc: new Sprite('.././images/1blackchicken.png', 675, 1050),
    okp: new Sprite('.././images/1blackpig.png', 675, 1050),
    oks: new Sprite('.././images/1blacksheep.png', 675, 1050),
    obc: new Sprite('.././images/1bluechicken.png', 675, 1050),
    obp: new Sprite('.././images/1bluepig.png', 675, 1050),
    obs: new Sprite('.././images/1bluesheep.png', 675, 1050),
    obw: new Sprite('.././images/1bluestar.png', 675, 1050),
    orc: new Sprite('.././images/1redchicken.png', 675, 1050),
    orp: new Sprite('.././images/1redpig.png', 675, 1050),
    ors: new Sprite('.././images/1redsheep.png', 675, 1050),
    orw: new Sprite('.././images/1redstar.png', 675, 1050),
    oyc: new Sprite('.././images/1yellowchicken.png', 675, 1050),
    oyp: new Sprite('.././images/1yellowpig.png', 675, 1050),
    oys: new Sprite('.././images/1yellowsheep.png', 675, 1050),
    oyw: new Sprite('.././images/1yellowstar.png', 675, 1050),

    tkc: new Sprite('.././images/2blackchicken.png', 675, 1050),
    tkp: new Sprite('.././images/2blackpig.png', 675, 1050),
    tks: new Sprite('.././images/2blacksheep.png', 675, 1050),
    tbc: new Sprite('.././images/2bluechicken.png', 675, 1050),
    tbp: new Sprite('.././images/2bluepig.png', 675, 1050),
    tbs: new Sprite('.././images/2bluesheep.png', 675, 1050),
    tbw: new Sprite('.././images/2bluestar.png', 675, 1050),
    trc: new Sprite('.././images/2redchicken.png', 675, 1050),
    trp: new Sprite('.././images/2redpig.png', 675, 1050),
    trs: new Sprite('.././images/2redsheep.png', 675, 1050),
    trw: new Sprite('.././images/2redstar.png', 675, 1050),
    tyc: new Sprite('.././images/2yellowchicken.png', 675, 1050),
    typ: new Sprite('.././images/2yellowpig.png', 675, 1050),
    tys: new Sprite('.././images/2yellowsheep.png', 675, 1050),
    tyw: new Sprite('.././images/2yellowstar.png', 675, 1050),

    obcorp: new Sprite('.././images/2bluechickenredpig.png', 675, 1050),
    obcoyp: new Sprite('.././images/2bluechickenyellowpig.png', 675, 1050),
    obpors: new Sprite('.././images/2bluepigredsheep.png', 675, 1050),
    obcoys: new Sprite('.././images/2bluepigyellowsheep.png', 675, 1050),
    obcorc: new Sprite('.././images/2blueredchicken.png', 675, 1050),
    obporp: new Sprite('.././images/2blueredpig.png', 675, 1050),
    obsors: new Sprite('.././images/2blueredsheep.png', 675, 1050),
    obsorc: new Sprite('.././images/2bluesheepredchicken.png', 675, 1050),
    obsoyc: new Sprite('.././images/2bluesheepyellowchicken.png', 675, 1050),
    obpobc: new Sprite('.././images/2pigchickenblue.png', 675, 1050),
    orporc: new Sprite('.././images/2pigchickenred.png', 675, 1050),
    oypoyc: new Sprite('.././images/2pigchickenyellow.png', 675, 1050),
    obpobs: new Sprite('.././images/2pigsheepblue.png', 675, 1050),
    orpors: new Sprite('.././images/2pigsheepred.png', 675, 1050),
    oypoys: new Sprite('.././images/2pigsheepyellow.png', 675, 1050),
    orcobp: new Sprite('.././images/2redchickenbluepig.png', 675, 1050),
    orcoyp: new Sprite('.././images/2redchickenyellowpig.png', 675, 1050),
    orpobs: new Sprite('.././images/2redpigbluesheep.png', 675, 1050),
    orpoys: new Sprite('.././images/2redpigyellowsheep.png', 675, 1050),
    orsobc: new Sprite('.././images/2redsheepbluechicken.png', 675, 1050),
    orsoyc: new Sprite('.././images/2redsheepyellowchicken.png', 675, 1050),
    orcoyc: new Sprite('.././images/2redyellowchicken.png', 675, 1050),
    orpoyp: new Sprite('.././images/2redyellowpig.png', 675, 1050),
    orsoys: new Sprite('.././images/2redyellowsheep.png', 675, 1050),
    obsobc: new Sprite('.././images/2sheepchickenblue.png', 675, 1050),
    orsorc: new Sprite('.././images/2sheepchickenred.png', 675, 1050),
    oysoyc: new Sprite('.././images/2sheepchickenyellow.png', 675, 1050),
    oycobc: new Sprite('.././images/2yellowbluechicken.png', 675, 1050),
    oypobp: new Sprite('.././images/2yellowbluepig.png', 675, 1050),
    oysobs: new Sprite('.././images/2yellowbluesheep.png', 675, 1050),
    oycobp: new Sprite('.././images/2yellowchickenbluepig.png', 675, 1050),
    oycorp: new Sprite('.././images/2yellowchickenredpig.png', 675, 1050),
    oypobs: new Sprite('.././images/2yellowpigbluesheep.png', 675, 1050),
    oypors: new Sprite('.././images/2yellowpigredsheep.png', 675, 1050),
    oysobc: new Sprite('.././images/2yellowsheepbluechicken.png', 675, 1050),
    oysorc: new Sprite('.././images/2yellowsheepredchicken.png', 675, 1050),

    nokc: new Sprite('.././images/N1blackchicken.png', 675, 1050),
    nokp: new Sprite('.././images/N1blackpig.png', 675, 1050),
    noks: new Sprite('.././images/N1blacksheep.png', 675, 1050),
    nobc: new Sprite('.././images/N1bluechicken.png', 675, 1050),
    nobp: new Sprite('.././images/N1bluepig.png', 675, 1050),
    nobs: new Sprite('.././images/N1bluesheep.png', 675, 1050),
    norc: new Sprite('.././images/N1redchicken.png', 675, 1050),
    norp: new Sprite('.././images/N1redpig.png', 675, 1050),
    nors: new Sprite('.././images/N1redsheep.png', 675, 1050),
    noyc: new Sprite('.././images/N1yellowchicken.png', 675, 1050),
    noyp: new Sprite('.././images/N1yellowpig.png', 675, 1050),
    noys: new Sprite('.././images/N1yellowsheep.png', 675, 1050),

    ntkc: new Sprite('.././images/N2blackchicken.png', 675, 1050),
    ntkp: new Sprite('.././images/N2blackpig.png', 675, 1050),
    ntks: new Sprite('.././images/N2blacksheep.png', 675, 1050),
    ntbc: new Sprite('.././images/N2bluechicken.png', 675, 1050),
    ntbp: new Sprite('.././images/N2bluepig.png', 675, 1050),
    ntbs: new Sprite('.././images/N2bluesheep.png', 675, 1050),
    ntrc: new Sprite('.././images/N2redchicken.png', 675, 1050),
    ntrp: new Sprite('.././images/N2redpig.png', 675, 1050),
    ntrs: new Sprite('.././images/N2redsheep.png', 675, 1050),
    ntyc: new Sprite('.././images/N2yellowchicken.png', 675, 1050),
    ntyp: new Sprite('.././images/N2yellowpig.png', 675, 1050),
    ntys: new Sprite('.././images/N2yellowsheep.png', 675, 1050),

    hyw: new Sprite('.././images/3yellowstar.png', 675, 1050),
    hrw: new Sprite('.././images/3redstar.png', 675, 1050),
    hbw: new Sprite('.././images/3bluestar.png', 675, 1050),

    hkc: new Sprite('.././images/3blackchicken.png', 675, 1050),
    hks: new Sprite('.././images/3blacksheep.png', 675, 1050),
    hkp: new Sprite('.././images/3blackpig.png', 675, 1050),

    oycoysoyp: new Sprite('.././images/3wildyellow.png', 675, 1050),
    orcorsorp: new Sprite('.././images/3wildred.png', 675, 1050),
    obcobsobp: new Sprite('.././images/3wildblue.png', 675, 1050),
    okcobsokp: new Sprite('.././images/3wildblack.png', 675, 1050),
    oycorcobc: new Sprite('.././images/3wildchicken.png', 675, 1050),
    oysorsobs: new Sprite('.././images/3wildsheep.png', 675, 1050),
    oyporpobp: new Sprite('.././images/3wildpig.png', 675, 1050),




    ucrp: new Sprite('.././images/Sumbluechickenredpig.png', 675, 1050),
    ucyp: new Sprite('.././images/Sumbluechickenyellowpig.png', 675, 1050),
    uprs: new Sprite('.././images/Sumbluepigredsheep.png', 675, 1050),
    upys: new Sprite('.././images/Sumbluepigyellowsheep.png', 675, 1050),
    usrc: new Sprite('.././images/Sumbluesheepredchicken.png', 675, 1050),
    usyc: new Sprite('.././images/Sumbluesheepyellowchicken.png', 675, 1050),
    rcbp: new Sprite('.././images/Sumredchickenbluepig.png', 675, 1050),
    rcyp: new Sprite('.././images/Sumredchickenyellowpig.png', 675, 1050),
    rpbs: new Sprite('.././images/Sumredpigbluesheep.png', 675, 1050),
    rpys: new Sprite('.././images/Sumredpigyellowsheep.png', 675, 1050),
    rsbc: new Sprite('.././images/Sumredsheepbluechicken.png', 675, 1050),
    rsyc: new Sprite('.././images/Sumredsheepyellowchicken.png', 675, 1050),
    ycbp: new Sprite('.././images/Sumyellowchickenbluepig.png', 675, 1050),
    ycrp: new Sprite('.././images/Sumyellowchickenredpig.png', 675, 1050),
    ypbs: new Sprite('.././images/Sumyellowpigbluesheep.png', 675, 1050),
    yprs: new Sprite('.././images/Sumyellowpigredsheep.png', 675, 1050),
    ysbc: new Sprite('.././images/Sumyellowsheepbluechicken.png', 675, 1050),
    ysrc: new Sprite('.././images/Sumyellowsheepredchicken.png', 675, 1050),
    uw: new Sprite('.././images/TotalBlue.png', 675, 1050),
    rw: new Sprite('.././images/TotalRed.png', 675, 1050),
    yw: new Sprite('.././images/TotalYellow.png', 675, 1050),
    bc: new Sprite('.././images/Totalchicken.png', 675, 1050),
    bp: new Sprite('.././images/Totalpig.png', 675, 1050),
    bs: new Sprite('.././images/Totalsheep.png', 675, 1050),
}
let hard_deck = easy_deck;

module.exports = {sum_deck, easy_deck, hard_deck, sprites}