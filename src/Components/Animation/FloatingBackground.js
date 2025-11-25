import FloatingItem from "./FloatingItem";

const FloatingBackground = () => {
    return (
        <div style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, zIndex: 1, pointerEvents: "none"}}>
            <FloatingItem text="save.gif" x="10%" y="20%" delay={0.2} />
            <FloatingItem text="rocket.gif" x="70%" y="10%" delay={0.5} />
            <FloatingItem text="share.gif" x="15%" y="70%" delay={0.8} />
            <FloatingItem text="computer.gif" x="85%" y="70%" delay={1} />
        </div>
    );
};

export default FloatingBackground;
