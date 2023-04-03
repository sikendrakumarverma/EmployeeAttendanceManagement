import { useState, useCallback } from "react";
import FrameComponent from "./FrameComponent";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";

const ViewEmployeeDetails = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isFrame3Open, setFrame3Open] = useState(false);
  const [isFrame4Open, setFrame4Open] = useState(false);
  const [isFrame5Open, setFrame5Open] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const openFrame1 = useCallback(() => {
    setFrame1Open(true);
  }, []);

  const closeFrame1 = useCallback(() => {
    setFrame1Open(false);
  }, []);

  const openFrame2 = useCallback(() => {
    setFrame2Open(true);
  }, []);

  const closeFrame2 = useCallback(() => {
    setFrame2Open(false);
  }, []);

  const openFrame3 = useCallback(() => {
    setFrame3Open(true);
  }, []);

  const closeFrame3 = useCallback(() => {
    setFrame3Open(false);
  }, []);

  const openFrame4 = useCallback(() => {
    setFrame4Open(true);
  }, []);

  const closeFrame4 = useCallback(() => {
    setFrame4Open(false);
  }, []);

  const openFrame5 = useCallback(() => {
    setFrame5Open(true);
  }, []);

  const closeFrame5 = useCallback(() => {
    setFrame5Open(false);
  }, []);

  const onGroupIconClick = useCallback(() => {
    navigate("/macbook-pro-16-3");
  }, [navigate]);

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          width: "100%",
          height: "1117px",
          textAlign: "left",
          fontSize: "24px",
          color: "#fff",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "0px 20px 20px 0px",
            backgroundColor: "#cd7676",
            width: "443px",
            height: "1117px",
          }}
        />
        <b
          style={{
            position: "absolute",
            top: "42px",
            left: "48px",
            fontSize: "36px",
          }}
        >
          EMS
        </b>
        <img
          style={{
            position: "absolute",
            top: "42px",
            left: "1630px",
            width: "50px",
            height: "50px",
          }}
          alt=""
          src="/ellipse-1.svg"
        />
        <img
          style={{
            position: "absolute",
            top: "226px",
            left: "139px",
            width: "165px",
            height: "165px",
            objectFit: "cover",
          }}
          alt=""
          src="/ellipse-22@2x.png"
        />
        <div
          style={{
            position: "absolute",
            top: "439px",
            left: "85px",
            fontWeight: "500",
          }}
        >
          Name : Mandeep Singh
        </div>
        <div
          style={{
            position: "absolute",
            top: "492px",
            left: "85px",
            fontWeight: "500",
          }}
        >
          ID : 006873
        </div>
        <div
          style={{
            position: "absolute",
            top: "545px",
            left: "85px",
            fontWeight: "500",
          }}
        >
          Phone No.: 0011001100
        </div>
        <div
          style={{
            position: "absolute",
            top: "945px",
            left: "85px",
            fontWeight: "600",
          }}
        >
          Day : Monday
        </div>
        <div
          style={{
            position: "absolute",
            top: "992px",
            left: "85px",
            fontWeight: "600",
          }}
        >
          Date : 13/02/2023
        </div>
        <div
          style={{
            position: "absolute",
            top: "140px",
            left: "466px",
            borderRadius: "19px",
            backgroundColor: "#d9d9d9",
            width: "1214px",
            height: "929px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "164px",
            left: "490px",
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "748px",
            height: "881px",
            overflowY: "auto",
            color: "#000",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              borderRadius: "14px",
              backgroundColor: "#fff",
              width: "748px",
              height: "881px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "123px",
              left: "227px",
              width: "275px",
              height: "48px",
              cursor: "pointer",
            }}
            onClick={openFrame}
          >
            <div
              style={{
                position: "absolute",
                top: "1px",
                left: "0px",
                textAlign: "right",
              }}
            >
              09:15 AM
            </div>
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "159px",
                width: "116px",
                height: "29px",
              }}
            >
              <div style={{ position: "absolute", top: "0px", left: "0px" }}>
                Punch - In
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                top: "29px",
                left: "159px",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Edit
            </div>
            <img
              style={{
                position: "absolute",
                top: "5px",
                left: "123px",
                width: "20px",
                height: "20px",
              }}
              alt=""
              src="/ellipse-3.svg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "317px",
              left: "231px",
              width: "292px",
              height: "48px",
              cursor: "pointer",
            }}
            onClick={openFrame1}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                textAlign: "right",
              }}
            >
              11:25 AM
            </div>
            <div style={{ position: "absolute", top: "0px", left: "155px" }}>
              Punch - Out
            </div>
            <div
              style={{
                position: "absolute",
                top: "29px",
                left: "155px",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Edit
            </div>
            <img
              style={{
                position: "absolute",
                top: "4px",
                left: "119px",
                width: "20px",
                height: "20px",
              }}
              alt=""
              src="/ellipse-4.svg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "416px",
              left: "232px",
              width: "270px",
              height: "48px",
              cursor: "pointer",
            }}
            onClick={openFrame2}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                textAlign: "right",
              }}
            >
              12:15 PM
            </div>
            <div style={{ position: "absolute", top: "0px", left: "154px" }}>
              Punch - In
            </div>
            <div
              style={{
                position: "absolute",
                top: "29px",
                left: "154px",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Edit
            </div>
            <img
              style={{
                position: "absolute",
                top: "5px",
                left: "118px",
                width: "20px",
                height: "20px",
              }}
              alt=""
              src="/ellipse-3.svg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "525px",
              left: "227px",
              width: "294px",
              height: "48px",
              cursor: "pointer",
            }}
            onClick={openFrame3}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                textAlign: "right",
              }}
            >
              01:00 PM
            </div>
            <div style={{ position: "absolute", top: "0px", left: "159px" }}>
              Lunch - Out
            </div>
            <div
              style={{
                position: "absolute",
                top: "29px",
                left: "159px",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Edit
            </div>
            <img
              style={{
                position: "absolute",
                top: "5px",
                left: "123px",
                width: "20px",
                height: "20px",
              }}
              alt=""
              src="/ellipse-4.svg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "619px",
              left: "227px",
              width: "273px",
              height: "48px",
              cursor: "pointer",
            }}
            onClick={openFrame4}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                textAlign: "right",
              }}
            >
              01:30 PM
            </div>
            <div style={{ position: "absolute", top: "0px", left: "159px" }}>
              Lunch - In
            </div>
            <div
              style={{
                position: "absolute",
                top: "29px",
                left: "159px",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Edit
            </div>
            <img
              style={{
                position: "absolute",
                top: "7px",
                left: "123px",
                width: "20px",
                height: "20px",
              }}
              alt=""
              src="/ellipse-3.svg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "674px",
              left: "358px",
              borderRight: "2px solid #000",
              boxSizing: "border-box",
              width: "2px",
              height: "287px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "968px",
              left: "228px",
              width: "295px",
              height: "48px",
              cursor: "pointer",
            }}
            onClick={openFrame5}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                textAlign: "right",
              }}
            >
              06:15 PM
            </div>
            <div style={{ position: "absolute", top: "0px", left: "158px" }}>
              Punch - Out
            </div>
            <div
              style={{
                position: "absolute",
                top: "29px",
                left: "158px",
                fontSize: "16px",
                fontWeight: "300",
              }}
            >
              Edit
            </div>
            <img
              style={{
                position: "absolute",
                top: "5px",
                left: "122px",
                width: "20px",
                height: "20px",
              }}
              alt=""
              src="/ellipse-3.svg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "1016px",
              left: "17px",
              backgroundColor: "#fff",
              width: "727px",
              height: "48px",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "1003px",
            left: "1476px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
            color: "#000",
          }}
        >
          Status : Present
        </div>
        <div
          style={{
            position: "absolute",
            top: "200px",
            left: "797px",
            fontSize: "32px",
            fontWeight: "600",
            color: "#cd7676",
          }}
        >
          Timeline
        </div>
        <div
          style={{
            position: "absolute",
            top: "164px",
            left: "1262px",
            borderRadius: "15px",
            backgroundColor: "#fff",
            width: "394px",
            display: "flex",
            flexDirection: "column",
            padding: "36px 48px 48px",
            boxSizing: "border-box",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            fontSize: "32px",
            color: "#cd7676",
          }}
        >
          <div
            style={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "24px",
            }}
          >
            <div style={{ position: "relative", fontWeight: "600" }}>
              Day Details
            </div>
            <div
              style={{
                width: "299px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "24px",
                fontSize: "24px",
                color: "#000",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                  width: "294px",
                }}
              >
                Total Present Time : 08:30
              </div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                  width: "299px",
                }}
              >
                Total Absent Time : 00:30
              </div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                  width: "299px",
                }}
              >
                Total Exemption : 00:00
              </div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                  width: "299px",
                }}
              >
                Total Deduction : 00:00
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "342px",
            left: "848px",
            borderRight: "2px solid #000",
            boxSizing: "border-box",
            width: "2px",
            height: "132px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "521px",
            left: "848px",
            borderRight: "2px solid #000",
            boxSizing: "border-box",
            width: "2px",
            height: "52px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "635px",
            left: "848px",
            borderRight: "2px solid #000",
            boxSizing: "border-box",
            width: "2px",
            height: "47px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "744px",
            left: "848px",
            borderRight: "2px solid #000",
            boxSizing: "border-box",
            width: "2px",
            height: "32px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "131px",
            left: "48px",
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
          alt=""
          src="/group-11.svg"
          onClick={onGroupIconClick}
        />
        <img
          style={{
            position: "absolute",
            top: "131px",
            left: "345px",
            width: "50px",
            height: "50px",
            cursor: "pointer",
          }}
          alt=""
          src="/group-12.svg"
          onClick={onGroupClick}
        />
        <div
          style={{
            position: "absolute",
            top: "113px",
            left: "466px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#000",
          }}
        >{`Admin / Employees / Tech Inject `}</div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalPopup>
      )}
      {isFrame1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame1}
        >
          <FrameComponent onClose={closeFrame1} />
        </PortalPopup>
      )}
      {isFrame2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame2}
        >
          <FrameComponent onClose={closeFrame2} />
        </PortalPopup>
      )}
      {isFrame3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame3}
        >
          <FrameComponent onClose={closeFrame3} />
        </PortalPopup>
      )}
      {isFrame4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame4}
        >
          <FrameComponent onClose={closeFrame4} />
        </PortalPopup>
      )}
      {isFrame5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame5}
        >
          <FrameComponent onClose={closeFrame5} />
        </PortalPopup>
      )}
    </>
  );
};

export default ViewEmployeeDetails;
