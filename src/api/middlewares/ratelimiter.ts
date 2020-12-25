import rateLimit from 'express-rate-limit';

export default rateLimit({
    windowMs:15*60*1000,
    max:100,
    statusCode:429,
    message: 'Too Many Request from this IP. Try again after 15 minutes'
})