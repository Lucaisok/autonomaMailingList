import React from "react";

export default function Links() {
    return (
        <div className="app">
            <div className="header">
                <img src="/images/logoAutonoma%20copy.png" />
            </div>
            <div className="linkTreeContainer">
                <a href="https://autonomaindustriale.bandcamp.com/" target="_blank" className="link"><p className="pLink">_Store</p></a>
                <a href="https://soundcloud.com/autonoma-industriale" target="_blank" className="link"><p className="pLink">_Soundcloud</p></a>
                <a href="https://soundcloud.com/autonoma-industriale/sets/mix-series" target="_blank" className="link"><p className="pLink">_Mix Series</p></a>
                <a href="https://www.youtube.com/channel/UC_MYMo3Qpq7HZzDt0rz_d3Q" target="_blank" className="link"><p className="pLink">_Youtube</p></a>
                <a href="https://www.facebook.com/AutonomaIndustriale" target="_blank" className="link"><p className="pLink">_Facebook</p></a>
                <a href="https://www.instagram.com/autonoma.industriale/?hl=it" target="_blank" className="link"><p className="pLink">_Instagram</p></a>
            </div>
        </div>
    )
}