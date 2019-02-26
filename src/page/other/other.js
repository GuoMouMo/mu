import _ from 'lodash';
const d = 2;
const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (d == 2) {
            resolve(d);
        } else {
            reject(d);
        }
    }, 1000)
});
b.then((d) => {
    console.log('444--<<', d);
}).catch((d) => {
    console.log('333--<<', d);
})
console.log(_.join(['333', '222', 'dd2122aas']));