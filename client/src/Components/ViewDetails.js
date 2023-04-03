import { useLocation } from "react-router-dom";
function TodayDetails() {

    let location = useLocation();
    let userData = location.state;

    return (
        <div className="view-background">
            <div className="details_div">

                <div className="employee_details">
                    <p>{userData._id}</p>
                    <br />
                    <br />
                    <p>{userData.name}</p>
                    <br />
                    <br />
                    <p>{userData.phone}</p>
                </div>
                <div className="timeLine_div">

                    <div className="time_line">
                        <h5>TimeLine</h5>
                    </div>
                    <div className="day_details">
                        <h5>Day's Details</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodayDetails;