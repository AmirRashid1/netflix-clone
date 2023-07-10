import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { loadStripe } from '@stripe/stripe-js';
import db from '../firebase';

function PlansScreen() {
    const[products,setProducts]=useState([]);
    const user=useSelector(selectUser);

    useEffect(() => {
        db.collection('products')
            .where("active", "==", true)
            .get()
            .then((querySnapshot) => {
                const products = {};
                querySnapshot.forEach(async (productDoc) => {
                    products[productDoc.id] = productDoc.data();
                    const priceSnap = await productDoc.ref.collection("prices").get();
                    priceSnap.docs.forEach((price) => {
                        products[productDoc.id].prices = {
                            priceId: price.id,
                            priceData: price.data()
                        };
                    });
                });
                setProducts(products);
            });
    })

    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('custimers')
            .doc(user.uid).collection('checkout_sessions')
            .add({
                price: priceId,
                success_url: window.location.origin,
                cancel_url: window.location.origin
            });

        docRef.onSnapshot(async (snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                alert(` error occured ${error.message}`);
            }

            if(sessionId){
                const stripe=await loadStripe("pk_test_51IHY5bGxTMskvQrGCC0gRGHoiphdjCAqSM92Nt453P9E4jevxDyczNtZ3eLHo2JQs5Uec0zyche1jXaBArRMrIzT00FL6I5P1G");

                // API="pk_test_51IHY5bGxTMskvQrGCC0gRGHoiphdjCAqSM92Nt453P9E4jevxDyczNtZ3eLHo2JQs5Uec0zyche1jXaBArRMrIzT00FL6I5P1G"

                stripe.redirectToCheckout({sessionId});
            }
        });
    }
    return (
        <div className='bg-white'>
            {Object.entries(products).map(([productId,productData])=>{
                return(
                    <div className='text-white'>
                        <div>
                            <h4>{productData.name}</h4>
                            <h6>{productData.description}</h6>

                        </div>

                        <button onClick={()=>loadCheckout(productData.prices.priceId)}>Subscribe</button>
                    </div>
                )
            })}
        </div>
    )
}

export default PlansScreen