process.on('message', (msg) => {
    if (msg.task === 'fibonacci') {
        const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
        const result = fib(msg.number);
        process.send({ result });
    } else {
        process.send({ error: 'Unknown task' });
    }
});
