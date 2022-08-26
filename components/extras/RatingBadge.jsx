import {BsStarFill} from "react-icons/bs";

const RatingBadge = ({ className, rating, color }) => {
    return <span className={`badge rounded-pill bg-light text-dark d-flex align-items-center border border-warning border-2 ${className}`}>
        <BsStarFill className={"me-1"} color={"gold"} /> {rating}
    </span>
}

export default RatingBadge