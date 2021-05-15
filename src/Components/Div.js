import './Styling/Div.css'
import m from './images/m.svg'
import n from './images/n.svg'
import o from './images/o.svg'
const Div = () => {
    return (
        <div className="div">
            <div className="d"><img src={m}></img></div>
             <div className="dI"><video loop autoPlay muted>
            <source
              src="https://womensday2021.thesparksfoundation.info/pledge/images/movie3.mp4"
              type="video/mp4"
            />
          </video></div>
            {/*<div className="d"><img src={o}></img></div>
            <div className="d"><img src={m}></img></div> */}
            
        </div>
    )
}

export default Div
