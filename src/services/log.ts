import looger from 'pino';
import dayjs from 'dayjs';

const log = looger({
    transport: {
        target: 'pino-pretty'
    },
    base: {
        pid: false,
    }, timestamp: () => `,"time":"${dayjs().format()}"`
});

export default log;