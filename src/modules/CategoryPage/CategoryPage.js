import React, { useEffect, useState } from 'react'
import './category.scss'
import { Link, useLocation, useParams } from 'react-router-dom'
import cartIcon from '../../assets/images/icon/cart.svg';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/reducers/commonReducer.slice';
import LoaderAnimation from '../../components/common/LoaderAnimation/LoaderAnimation';

const CategoryPage = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await dispatch(getCategories(id));
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  console.log('data', data)
  console.log('loading', loading)

  return (
    <section>
      <div className="title_block">
        <div className="container">
          <div className="heading">
            <h1>Category</h1>
            <p className='h5'>{state?.name}</p>
          </div>
        </div>
      </div>
      <div className="blog-area pb-5">
        <div className="container">
          <div className="row gap-y-24">
            {
              loading ? (
                <div className="custom-loader mx-auto"></div>
              ) : (
                Array.isArray(data?.payload) && data.payload.length > 0 ? (
                  data.payload.map((category, i) => (
                    <div className="col-lg-3 col-md-4 col-12" key={i}>
                      <div className="single-blog blog-style-one">
                        <Link to={`/product-details/${category?.id}`} className='link'>
                          <img src={category?.featured_image} alt="img" className="bgImg" />
                        </Link>
                     

                        <Link className='live' target='_blank'
                          to={{ pathname: `/preview/${category?.id}` }}
                        ></Link>


                        <div className="blog-content">
                          <div className="top">
                            <Link to={`/cart/`} className="cartBtn">
                              <img src={cartIcon} alt="Card Images" width={'20px'} />
                              <label>Add to cart</label>
                            </Link>
                            <span>${category?.theme_price}</span>
                          </div>
                          <h5 className="blog-title">
                            <Link to={`/product-details/${category?.id}`}>
                              {category?.theme_name}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  !data?.payload ? (
                    <div className='text-center'>No Data Found</div>
                  ) : null
                )
              )
            }




          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryPage