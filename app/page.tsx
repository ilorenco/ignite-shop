import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { HomeSlider } from "./components/home-slider";

export default async function Home() {
    const response = await stripe.products.list({
        expand: ['data.default_price'],
    });

    console.log(response.data);

    const products = response.data.map((product) => {
        const price = product.default_price as Stripe.Price

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format((price.unit_amount ?? 0) / 100),
        }
    })

    return <HomeSlider products={products} />
}