import React from 'react';
import Header from '../Component/Header';

function Home(props) {
    return (
        <>
        <Header />
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    One of three columns
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
                <div class="col-sm">
                    One of three columns
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;