import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './live.scss'
import desktop from '../../assets/images/icon/computer.svg'
import mobile from '../../assets/images/icon/smartphone.svg'
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { themeDetails } from '../../services/pages.service';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
const LivePreview = () => {

    const [activeButton, setActiveButton] = useState('');
    const location = useLocation();
    const { state } = location;
    const { id } = useParams();
    const [themeData, setThemeData] = useState([]);

    useEffect(() => {
        fetchDetails(id);
    }, [id]);

    const fetchDetails = async (id) => {
        const { data } = await themeDetails(id);
        setThemeData(data?.data?.theme_data);
    };

    const handleClick = (button) => {
        setActiveButton(button);
    };
    console.log('themeData',themeData)
    return (
        <>
            <Navbar className="fixed-top" bg="light" data-bs-theme="light">
                <Container>
                    <Link to={{ pathname: `/product-details/${id}` }} className='d-flex align-items-center gap-2 py-0 navbar-brand'>
                        <svg width={'17px'} xmlns="http://www.w3.org/2000/svg" version="1.0" height="40.000000pt" viewBox="0 0 40.000000 40.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M97 258 c-36 -29 -66 -55 -66 -58 0 -8 115 -99 133 -106 13 -5 16 0 16 25 0 27 3 31 28 31 43 0 115 -41 132 -75 20 -40 19 -39 26 -32 3 3 -1 31 -10 61 -21 71 -69 122 -131 137 -40 10 -45 14 -45 40 0 16 -4 29 -9 29 -4 0 -38 -24 -74 -52z" />
                            </g>
                        </svg>
                        View theme info</Link>

                    <div className='responsive d-none d-lg-block'>
                        <button className={activeButton === 'desktop' ? 'active' : ''} onClick={() => handleClick('desktop')}>
                            <img src={desktop} alt="desktop" />
                        </button>
                        <button className={activeButton === 'mobile' ? 'active' : ''} onClick={() => handleClick('mobile')}>
                            <img src={mobile} alt="mobile" />
                        </button>
                    </div>

                    
                    <AddToCartButton themeid={id} forPagetoShowWhichDesign={3} themePrice={themeData?.sale_price}/>
                </Container>
            </Navbar>

            <iframe className={activeButton} src={state?.url || themeData?.livepreview_url} width="100%" title="theme preview"></iframe>
        </>
    )
}

export default LivePreview