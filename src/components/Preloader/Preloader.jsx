import preloader from '../../images/preloader.gif'
import style from './Preloader.module.scss'

export default function Preloader(props) {
    return (
        <div className={style.preloader}>
            <img src={preloader} />
        </div>
    )
}