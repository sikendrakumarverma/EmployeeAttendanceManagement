const FrameComponent = ({ onClose }) => {
    return (
      <div
        style={{
          position: "relative",
          borderRadius: "15px",
          backgroundColor: "#fff",
          width: "560px",
          height: "617px",
          overflow: "hidden",
          maxWidth: "100%",
          maxHeight: "100%",
          textAlign: "left",
          fontSize: "24px",
          color: "#000",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "14px",
            backgroundColor: "#fff",
            width: "560px",
            height: "617px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "48px",
            left: "48px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "-0.02em",
                display: "inline-block",
                width: "397px",
              }}
            >
              Scan type
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "5px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #000",
                boxSizing: "border-box",
                width: "464px",
                height: "48px",
                flexShrink: "0",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "-0.02em",
                display: "inline-block",
                width: "397px",
              }}
            >
              Machine ID
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "5px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #000",
                boxSizing: "border-box",
                width: "464px",
                height: "48px",
                flexShrink: "0",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "-0.02em",
                display: "inline-block",
                width: "397px",
              }}
            >
              Total Time
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "5px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #000",
                boxSizing: "border-box",
                width: "464px",
                height: "48px",
                flexShrink: "0",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "-0.02em",
                display: "inline-block",
                width: "397px",
              }}
            >
              Deductions
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "5px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #000",
                boxSizing: "border-box",
                width: "464px",
                height: "48px",
                flexShrink: "0",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "8px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "-0.02em",
                display: "inline-block",
                width: "397px",
              }}
            >
              Exemptions
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "5px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #000",
                boxSizing: "border-box",
                width: "464px",
                height: "48px",
                flexShrink: "0",
              }}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default FrameComponent;
  