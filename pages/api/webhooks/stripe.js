import verifyStripe from '@webdeveducation/next-verify-stripe';
import Cors from 'micro-cors';
import stripeInit from 'stripe';

const cors = Cors({
    allowMethods: ['POST', 'HEAD'],
});


export const config = {
    api: {
        bodyParser: false
    }
}

const stripe = stripeInit(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const handler = async(req, res) => {
    if(req.method === 'POST'){
        const event = verifyStripe({
            req,
            stripe,
            endpointSecret
        })
    }
}