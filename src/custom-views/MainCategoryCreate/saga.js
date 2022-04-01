////////////////
//ASYNC FINISHED
////////////////

export function* createMainCatCB(action) {

    try {

    } catch (err) {
        console.error(err.message)
    }
}


function* watchCreateMainCatSagas() {
}

const createMainCatSagas = [watchCreateMainCatSagas]

export default createMainCatSagas