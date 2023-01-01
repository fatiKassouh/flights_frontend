import { Button } from '@material-ui/core'
import './Banner.css'


function Banner() {

  return (
    <div className='banner'>
      <div className='banner__info'>
        <h1> Fly high to your dream destinations</h1>
        <h5>
          Plan your traveling 
          to discover the hidden gems near you.
        </h5>
        <Button className='button' variant='outlined'>
          Explore Hidden Gems
        </Button>
      </div>
    </div>
  )
}

export default Banner