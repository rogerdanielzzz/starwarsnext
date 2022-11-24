import Style from "../../styles/Msg.module.scss"
import { useDispatch, useSelector } from "react-redux";


const Msg = ({cleaner}) => {
    const charFinded = useSelector((state) => state.charFinded)

    return (
        <div>
            <h1 className={Style.mssg}>{charFinded.error}</h1>
            <button className={Style.btn} onClick={cleaner}>Go Back</button>
        </div>
    )
}

export default Msg