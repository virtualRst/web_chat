import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import BusinessPost from '../Components/Home/BusinessPost';
import CulturePost from '../Components/Home/CulturePost';
import LifestylePost from '../Components/Home/LifestylePost';
import Slider from '../Components/Home/Slider';
import TechPost from '../Components/Home/TechPost';
import db from '../Components/Firebase';
import CategoriesPost from '../Components/Home/CategoriesPost';

export default function Home() {
    const [postdata, setPostdata] = useState({});
    const [lifestyle, setLifestyle] = useState({});
    const [culture, setCulture] = useState({});
    const [business, setBusiness] = useState({});
    const [technical, setTecnical] = useState({});

    useEffect(() => {
        var docRef = db.collection("blog-data").doc("categories_post");
        docRef.get().then(doc => {
            if (doc.exists) {
                let data = doc.data();
                console.log(data);
                setPostdata(data);
                localStorage.setItem('Technical',data.technical);
                // console.log(data.lifestyle);
                setLifestyle(data.lifestyle);
                setCulture(data.culture);
                setBusiness(data.business);
                setTecnical(data.technical);
            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }, []);
    return (
        <div>
            <Header />
            <main id="main">
                {/* <!-- ======= Hero Slider Section ======= --> */}
                <Slider />
                {/* <!-- End Hero Slider Section --> */}
                <CategoriesPost category={technical} title="Technical" />
                <CategoriesPost category={culture} title="Culture" />
                <CategoriesPost category={business} title="Business" />
                <CategoriesPost category={lifestyle} title="Lifestyle" />
            </main>
            <Footer />
        </div>
    )
}
