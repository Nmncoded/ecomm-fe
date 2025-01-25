import React from "react";
import "./index.scss";
// import ErrorImg from "../../assets/error.gif";

const ErrorComponent = () => {
    return (
        <div className="errorSection" style={{ width: "100%" }}>
            <div style={{ textAlign: "center" }}>
                <h6 style={{ fontSize: "20px", color: "grey", marginTop: "40px" }}>
                    The page you are looking for might have been removed or temporary
                    unvailable
                </h6>
                {/* <img style={{ maxWidth: "100%" }} src={ErrorImg} alt="" width="500" /> */}
                <h5
                    style={{
                        fontSize: "18px",
                        color: "rgba(0,0,0,0.6)",
                        fontWeight: "350",
                    }}
                >
                    Try to refresh page or Login again!
                </h5>
            </div>
        </div>
    );
};

export default React.memo(ErrorComponent);
