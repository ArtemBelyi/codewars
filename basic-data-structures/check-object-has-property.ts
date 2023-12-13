/* Finish writing the function so that it returns true if the object passed to it contains all four names,
 Alan, Jeff, Sarah and Ryan and returns false otherwise */

const users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    const requiredKeys = ["Alan", "Jeff", "Sarah", "Ryan"];
    const currentKeys = Object.keys(userObj);

    return requiredKeys.join() === currentKeys.join();
}