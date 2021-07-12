import { Info, PlayArrow } from '@material-ui/icons';
import React from 'react'
import { Button } from 'reactstrap';
import '../assets/css/bootstrap.css';

const Hero = () => {
    return (
        <div className="hero">
            <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABX_vak5E3ohUeILPkL9wm0QwXk4-YmcOCRNYC3gKKAlt7BVgFP8lwhJajJ_bB70v85Gaikiu-wZIzA3j_rogzVi1p4AP.jpg?r=d80" alt=""/>
            <div className="title">
                <img src="https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfVChmjwTj_nKYMKPQEZ8J1-VnHQ9BaJnoQGSlmAmZP4QVbJQWsd73_eUhW9WxiL9ggtByyQ_lFJH75F-ueiuYxucKEFkBjy7FzNPNAwK0Bq2-612spugBLKHzlW1JQWJxuKnyWX5jmNsJG97CgzpHDxYMvnnX1un7_E15SED0Hl8A.png?r=2f1" alt=""/>
                <span className="desc">The privileged life of a pampered dog named Trouble is turned upside-down when he gets lost and must learn to survive on the big-city streets.</span>
                <div className="button">
                <Button color="danger">
                    <PlayArrow/>
                    <span>Play</span>
                </Button>
                <Button>
                    <Info/>
                    <span>Info</span>
                </Button>
            </div>
            </div>
            
        </div>
    )
}

export default Hero
