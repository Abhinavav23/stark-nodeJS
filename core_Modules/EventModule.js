const Event = require('events');
// console.log('start');

// events --> something happend -> login(event name)
// handler for login --> what to do if login happens
// raise the event

const Login = new Event();


Login.addListener('start', (username, email) => {
    console.log(`login started for ${username}, email: ${email}`);
})

Login.addListener('success', () => {
    console.log('login success 1');
})

const handler2 = () => {
    console.log('login success 2');
}

Login.on('success', handler2);

Login.on('failed', () => {
    console.log('login failed');
})

// Login.emit('start', 'Abhinav', 'abhinav@mail');
// Login.emit('start', 'Suraj', 'suraj@mail');

Login.emit('success');
// Login.off('success', handler2);
Login.removeListener('success', handler2);
Login.emit('success');
// Login.emit('failed');



// console.log('end');
// methods to try out

// eventNames
// listenerCount
// removeAllListeners
// once
