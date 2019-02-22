import './home.css';
const a = 1;
const b = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (a == 1) {
            resolve(a);
        } else {
            reject(a);
        }
    }, 1000)
});
b.then((a) => {
    console.log('111--<<', a);
}).catch((b) => {
    console.log('222--<<', b);
})
console.log(_.join(['123', '123', 'ddaas']));