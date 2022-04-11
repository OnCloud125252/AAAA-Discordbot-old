import fs from 'fs';

export async function storegameID(authorID, gameID) {
    let errcode = 0;
    let data = {
        discordID: authorID,
        gameID: gameID
    };
    if (JSON.parse(fs.readFileSync('./playerID.json')).some(obj => obj.discordID == authorID)) {
        errcode = 2;
    }
    else if (!(JSON.parse(fs.readFileSync('./playerID.json')).some(obj => obj.discordID == authorID))){
        fs.readFile("./playerID.json", (err, olddata) => {
            if (err) throw err;
            var json = JSON.parse(olddata);
            json.push(data);
            fs.writeFile("./playerID.json", JSON.stringify(json, null, 4), err => {
                if (err) throw err;
            });
        });
        errcode = 1;
    };
    return errcode;
}


export async function readgameID(authorID) {
    let errcode = 0;
    let gameID = '';
    let data = JSON.parse(fs.readFileSync('./playerID.json')).find(obj => obj.discordID == authorID)
    if (data) {
        errcode = 1;
        gameID = data.gameID;
    }
    else if (!data) {
        errcode = 2;
    };
    return {
        errcode: errcode,
        gameID: gameID
    };
}