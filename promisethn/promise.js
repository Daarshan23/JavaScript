
function advance() {

    return new Promise((res, rej) => {
        setTimeout(() => {

            rej("ERROR")
        }, 1000)
    })
}

advance().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
function test() {

    var promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            reject("ERROR")
        }, 3000)
    })

    console.log(promise);

    promise.then((data) => {
        console.log(data);
    })
    promise.catch((err) => {
        console.log(err);
    })


}

test();